const fs = require('fs');
const path = require('path');

module.exports = {
  name: 'rank',
  description: 'Affiche ton niveau et XP',
  async execute(message) {
    const file = path.join(__dirname, '../data/level.json');
    const levels = JSON.parse(fs.readFileSync(file));

    const userXP = levels[message.author.id] || { xp: 0, level: 1 };
    const xp = userXP.xp;
    const level = userXP.level;

    message.channel.send(`🎖️ ${message.author.username}, tu es niveau **${level}** avec **${xp} XP**. Continue ou Violator te déglingue.`);
  }
};