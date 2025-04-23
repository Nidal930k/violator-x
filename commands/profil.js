const fs = require("fs");
const path = require("path");

module.exports = {
  name: "profil",
  description: "Affiche ton niveau et ton XP",
  async execute(message) {
    const xpFile = path.join(__dirname, "../data/level.json");

    if (!fs.existsSync(xpFile)) return message.reply("Aucune donnée XP trouvée.");
    const levels = JSON.parse(fs.readFileSync(xpFile));
    const id = message.author.id;

    if (!levels[id]) return message.reply("T’as pas encore gagné d’XP, bouge-toi un peu !");

    const { xp, level } = levels[id];
    message.reply(`🎖️ Ton profil : Niveau ${level} | XP actuel : ${xp}/${level * 100}`);
  }
};
