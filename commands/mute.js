const ms = require('ms');

module.exports = {
  name: 'mute',
  description: 'Mute un utilisateur pour une durée spécifique.',
  async execute(message, args) {
    if (!message.member.permissions.has('MuteMembers')) {
      return message.reply("🚫 T'as pas les couilles pour mute.");
    }

    const member = message.mentions.members.first();
    const duration = args[1];

    if (!member || !duration) {
      return message.reply("❌ Utilisation: !mute @membre durée (ex: 10m, 1h, 1d)");
    }

    const mutedRole = message.guild.roles.cache.find(role => role.name === 'Muted');
    if (!mutedRole) {
      try {
        await message.guild.roles.create({
          name: 'Muted',
          permissions: [],
        });

        message.guild.channels.cache.forEach(async (channel) => {
          await channel.permissionOverwrites.create(mutedRole, {
            SendMessages: false,
            Speak: false,
            AddReactions: false
          });
        });
      } catch (error) {
        console.error(error);
        return message.reply("❌ Impossible de créer le rôle Muted.");
      }
    }

    await member.roles.add(mutedRole);
    message.channel.send(`🔇 ${member} a été réduit au silence pour ${duration}.`);

    setTimeout(async () => {
      if (member.roles.cache.has(mutedRole.id)) {
        await member.roles.remove(mutedRole);
        message.channel.send(`🔊 ${member} est libre de parler.`);
      }
    }, ms(duration));
  }
};