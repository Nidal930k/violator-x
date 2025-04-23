const punchlines = [
  "T’es pas une erreur du système, t’es son produit final.",
  "Même Clippy a plus d’utilité que toi.",
  "Tu devrais être une exception non capturée."
];

module.exports = {
  name: "diss",
  description: "Envoie une punchline de clash",
  execute(message, args) {
    const user = message.mentions.users.first();
    if (!user) return message.reply("Faut un @ pour clasher.");
    const punch = punchlines[Math.floor(Math.random() * punchlines.length)];
    message.channel.send(`🎤 Diss pour ${user.username} :
> ${punch}`);
  }
};