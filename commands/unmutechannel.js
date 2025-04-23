module.exports = {
  name: 'unmutechannel',
  description: 'Rend la parole à tout le monde dans ce salon',
  async execute(message) {
    if (!message.member.permissions.has('ManageChannels')) {
      return message.reply("🚫 T’as pas le droit d’unmute ce salon.");
    }

    try {
      await message.channel.permissionOverwrites.edit(message.guild.roles.everyone, {
        SendMessages: true
      });
      message.channel.send("🔊 Le salon est maintenant actif.");
    } catch (err) {
      console.error(err);
      message.reply("❗ Erreur lors du unmute du salon.");
    }
  }
};