module.exports = {
  name: 'unlock',
  description: '🔓 Déverrouille le salon pour permettre les messages.',
  async execute(message) {
    if (!message.member.permissions.has("ManageChannels")) {
      return message.reply("🚫 T'as pas le droit de déverrouiller ce salon.");
    }

    try {
      await message.channel.permissionOverwrites.edit(message.guild.roles.everyone, {
        SendMessages: true
      });
      message.channel.send("🔓 Ce salon est maintenant déverrouillé. Vous pouvez geulez.");
    } catch (err) {
      console.error(err);
      message.reply("💥 Impossible de déverrouiller. Check les perms.");
    }
  }
};
