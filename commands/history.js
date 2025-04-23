
const fs = require('fs');
const path = require('path');

module.exports = {
  name: 'history',
  description: 'Affiche l’historique des sanctions',
  async execute(message, args) {
    const authorId = message.author.id;
    const mention = message.mentions.users.first();
    const targetId = mention ? mention.id : authorId;
    const isSelf = !mention;
    
    const config = require('../configBot.json');
    if (!isSelf && !config.owners.includes(authorId) && !message.member.permissions.has('Administrator')) {
      return message.reply("❌ Tu n’as pas la permission de voir l’historique des autres. Tape juste !history pour voir le tien.");
    }

    const filePath = path.join(__dirname, '../data/punishments.json');
    let data = {};
    if (fs.existsSync(filePath)) {
      data = JSON.parse(fs.readFileSync(filePath));
    }

    const userHistory = data[targetId] || { warns: 0, mutes: 0, bans: 0, kicks: 0, last: 'Aucune' };

    const embed = {
      color: 0xffcc00,
      title: `📚 Historique des sanctions pour <@${targetId}>`,
      description: `• ⚠️ Warns : ${userHistory.warns || 0}
• 🔇 Mutes : ${userHistory.mutes || 0}
• 🔨 Bans : ${userHistory.bans || 0}
• 👢 Kicks : ${userHistory.kicks || 0}
Dernière action : ${userHistory.last}`
    };

    message.channel.send({ embeds: [embed] });
  }
};
