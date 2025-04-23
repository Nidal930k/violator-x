module.exports = {
  name: "removestaff",
  async execute(message, args, client) {
    if (!message.member.permissions.has("Administrator")) return message.reply("🚫 T’as pas les couilles d’un admin.");

    // LOGIQUE À COMPLÉTER POUR : removestaff
    message.reply("✅ La commande `removestaff` a été reçue. À toi de jouer le bourreau !");
  }
};
