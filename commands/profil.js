const fs = require("fs");
const path = require("path");
const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "profil",
  description: "Affiche ton profil stylé version Violator",
  async execute(message) {
    const filePath = path.join(__dirname, "../data/level.json");
    const levels = fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath)) : {};
    const user = message.mentions.users.first() || message.author;
    const id = user.id;

    const userData = levels[id] || { xp: 0, level: 1 };
    const embed = new EmbedBuilder()
      .setColor("#FF0000")
      .setTitle(`💀 Profil de ${user.username}`)
      .setThumbnail(user.displayAvatarURL({ dynamic: true }))
      .addFields(
        { name: "🔢 Niveau", value: `${userData.level}`, inline: true },
        { name: "⚡ XP", value: `${userData.xp}`, inline: true },
        { name: "🎖️ Classe", value: user.bot ? "Bot inutile" : "Soldat Violator", inline: true }
      )
      .setFooter({ text: "Violator ne dort jamais. Toi, si." });

    message.channel.send({ embeds: [embed] });
  }
};
