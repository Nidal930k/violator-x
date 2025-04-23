const logToChannel = require('../utils/logToChannel');

module.exports = {
  name: 'slowmode',
  description: 'Commande slowmode',
  async execute(message, args) {
    const amount = parseInt(args[0]);
    if (isNaN(amount) || amount <= 0 || amount > 100)
      return message.reply("❌ Donne un nombre valide entre 1 et 100.");

    await message.channel.bulkDelete(amount, true)
      .then(() => {
        message.channel.send("🐢 Mode lent réglé sur ${amount} secondes.")
          .then(msg => setTimeout(() => msg.delete(), 3000));
        logToChannel(message, `✅ 🐢 Mode lent réglé sur ${amount} secondes. par ${message.author.tag}`);
      })
      .catch(err => {
        console.error(err);
        message.reply("❌ Impossible d'effectuer cette action.");
      });
  }
};
