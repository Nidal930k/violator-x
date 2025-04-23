const fs = require('fs');
const path = require('path');

module.exports = {
  name: 'top',
  description: 'Classement des meilleurs en XP',
  async execute(message) {
    const file = path.join(__dirname, '../data/level.json');
    const levels = JSON.parse(fs.readFileSync(file));

    const sorted = Object.entries(levels)
      .sort(([, a], [, b]) => b.xp - a.xp)
      .slice(0, 5);

    const top = await Promise.all(sorted.map(async ([userId, data], i) => {
      const user = await message.client.users.fetch(userId).catch(() => null);
      return `#${i + 1} - **${user ? user.username : "Inconnu"}** : ${data.xp} XP (Niv. ${data.level})`;
    }));

    message.channel.send(`🏆 **Top 5 des plus actifs**
${top.join('\n')}`);
  }
};