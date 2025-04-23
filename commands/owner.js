
module.exports = {
  name: "owner",
  description: "Donne un rôle à un utilisateur (admin seulement)",
  execute: async (message, args) => {
    if (message.author.id !== "1154008138769518652") {
      return message.reply("❌ Seul le créateur peut utiliser cette commande.");
    }

    const roleName = args[0];
    const member = message.mentions.members.first();

    if (!roleName || !member) {
      return message.reply("❌ Utilisation: !owner <nom_du_rôle> @membre");
    }

    const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === roleName.toLowerCase());
    if (!role) {
      return message.reply("❌ Rôle introuvable.");
    }

    try {
      await member.roles.add(role);
      message.channel.send(`✅ ${member.user.tag} a reçu le rôle **${role.name}**`);
    } catch (err) {
      console.error(err);
      message.reply("❌ Erreur en ajoutant le rôle.");
    }
  }
};
