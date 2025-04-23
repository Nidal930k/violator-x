
const fs = require("fs");
const path = require("path");
const rolesPath = path.join(__dirname, "../data/roles.json");

function hasModPermission(message) {
  const guildId = message.guild.id;
  const rolesData = JSON.parse(fs.readFileSync(rolesPath, "utf8"));
  const allowedRoleIds = rolesData[guildId] || [];
  return message.member.roles.cache.some(role => allowedRoleIds.includes(role.id));
}

module.exports = { hasModPermission };
