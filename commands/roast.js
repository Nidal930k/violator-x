module.exports = {
  name: 'roast',
  description: 'Insulte stylée',
  async execute(message) {
    const roasts = [
      "T’es tellement nul que même Google te trouve pas.",
      "Ton intelligence est en mode avion.",
      "T’es un brouillon de l’évolution.",
      "Ta présence baisse le QI du serveur.",
      "Si la stupidité brillait, t’éclairerais tout Discord."
    ];
    const random = roasts[Math.floor(Math.random() * roasts.length)];
    message.channel.send(`🔥 ${random}`);
  }
};