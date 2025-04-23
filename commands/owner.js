
module.exports = {
  name: 'owner',
  description: 'Donne un rôle owner à quelqu’un',
  async execute(message, args) {
    if (!message.member.permissions.has('Administrator')) {
      return message.reply("❌ Essaie même pas, t’es pas admin.");
    }

    const roleName = args[0];
    const member = message.mentions.members.first();
    if (!roleName || !member) return message.reply("❌ Utilisation: !owner <nom_du_rôle> @membre");

    const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === roleName.toLowerCase());
    if (!role) return message.reply("❌ Ce rôle existe même pas. Tu fais des rêves ?");

    try {
      await member.roles.add(role);
      message.channel.send(`👑 ${member.user.username} a reçu le rôle ${role.name}`);
    } catch (err) {
      console.error(err);
      message.reply("💥 Raté. Le rôle n’a pas été ajouté.");
    }
  }
};
