module.exports = {
  name: "addstaff",
  async execute(message, args, client) {
    if (!message.member.permissions.has("Administrator")) return message.reply("🚫 T’as pas les couilles d’un admin.");

    // LOGIQUE À COMPLÉTER POUR : addstaff
    message.reply("✅ La commande `addstaff` a été reçue. À toi de jouer le bourreau !");
  }
};
