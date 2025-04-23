module.exports = {
  name: "roast",
  description: "Insulte gentiment un utilisateur",
  async execute(message, args) {
    const target = message.mentions.users.first();
    if (!target) {
      return message.reply("👊 Tu veux roast qui ? Mentionne ta victime, clown.");
    }

    const roasts = [
      "T'as le charisme d'une patate tiède, même Discord hésite à te charger.",
      "Même ton miroir essaie de se déconnecter quand il te voit.",
      "Ton cerveau tourne sous Windows 95, faut faire un update mon gars.",
      "Si l'intelligence était une monnaie, t'aurais même pas de quoi t'offrir une pensée.",
      "T'es pas nul, t'es un art. Un chef-d'œuvre de médiocrité.",
      "J'ai vu des bots plus pertinents que toi, et eux au moins, ils crashent pas à chaque phrase."
    ];

    const randomRoast = roasts[Math.floor(Math.random() * roasts.length)];

    message.channel.send(`🔥 ${target}, ${randomRoast}`);
  }
};
