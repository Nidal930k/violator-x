let lastDeleted = null;

module.exports = {
  name: "snipe",
  description: "Récupère le dernier message supprimé",
  execute(message) {
    if (!lastDeleted) return message.channel.send("Aucun message supprimé à afficher.");
    message.channel.send(`💬 **Dernier message supprimé :**
**${lastDeleted.author}** : ${lastDeleted.content}`);
  }
};

module.exports.lastDeleted = (msg) => {
  if (!msg.author.bot) lastDeleted = msg;
};