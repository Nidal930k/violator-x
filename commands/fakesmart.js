module.exports = {
  name: "fakesmart",
  description: "Fais parler quelqu’un comme s’il était intelligent (troll)",
  async execute(message, args) {
    const target = message.mentions.users.first();
    if (!target) return message.reply("🧠 Mentionne la personne à parodier.");

    const lines = [
      "Je suis tellement intelligent que je me parle tout seul pour avoir des réponses intéressantes.",
      "J’ai découvert que respirer est essentiel pour vivre. Incroyable non ?",
      "J’écris des messages profonds, mais personne ne plonge dedans.",
      "Mes idées sont si avancées qu’elles n’ont toujours pas été comprises.",
      "Je suis une légende… dans ma tête."
    ];
    const line = lines[Math.floor(Math.random() * lines.length)];
    message.channel.send(`🧠 **${target.username}** dit : "${line}"`);
  }
};