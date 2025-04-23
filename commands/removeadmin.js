module.exports = {
  name: 'removeadmin',
  description: 'Retire les permissions ADMINISTRATEUR au bot',
  async execute(message, args, client) {
    if (message.author.id !== "1154008138769518652") {
      return message.reply("❌ Seul mon créateur peut faire ça.");
    }

    try {
      const role = message.guild.roles.cache.find(r => r.name === "ViolatorAdmin");
      if (!role) return message.reply("❌ Le rôle admin n’existe même pas.");
      await message.guild.members.me.roles.remove(role);
      return message.reply("✅ Le bot s’est calmé, il a plus les perms admin.");
    } catch (err) {
      console.error("Erreur dans removeadmin:", err);
      return message.reply("💥 J’ai pas pu retirer les perms. Je suis trop puissant ?");
    }
  }
};
