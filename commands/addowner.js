const fs = require('fs');
const path = require('path');

module.exports = {
  name: "addowner",
  description: "Ajoute un owner qui pourra utiliser toutes les commandes admin",
  async execute(message, args) {
    const ownersPath = path.join(__dirname, "../data/owners.json");
    const ownersData = JSON.parse(fs.readFileSync(ownersPath));
    if (message.author.id !== "1154008138769518652") return message.reply("❌ Seul mon créateur peut ajouter un owner.");

    const member = message.mentions.users.first();
    if (!member) return message.reply("❌ Mentionne quelqu’un à ajouter.");

    if (!ownersData.owners.includes(member.id)) {
      ownersData.owners.push(member.id);
      fs.writeFileSync(ownersPath, JSON.stringify(ownersData, null, 2));
      return message.reply(`✅ ${member.username} est maintenant un owner.`);
    } else {
      return message.reply("⚠️ Il est déjà owner.");
    }
  }
};