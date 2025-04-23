const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'help',
  description: 'Affiche les commandes disponibles',
  async execute(message) {
    const embed = new EmbedBuilder()
      .setTitle("📖 Commandes de Violator")
      .setColor("DarkRed")
      .setDescription("Voici la liste des commandes que tu peux utiliser :")
      .addFields(
        { name: "🎮 Fun", value: "`!roast` `!8ball` `!coinflip`" },
        { name: "🎖️ Niveau", value: "`!rank` `!top`" },
        { name: "❓ Aide", value: "`!help`" }
      )
      .setFooter({ text: "Plus de pouvoirs ? Demande aux modos." })
      .setTimestamp();

    await message.channel.send({ embeds: [embed] });
  }
};