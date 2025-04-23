module.exports = {
  name: 'mutemicro',
  async execute(message, args) {
    const member = message.mentions.members.first();
    if (!member) return message.reply('❌ Mentionne une personne.');
    try {
      await member.voice.setMute(true);
      message.channel.send(`🔇 ${member.user.username} est maintenant muet.`);
    } catch (e) {
      message.reply("💥 Impossible de mute. T'as encore tout cassé ?");
    }
  }
};