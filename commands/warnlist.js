
const fs = require('fs');
const path = require('path');

module.exports = {
  name: 'warnlist',
  description: 'Affiche la liste des warns',
  async execute(message, args) {
    const member = message.mentions.members.first();
    if (!member) return message.reply("❗ Utilisation : !warnlist @user");

    const warnsFile = path.join(__dirname, '../data/warns.json');
    let warns = fs.existsSync(warnsFile) ? JSON.parse(fs.readFileSync(warnsFile)) : {};

    if (!warns[member.id] || warns[member.id].length === 0) {
      return message.reply("✅ Aucun warn trouvé pour cet utilisateur.");
    }

    const list = warns[member.id].map((w, i) => `#${i+1} - ${w.reason} (par ${w.mod})`).join("\n");
    message.channel.send(`⚠️ Warns pour ${member.user.tag} :\n${list}`);
  }
};
