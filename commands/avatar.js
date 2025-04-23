
module.exports = {
  name: 'avatar',
  description: "Affiche l'image de profil d’un utilisateur",
  async execute(message) {
    const user = message.mentions.users.first() || message.author;
    return message.channel.send({
      content: `🖼️ Voici l'avatar de **${user.tag}** :`,
      files: [user.displayAvatarURL({ dynamic: true, size: 4096 })]
    });
  }
};
