
module.exports = {
  name: "derank",
  description: "Supprime tous les rôles d'un utilisateur (sauf @everyone)",
  execute: async (message, args) => {
    if (message.author.id !== "1154008138769518652") {
      return message.reply("❌ Seul le créateur peut utiliser cette commande.");
    }

    const member = message.mentions.members.first();
    if (!member) {
      return message.reply("❌ Utilisation: !derank @membre");
    }

    try {
      const rolesToRemove = member.roles.cache.filter(role => role.name !== "@everyone");
      await member.roles.remove(rolesToRemove);
      message.channel.send(`🔻 Tous les rôles ont été retirés de ${member.user.tag}.`);
    } catch (err) {
      console.error(err);
      message.reply("❌ Impossible de retirer les rôles.");
    }
  }
};
