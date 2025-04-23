module.exports = {
  name: 'blame',
  description: 'Commande blame',
  execute(message, args) {
    const config = require("../config.json");
    const allowedRoles = ['Admin', 'Staff', 'Modération'];

    if (!config.owners.includes(message.author.id) &&
        !message.member.roles.cache.some(role => allowedRoles.includes(role.name))) {
      return message.reply("❌ Commande verrouillée. Seuls les agents de l’ordre Violator peuvent l’utiliser.");
    }

    const member = message.mentions.members.first();
    if (!member) return message.reply("❌ Mentionne un membre.");

    message.channel.send(`🧨 ${member} vient de se faire blâmer en public. Qu’il médite.`);
  }
};
