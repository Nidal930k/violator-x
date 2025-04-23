module.exports = {
  name: "roast",
  description: "Envoie une punchline stylée à un membre",
  async execute(message, args) {
    const target = message.mentions.users.first();
    if (!target) return message.reply("❌ Mentionne quelqu’un que je dois humilier.");

    const roasts = [
      "T’as pas un cerveau, t’as un espace vide entre les oreilles.",
      "T’es tellement inutile que même ton ombre t’a quitté.",
      "Si la bêtise était un sport, t’aurais l’or olympique.",
      "T’es pas bête, t’es un chef-d’œuvre de stupidité.",
      "On t’a déjà dit que t’étais spécial ? C’était pas un compliment."
    ];
    const roast = roasts[Math.floor(Math.random() * roasts.length)];
    message.channel.send(`🔥 ${target}, ${roast}`);
  }
};