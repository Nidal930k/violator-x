const owners = require('../data/owners.json');

module.exports = {
  name: "ban",
  description: "Ban un utilisateur",
  async execute(message, args) {
    if (!owners.owners.includes(message.author.id)) {
      return message.reply("❌ Tu n’as pas la permission d’utiliser cette commande.");
    }

    const member = message.mentions.members.first();
    const reason = args.slice(1).join(" ");
    if (!member) return message.reply("❗ Mentionne un utilisateur.");
    if (!reason) return message.reply("❗ Donne une raison.");

    try {
      await member.ban({ reason });
      message.channel.send(`🔨 ${member.user.tag} a été banni pour : ${reason}`);
    } catch (err) {
      console.error(err);
      message.reply("💥 Erreur lors du ban.");
    }
  }
};