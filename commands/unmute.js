module.exports = {
  name: 'unmute',
  description: 'Unmute un utilisateur.',
  async execute(message, args) {
    if (!message.member.permissions.has('MuteMembers')) {
      return message.reply("🚫 T'as pas les couilles pour unmute.");
    }

    const member = message.mentions.members.first();
    if (!member) {
      return message.reply("❌ Utilisation: !unmute @membre");
    }

    const mutedRole = message.guild.roles.cache.find(role => role.name === 'Muted');
    if (!mutedRole) {
      return message.reply("❌ Le rôle Muted n'existe pas.");
    }

    await member.roles.remove(mutedRole);
    message.channel.send(`🔊 ${member} a retrouvé la parole.`);
  }
};