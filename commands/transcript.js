const fs = require('fs');
const { MessageAttachment } = require('discord.js');

module.exports = {
  name: 'transcript',
  description: 'Exporte les messages du salon en .txt',
  async execute(message) {
    if (!message.channel.name.startsWith("ticket-")) {
      return message.reply("❌ Cette commande doit être utilisée dans un ticket.");
    }

    const messages = await message.channel.messages.fetch({ limit: 100 });
    const content = messages
      .reverse()
      .map(m => `[${m.createdAt.toLocaleString()}] ${m.author.tag}: ${m.content}`)
      .join("\n");

    const filePath = `./data/transcript-${message.channel.id}.txt`;
    fs.writeFileSync(filePath, content);

    await message.channel.send({
      content: "📝 Transcript généré :",
      files: [new MessageAttachment(filePath)]
    });
  }
};