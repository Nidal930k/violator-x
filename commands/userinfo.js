
const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'userinfo',
  description: 'Affiche les infos d’un membre',
  async execute(message) {
    const member = message.mentions.members.first() || message.member;
    const user = member.user;

    const embed = new EmbedBuilder()
      .setTitle(`📋 Infos de ${user.tag}`)
      .setThumbnail(user.displayAvatarURL({ dynamic: true }))
      .addFields(
        { name: 'ID', value: user.id, inline: true },
        { name: 'Pseudo', value: user.username, inline: true },
        { name: 'Créé le', value: `<t:${parseInt(user.createdTimestamp / 1000)}:F>`, inline: false },
        { name: 'A rejoint le serveur', value: `<t:${parseInt(member.joinedTimestamp / 1000)}:F>`, inline: false },
        { name: 'Rôles', value: member.roles.cache.map(r => r.name).join(', ').replace('@everyone', ' ') || 'Aucun', inline: false }
      )
      .setColor(0xff0033)
      .setFooter({ text: 'Violator' })
      .setTimestamp();

    message.channel.send({ embeds: [embed] });
  }
};
