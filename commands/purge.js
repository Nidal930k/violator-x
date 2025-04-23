
const logToChannel = require('../utils/logToChannel');

module.exports = {
  name: 'purge',
  description: 'Supprime les messages récents d’un utilisateur mentionné',
  async execute(message, args) {
    const config = require("../config.json");
    const allowedRoles = ['Admin', 'Staff', 'Modération'];

    if (!config.owners.includes(message.author.id) &&
        !message.member.roles.cache.some(role => allowedRoles.includes(role.name))) {
      return message.reply("❌ Commande verrouillée. Seuls les agents de l’ordre Violator peuvent l’utiliser.");
    }

    const member = message.mentions.members.first();
    if (!member) {
      const noTargetReplies = [
        "💀 Tu veux purger qui exactement ? Ton ombre ? Mentionne quelqu’un.",
        "😡 Balance un @ ou j’purge rien du tout.",
        "👺 T’as oublié la cible. Faut une victime pour lancer le carnage.",
        "🧱 Encore un ordre flingué. Ping ton mec.",
        "🔪 Pas de mention, pas de purge. C’est la base."
      ];
      const reply = noTargetReplies[Math.floor(Math.random() * noTargetReplies.length)];
      return message.reply(reply);
    }

    const messages = await message.channel.messages.fetch({ limit: 100 });
    const toDelete = messages.filter(m => m.author.id === member.id);

    await message.channel.bulkDelete(toDelete, true)
      .then(() => {
        message.channel.send(`🧹 ${toDelete.size} messages de ${member.user.tag} ont été balayés.`)
          .then(msg => setTimeout(() => msg.delete(), 3000));

        logToChannel(message, `🧹 ${toDelete.size} messages de ${member.user.tag} supprimés par ${message.author.tag}`);
        
        const threats = [
          "⚠️ Et la prochaine fois que tu floodes comme ça... c’est le ban direct.",
          "💢 Encore un spam et j’te mute à vie.",
          "🚫 C’est noté. La purge c’est que le début.",
          "🔫 Tu reviens avec du spam, je te pulvérise.",
          "🔥 Trop de bruit, trop de mots. Chut maintenant."
        ];
        message.channel.send(threats[Math.floor(Math.random() * threats.length)]);
      })
      .catch(err => {
        console.error(err);
        message.reply("❌ Impossible de purger ses messages.");
      });
  }
};
