module.exports = {
  name: 'report',
  description: 'Signale un utilisateur à la modération',
  async execute(message, args) {
    const target = message.mentions.members.first();
    const reason = args.slice(1).join(" ");

    if (!target || !reason) {
      return message.reply("❗ Utilisation : `!report @user raison`");
    }

    const reportChannel = message.guild.channels.cache.find(c => c.name === "🚨・reports" || c.name === "reports");
    if (!reportChannel) return message.reply("❌ Salon de report introuvable.");

    reportChannel.send(`🚨 **Report :**
👤 ${target}
🗣️ Signalé par: ${message.author}
📄 Raison: ${reason}`);
    message.reply("✅ Le report a été envoyé à la modération.");
  }
};