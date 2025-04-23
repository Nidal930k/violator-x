module.exports = {
  name: '8ball',
  description: 'Pose une question mystique',
  async execute(message, args) {
    if (!args.length) return message.reply("Pose une vraie question, pas une énigme de pigeon.");
    const responses = [
      "Ouais, mais t’es pas prêt.",
      "Jamais de la vie.",
      "Violator dit oui.",
      "Demande à ta daronne.",
      "Possible, mais tu vas souffrir."
    ];
    const random = responses[Math.floor(Math.random() * responses.length)];
    message.channel.send(`🎱 ${random}`);
  }
};