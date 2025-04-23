
const fs = require('fs');
const configPath = './config.json';

module.exports = {
  name: 'addowner',
  description: 'Ajoute un utilisateur à la liste des owners',
  async execute(message, args) {
    const config = require('../config.json');
    if (!config.owners.includes(message.author.id)) {
      return message.reply("❌ Tu n’as pas l’autorisation de faire ça.");
    }

    const user = message.mentions.users.first();
    if (!user) return message.reply("⚠️ Mentionne quelqu’un à ajouter comme owner.");

    if (config.owners.includes(user.id)) {
      return message.reply("⚠️ Cette personne est déjà owner.");
    }

    config.owners.push(user.id);
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
    message.channel.send(`✅ ${user.tag} a été ajouté comme owner. Bienvenue dans le cercle.`);
  }
};
