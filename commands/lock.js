
const logToChannel = require('../utils/logToChannel');

module.exports = {
  name: 'lock',
  description: 'Verrouille le salon',
  async execute(message) {
    const config = require("../config.json");
    const allowedRoles = ['Admin', 'Staff', 'Modération'];

    if (!config.owners.includes(message.author.id) &&
        !message.member.roles.cache.some(role => allowedRoles.includes(role.name))) {
      return message.reply("❌ Commande verrouillée. Seuls les agents de l’ordre Violator peuvent l’utiliser.");
    }

    await message.channel.permissionOverwrites.edit(message.guild.roles.everyone, {
      SendMessages: false
    });

    const phrases = [
      "🔒 Fermez-la. Ce salon est maintenant sous scellé.",
      "🤐 Vous parlez trop. Violator a verrouillé la zone.",
      "🚫 Silence imposé. L’ordre a parlé.",
      "🧱 Plus un mot ici. C’est fermé.",
      "📛 Ce canal est OFF. Vos bouches aussi."
    ];
    const reply = phrases[Math.floor(Math.random() * phrases.length)];
    message.channel.send(reply);

    logToChannel(message, `🔒 ${message.author.tag} a verrouillé le salon #${message.channel.name}`);
  }
};
