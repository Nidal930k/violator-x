
const logToChannel = require('../utils/logToChannel');

module.exports = {
  name: 'unlock',
  description: 'Déverrouille le salon',
  async execute(message) {
    const config = require("../config.json");
    const allowedRoles = ['Admin', 'Staff', 'Modération'];

    if (!config.owners.includes(message.author.id) &&
        !message.member.roles.cache.some(role => allowedRoles.includes(role.name))) {
      return message.reply("❌ Commande verrouillée. Seuls les agents de l’ordre Violator peuvent l’utiliser.");
    }

    await message.channel.permissionOverwrites.edit(message.guild.roles.everyone, {
      SendMessages: true
    });

    const phrases = [
      "🔓 Vous pouvez à nouveau parler. Ne me faites pas regretter.",
      "📢 Le silence est levé... pour combien de temps ?",
      "🗣️ Les scellés sont brisés. Profitez-en avant que ça saute.",
      "🔊 Parlons... mais pas trop.",
      "⚠️ Salon ouvert. Le moindre débordement et je referme tout."
    ];
    const reply = phrases[Math.floor(Math.random() * phrases.length)];
    message.channel.send(reply);

    logToChannel(message, `🔓 ${message.author.tag} a déverrouillé le salon #${message.channel.name}`);
  }
};
