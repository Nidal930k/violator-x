const fs = require('fs');
const path = './warnings.json';

module.exports = {
  name: 'warnlist',
  description: 'Affiche les warns d’un utilisateur',
  execute(message, args) {
    const user = message.mentions.users.first();
    if (!user) return message.reply("❗ Utilisation : `!warnlist @user`");

    let warns = {};
    if (fs.existsSync(path)) {
      warns = JSON.parse(fs.readFileSync(path));
    }

    const userWarns = warns[user.id];
    if (!userWarns || userWarns.length === 0) {
      return message.reply("✅ Aucun warn trouvé pour cet utilisateur.");
    }

    const warnList = userWarns.map((w, i) => `#${i + 1} - ${w}`).join("\n");
    message.channel.send(`📋 Warns pour ${user.tag} :\n${warnList}`);
  }
};