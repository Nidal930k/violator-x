
const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'uptime',
  description: 'Affiche depuis combien de temps le bot est en ligne',
  async execute(message) {
    const totalSeconds = process.uptime();
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    const embed = new EmbedBuilder()
      .setTitle('🕒 Uptime du bot')
      .setDescription(`Violator est réveillé depuis **${hours}h ${minutes}m ${seconds}s**`)
      .setColor(0xff0000)
      .setFooter({ text: 'Violator • Uptime info' })
      .setTimestamp();

    message.channel.send({ embeds: [embed] });
  }
};
