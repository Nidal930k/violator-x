module.exports = {
  name: "clearchat",
  async execute(message, args, client) {
    if (!message.member.permissions.has("Administrator")) return message.reply("🚫 T’as pas les couilles d’un admin.");

    // LOGIQUE À COMPLÉTER POUR : clearchat
    message.reply("✅ La commande `clearchat` a été reçue. À toi de jouer le bourreau !");
  }
};
