
const ms = require('ms');

module.exports = {
  name: 'mutelist',
  description: 'Liste les utilisateurs mutés (texte) avec temps restant',
  async execute(message) {
    if (!message.member.permissions.has('ManageRoles')) {
      return message.reply("❌ T’as pas les droits pour espionner les muets.");
    }

    const muteRole = message.guild.roles.cache.find(r => r.name === "🔇 Muté");
    if (!muteRole) return message.reply("❌ Aucun rôle mute trouvé.");

    const muted = message.guild.members.cache.filter(member => member.roles.cache.has(muteRole.id));
    if (muted.size === 0) return message.reply("✅ Personne n’est réduit au silence pour l’instant.");

    const lines = [];
    for (const [id, member] of muted) {
      lines.push(`🔇 ${member.user.tag} (${member.id})`);
    }

    message.channel.send(`📝 Utilisateurs actuellement mute :
${lines.join("\n")}`);
  }
};
