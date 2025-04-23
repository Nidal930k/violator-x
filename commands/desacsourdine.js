module.exports = {
  name: 'desacsourdine',
  async execute(message, args) {
    const member = message.mentions.members.first();
    if (!member) return message.reply('❌ Mentionne une personne.');
    try {
      await member.voice.setDeaf(false);
      message.channel.send(`👂 ${member.user.username} entend de nouveau.`);
    } catch (e) {
      message.reply("💥 Impossible de retirer la sourdine. Peut-être sourd à vie.");
    }
  }
};