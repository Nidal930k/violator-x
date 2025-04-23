module.exports = {
  name: "randomkick",
  description: "Kick un membre aléatoire en ligne (troll extrême)",
  async execute(message) {
    if (!message.member.permissions.has("KickMembers")) return message.reply("❌ T’as pas les couilles pour kicker.");
    const onlineMembers = message.guild.members.cache.filter(m => m.presence?.status === "online" && !m.user.bot);
    const membersArray = Array.from(onlineMembers.values());
    if (membersArray.length === 0) return message.reply("👀 Personne à kicker en ligne.");

    const randomMember = membersArray[Math.floor(Math.random() * membersArray.length)];
    try {
      await randomMember.kick("Kick aléatoire par Violator");
      message.channel.send(`🎲 ${randomMember.user.tag} a été choisi par le destin. Ciao !`);
    } catch (err) {
      message.reply("💥 Kick échoué. Ce membre est protégé par les dieux.");
    }
  }
};