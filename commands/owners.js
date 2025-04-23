
const { EmbedBuilder } = require('discord.js');
const config = require("../config.json");

module.exports = {
  name: 'owners',
  description: 'Affiche la liste des owners actuels',
  async execute(message) {
    const ownerMentions = config.owners.map(id => `<@${id}>`);
    const embed = new EmbedBuilder()
      .setTitle("👑 Liste des Owners Violator")
      .setDescription(ownerMentions.join('\n') || "Aucun owner défini.")
      .setColor(0xff0000)
      .setFooter({ text: 'Violator Authority' })
      .setTimestamp();

    message.channel.send({ embeds: [embed] });
  }
};
