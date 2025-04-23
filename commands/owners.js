const fs = require('fs');
const owners = require('../data/owners.json');

module.exports = {
  name: "owners",
  description: "Affiche tous les utilisateurs avec les permissions du bot",
  async execute(message) {
    if (!owners.owners.includes(message.author.id)) {
      return message.reply("❌ Tu n’as pas la permission d’utiliser cette commande.");
    }

    const mentions = owners.owners.map(id => `<@${id}>`).join("\n");
    message.channel.send(`👑 **Owners autorisés :**\n${mentions}`);
  }
};