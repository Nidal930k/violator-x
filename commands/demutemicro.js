module.exports = {
  name: 'demutemicro',
  async execute(message, args) {
    const member = message.mentions.members.first();
    if (!member) return message.reply('❌ Mentionne une personne.');
    try {
      await member.voice.setMute(false);
      message.channel.send(`🔊 ${member.user.username} a retrouvé sa voix.`);
    } catch (e) {
      message.reply("💥 Impossible de demute. C'est toi le bug.");
    }
  }
};