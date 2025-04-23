
const fs = require("fs");
const path = require("path");

module.exports = {
  name: "topxp",
  description: "Affiche le top XP des utilisateurs.",
  async execute(message) {
    const dataPath = path.join(__dirname, "../data/level.json");
    if (!fs.existsSync(dataPath)) return message.reply("📉 Aucun XP trouvé.");
    const xpData = JSON.parse(fs.readFileSync(dataPath));
    const sorted = Object.entries(xpData).sort(([, a], [, b]) => b.xp - a.xp).slice(0, 5);
    const topList = sorted.map(([id, obj], i) => `#${i + 1} - <@${id}> : ${obj.xp} XP (Niv. ${obj.level})`);
    message.channel.send(`🏆 Top 5 des plus actifs :
${topList.join("\n")}`);
  }
};
