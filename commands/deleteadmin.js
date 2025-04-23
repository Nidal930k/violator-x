const fs = require('fs');
const path = require('path');

module.exports = {
  name: "deleteadmin",
  description: "Retire le rôle d’owner à un membre",
  async execute(message, args) {
    const ownersPath = path.join(__dirname, "../data/owners.json");
    const ownersData = JSON.parse(fs.readFileSync(ownersPath));
    if (message.author.id !== "1154008138769518652") return message.reply("❌ Seul mon créateur peut retirer un owner.");

    const member = message.mentions.users.first();
    if (!member) return message.reply("❌ Mentionne quelqu’un à retirer.");

    if (ownersData.owners.includes(member.id)) {
      ownersData.owners = ownersData.owners.filter(id => id !== member.id);
      fs.writeFileSync(ownersPath, JSON.stringify(ownersData, null, 2));
      return message.reply(`✅ ${member.username} n’est plus owner.`);
    } else {
      return message.reply("⚠️ Il n’était même pas owner.");
    }
  }
};