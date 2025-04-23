module.exports = {
  name: "forceban",
  description: "Ban un membre sans retour possible (action violente)",
  async execute(message, args) {
    const member = message.mentions.members.first();
    if (!member) return message.reply("💣 Mentionne quelqu’un à éliminer.");
    if (!message.member.permissions.has("BanMembers")) return message.reply("❌ T’as pas le niveau pour ça.");

    try {
      await member.ban({ reason: "Forceban par Violator" });
      message.channel.send(`☠️ ${member.user.tag} a été atomisé. Aucun retour possible.`);
    } catch (err) {
      message.reply("💥 J’ai pas réussi à l’éjecter. Dommage...");
    }
  }
};