module.exports = {
  name: "curse",
  description: "Maudit un utilisateur (fictivement)",
  execute(message, args) {
    const user = message.mentions.users.first();
    if (!user) return message.reply("Mentionne la cible à maudire.");
    message.channel.send(`🔮 ${user.username} est maudit pendant 24h. RIP son karma.`);
  }
};