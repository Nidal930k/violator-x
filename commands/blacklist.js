
const fs = require('fs');
const path = require('path');

const blacklistPath = path.join(__dirname, '../data/blacklist.json');

if (!fs.existsSync(blacklistPath)) {
  fs.writeFileSync(blacklistPath, JSON.stringify([]));
}

module.exports = {
  name: 'blacklist',
  async execute(message, args) {
    if (!message.member.permissions.has('Administrator')) {
      return message.reply("❌ T’as pas le rang pour bannir quelqu’un du royaume Violator.");
    }

    const userId = args[0];
    if (!userId || isNaN(userId)) {
      return message.reply("⚠️ Donne un ID valide à dégager.");
    }

    let list = JSON.parse(fs.readFileSync(blacklistPath));
    if (list.includes(userId)) {
      return message.reply("⛔ Cette personne est déjà dans la blacklist.");
    }

    list.push(userId);
    fs.writeFileSync(blacklistPath, JSON.stringify(list, null, 2));
    message.reply(`🧨 L’utilisateur avec l’ID ${userId} a été banni à vie de Violator.`);
  }
};
