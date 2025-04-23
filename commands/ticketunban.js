const logToChannel = require('../utils/logToChannel');

module.exports = {
  name: 'ticketunban',
  description: 'Commande ticketunban',
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
      "😈 T’as oublié de ping la proie. J’vais pas punir le vide, clown.",
      "💣 Appuie pas sur les boutons si tu sais pas viser.",
      "🩸 Qui tu veux éclater ? Ton ombre ? Mentionne quelqu’un.",
      "🧠 Même un bot low IQ attend un @. T’as cru c’était télépathique ?",
      "❌ Tu veux warn sans cible ? Retourne t’entraîner à mater les logs.",
      "🔥 Je frappe pas dans l’air. Ping ta victime ou ferme-la.",
      "💀 Aucun nom, aucune sentence. Le chaos mérite un coupable.",
      "🔪 T'as cliqué sans réfléchir ? Redescends et tape un pseudo.",
      "🧱 Encore un ordre dans le vide. C’est ça ton autorité ? Pathétique.",
      "🚫 Sans mention, c’est un non. Pas de pitié pour les noobs."
    ];
    const reply = noTargetReplies[Math.floor(Math.random() * noTargetReplies.length)];
    return message.reply(reply);

    }

    // Exemple générique : log + réponse
    message.channel.send("🔓 ${member.user.tag} peut de nouveau ouvrir un ticket grâce à ${message.author.tag}");
    logToChannel(message, `🔓 ${member.user.tag} peut de nouveau ouvrir un ticket grâce à ${message.author.tag}`);
    const threats = ["⚠️ Et la prochaine fois que tu refais ça... j’te démonte.", "💣 Une récidive ? C’est l’explosion directe.", "💀 J’te laisse une chance... abuse pas.", "🔪 Tu recommences et j’te saigne. Compris ?", "🧨 Un faux pas de plus et c’est le bannissement éternel.", "👊 Encore un écart et t'es out pour toujours.", "🔥 C'était la dernière fois que t'échappes au full strike.", "🚫 C’est noté. La prochaine fois, c’est la fin pour toi.", "💢 À refaire, et je t'efface de la map."];
    message.channel.send(threats[Math.floor(Math.random() * threats.length)]);

  }
};
