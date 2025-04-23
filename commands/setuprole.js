
const fs = require("fs");
const path = require("path");
const rolesPath = path.join(__dirname, "../data/roles.json");

module.exports = {
  name: "setuprole",
  description: "Ajoute un rôle autorisé à utiliser les commandes admin.",
  async execute(message) {
    if (!message.member.permissions.has("Administrator")) {
      return message.reply("❌ Seuls les administrateurs peuvent configurer les rôles.");
    }

    const role = message.mentions.roles.first();
    if (!role) {
      return message.reply("❌ Utilisation : !setuprole @rôle");
    }

    let rolesData = {};
    if (fs.existsSync(rolesPath)) {
      rolesData = JSON.parse(fs.readFileSync(rolesPath, "utf8"));
    }

    const guildId = message.guild.id;
    if (!rolesData[guildId]) rolesData[guildId] = [];
    if (!rolesData[guildId].includes(role.id)) {
      rolesData[guildId].push(role.id);
    }

    fs.writeFileSync(rolesPath, JSON.stringify(rolesData, null, 2));
    message.reply(`✅ Le rôle **${role.name}** peut désormais utiliser les commandes admin.`);
  }
};
