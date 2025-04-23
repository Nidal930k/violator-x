module.exports = {
  name: "virus",
  description: "Fausse alerte virus pour troller quelqu’un",
  execute(message) {
    const user = message.mentions.users.first();
    if (!user) return message.reply("Tu dois mentionner un utilisateur à infecter.");
    message.channel.send(`💀 Un virus a été détecté dans le système de ${user}. Mise en quarantaine immédiate.`);
  }
};