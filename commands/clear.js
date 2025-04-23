module.exports = {
  name: "clear",
  description: "Supprime un nombre de messages.",
  async execute(message, args) {
    if (!message.member.permissions.has("ManageMessages")) return message.reply("🧹 Tu gères rien du tout.");
    const amount = parseInt(args[0]);
    if (isNaN(amount) || amount < 1 || amount > 100) {
      return message.reply("❌ Donne un chiffre entre 1 et 100.");
    }
    await message.channel.bulkDelete(amount, true).catch(() => message.reply("💥 Impossible de nettoyer ici."));
    message.channel.send(`🧽 ${amount} messages supprimés. Propre.`).then(m => setTimeout(() => m.delete(), 3000));
  }
};