const fs = require('fs');
const path = './warnings.json';

module.exports = {
  name: 'unwarn',
  description: 'Supprime un warn spécifique',
  execute(message, args) {
    if (!message.member.permissions.has('ManageMessages')) {
      return message.reply("🚫 T'as pas le droit de retirer des warns.");
    }

    const user = message.mentions.users.first();
    const index = parseInt(args[1]) - 1;

    if (!user || isNaN(index)) {
      return message.reply("❗ Utilisation : `!unwarn @user [numéro]`");
    }

    let warns = {};
    if (fs.existsSync(path)) {
      warns = JSON.parse(fs.readFileSync(path));
    }

    if (!warns[user.id] || !warns[user.id][index]) {
      return message.reply("❗ Ce warn n'existe pas.");
    }

    warns[user.id].splice(index, 1);
    fs.writeFileSync(path, JSON.stringify(warns, null, 2));
    message.reply(`✅ Warn #${index + 1} supprimé pour ${user.tag}.`);
  }
};