module.exports = {
  name: "resetbot",
  async execute(message, args, client) {
    if (!message.member.permissions.has("Administrator")) return message.reply("🚫 T’as pas les couilles d’un admin.");

    // LOGIQUE À COMPLÉTER POUR : resetbot
    message.reply("✅ La commande `resetbot` a été reçue. À toi de jouer le bourreau !");
  }
};
