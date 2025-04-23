module.exports = {
  name: 'sourdine',
  async execute(message, args) {
    const member = message.mentions.members.first();
    if (!member) return message.reply('❌ Mentionne une personne.');
    try {
      await member.voice.setDeaf(true);
      message.channel.send(`🙉 ${member.user.username} est mis en sourdine.`);
    } catch (e) {
      message.reply("💥 Impossible de mettre en sourdine. Trop fort pour ça ?");
    }
  }
};