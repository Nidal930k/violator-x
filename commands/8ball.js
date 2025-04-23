
const replies = [
  "Oui, évidemment.",
  "Jamais de la vie.",
  "Tu rêves éveillé.",
  "Possible… si tu survis.",
  "T'as pas mieux à demander ?"
];

module.exports = {
  name: "8ball",
  description: "Répond façon brutale à une question.",
  async execute(message, args) {
    if (!args.length) return message.reply("❓ Pose une vraie question, abruti.");
    const rep = replies[Math.floor(Math.random() * replies.length)];
    message.channel.send(`🎱 ${rep}`);
  }
};
