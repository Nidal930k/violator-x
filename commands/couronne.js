module.exports = {
  name: "couronne",
  description: "Donne le rôle '👑 Alpha du jour' à un membre",
  async execute(message, args) {
    const member = message.mentions.members.first();
    if (!member) return message.reply("👑 Mentionne la personne à couronner.");

    let role = message.guild.roles.cache.find(r => r.name === "👑 Alpha du jour");
    if (!role) {
      try {
        role = await message.guild.roles.create({
          name: "👑 Alpha du jour",
          color: "GOLD"
        });
      } catch (err) {
        return message.reply("💥 Impossible de créer le rôle.");
      }
    }

    try {
      await member.roles.add(role);
      message.channel.send(`👑 ${member} est maintenant l’Alpha du jour.`);
    } catch (err) {
      message.reply("❌ Impossible de donner la couronne.");
    }
  }
};