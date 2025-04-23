
const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'serverinfo',
  description: 'Affiche les infos du serveur',
  async execute(message) {
    const { guild } = message;

    const embed = new EmbedBuilder()
      .setTitle(`🌐 Infos du serveur : ${guild.name}`)
      .setThumbnail(guild.iconURL({ dynamic: true }))
      .addFields(
        { name: 'ID', value: guild.id, inline: true },
        { name: 'Membres', value: `${guild.memberCount}`, inline: true },
        { name: 'Créé le', value: `<t:${parseInt(guild.createdTimestamp / 1000)}:F>`, inline: false },
        { name: 'Propriétaire', value: `<@${guild.ownerId}>`, inline: true }
      )
      .setColor(0xff0033)
      .setFooter({ text: 'Violator' })
      .setTimestamp();

    message.channel.send({ embeds: [embed] });
  }
};
