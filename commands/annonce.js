const { EmbedBuilder } = require('discord.js');
const config = require('../configViolator.json');
const owners = require('../data/owners.json');

module.exports = {
  name: "annonce",
  description: "Fait une annonce stylée dans le salon 'annonces' avec @everyone",
  async execute(message, args) {
    if (!owners.owners.includes(message.author.id)) {
      return message.reply("❌ T’as pas la permission d’utiliser cette commande.");
    }

    const annonceText = args.join(" ");
    if (!annonceText) return message.reply("❗ Tu dois écrire une annonce à envoyer.");

    const salonAnnonce = message.guild.channels.cache.find(c => c.name === "annonces" && c.isTextBased());
    if (!salonAnnonce) return message.reply("❌ Aucun salon nommé 'annonces' trouvé.");

    const embed = new EmbedBuilder()
      .setTitle("📢 Annonce Officielle")
      .setDescription(annonceText)
      .setColor(0xff0000)
      .setFooter({ text: `Envoyée par ${message.author.username}` })
      .setTimestamp();

    try {
      await salonAnnonce.send({ content: "@everyone", embeds: [embed] });
      message.reply("✅ Annonce envoyée avec succès dans #annonces.");
    } catch (err) {
      console.error("Erreur envoi annonce :", err);
      message.reply("💥 Une erreur est survenue lors de l’envoi de l’annonce.");
    }
  }
};