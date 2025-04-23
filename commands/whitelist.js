
const fs = require('fs');
const path = require('path');

const blacklistPath = path.join(__dirname, '../data/blacklist.json');

module.exports = {
  name: 'whitelist',
  async execute(message, args) {
    if (!message.member.permissions.has('Administrator')) {
      return message.reply("❌ Seuls les grands chefs peuvent retirer un bannissement.");
    }

    const userId = args[0];
    if (!userId || isNaN(userId)) {
      return message.reply("⚠️ Donne un ID valide à libérer.");
    }

    let list = JSON.parse(fs.readFileSync(blacklistPath));
    if (!list.includes(userId)) {
      return message.reply("🚫 Cet ID n’est même pas dans la blacklist.");
    }

    list = list.filter(id => id !== userId);
    fs.writeFileSync(blacklistPath, JSON.stringify(list, null, 2));
    message.reply(`✅ L’utilisateur avec l’ID ${userId} est maintenant libre... mais surveille-le.`);
  }
};
