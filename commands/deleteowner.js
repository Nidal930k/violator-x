
const fs = require('fs');
const configPath = './config.json';

module.exports = {
  name: 'deleteowner',
  description: 'Supprime un owner',
  async execute(message, args) {
    const config = require('../config.json');
    if (!config.owners.includes(message.author.id)) {
      return message.reply("❌ Tu n’as pas l’autorisation de faire ça.");
    }

    const user = message.mentions.users.first();
    if (!user) return message.reply("⚠️ Mentionne quelqu’un à retirer de la liste des owners.");

    if (!config.owners.includes(user.id)) {
      return message.reply("❌ Cette personne n’est pas owner.");
    }

    config.owners = config.owners.filter(id => id !== user.id);
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
    message.channel.send(`⛔ ${user.tag} a été retiré de la liste des owners. Ciao.`);
  }
};
