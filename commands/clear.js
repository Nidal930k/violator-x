
const logToChannel = require('../utils/logToChannel');

module.exports = {
  name: 'clear',
  description: 'Supprime un nombre de messages',
  async execute(message, args) {
    const config = require("../config.json");
    const allowedRoles = ['Admin', 'Staff', 'Modération'];

    if (!config.owners.includes(message.author.id) &&
        !message.member.roles.cache.some(role => allowedRoles.includes(role.name))) {
      return message.reply("❌ Commande verrouillée. Seuls les agents de l’ordre Violator peuvent l’utiliser.");
    }

    const amount = parseInt(args[0]);
    if (!amount || isNaN(amount) || amount < 1 || amount > 100) {
      return message.reply("🧼 Donne-moi un vrai chiffre entre 1 et 100, pas du flan.");
    }

    await message.channel.bulkDelete(amount, true)
      .then(() => {
        message.channel.send(`🧹 ${amount} messages ont été pulvérisés. Que vous parlez.`)
          .then(msg => setTimeout(() => msg.delete(), 4000));
        logToChannel(message, `🧹 ${amount} messages supprimés par ${message.author.tag} dans #${message.channel.name}`);
      })
      .catch(err => {
        console.error(err);
        message.reply("❌ J’ai pas pu nettoyer ce merdier.");
      });
  }
};
