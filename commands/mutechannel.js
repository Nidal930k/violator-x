module.exports = {
  name: 'mutechannel',
  description: 'Empêche tout le monde de parler dans ce salon',
  async execute(message) {
    if (!message.member.permissions.has('ManageChannels')) {
      return message.reply("🚫 T’as pas le droit de mute ce salon.");
    }

    try {
      await message.channel.permissionOverwrites.edit(message.guild.roles.everyone, {
        SendMessages: false
      });
      message.channel.send("🔇 Ce salon est maintenant muet.");
    } catch (err) {
      console.error(err);
      message.reply("❗ Erreur lors du mute du salon.");
    }
  }
};