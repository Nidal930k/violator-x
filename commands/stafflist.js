
const fs = require('fs');
const path = require('path');

module.exports = {
  name: 'stafflist',
  description: 'Affiche la liste des personnes avec la permission staff du bot',
  async execute(message) {
    const filePath = path.join(__dirname, '../data/owners.json');

    if (!fs.existsSync(filePath)) {
      return message.reply("❌ Aucune liste trouvée.");
    }

    const data = JSON.parse(fs.readFileSync(filePath));
    if (!data.owners || data.owners.length === 0) {
      return message.reply("❌ Aucun owner ou staff enregistré.");
    }

    const formatted = data.owners.map(id => `<@${id}>`).join("\n");
    message.channel.send(`👑 Liste des personnes ayant les permissions du bot :\n${formatted}`);
  }
};
