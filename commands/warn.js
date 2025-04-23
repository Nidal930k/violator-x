const fs = require('fs');
const owners = require('../data/owners.json');

module.exports = {
  name: "warn",
  description: "Warn un utilisateur",
  async execute(message, args) {
    if (!owners.owners.includes(message.author.id)) {
      return message.reply("❌ Tu n’as pas la permission d’utiliser cette commande.");
    }

    const member = message.mentions.members.first();
    const reason = args.slice(1).join(" ");
    if (!member) return message.reply("❗ Tu dois mentionner un utilisateur.");
    if (!reason) return message.reply("❗ Donne une raison au warn.");

    message.channel.send(`⚠️ ${member} a été warn pour : ${reason}`);
  }
};