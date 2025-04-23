
const { EmbedBuilder } = require('discord.js');
const logToChannel = require('../utils/logToChannel');
const config = require("../config.json");

module.exports = {
  name: 'annonce',
  description: 'Envoie une annonce stylée dans le salon "annonces" avec @everyone',
  async execute(message, args) {
    const allowedRoles = ['Admin', 'Staff', 'Modération'];

    if (!config.owners.includes(message.author.id) &&
        !message.member.roles.cache.some(role => allowedRoles.includes(role.name))) {
      return message.reply("❌ Commande verrouillée. Seuls les agents de l’ordre Violator peuvent l’utiliser.");
    }

    const content = args.join(" ");
    if (!content) return message.reply("🗣️ Tu veux balancer quoi comme message ? Tape une vraie annonce.");

    const embed = new EmbedBuilder()
      .setTitle("📢 Annonce Officielle")
      .setDescription(content)
      .setColor(0xff0000)
      .setFooter({ text: `Violator • Par ${message.author.tag}` })
      .setTimestamp();

    const targetChannel = message.guild.channels.cache.find(ch => ch.name === "annonces");
    if (!targetChannel) return message.reply("❌ Salon 'annonces' introuvable.");

    targetChannel.send({ content: "@everyone", embeds: [embed] });
    logToChannel(message, `📢 Annonce @everyone postée par ${message.author.tag} : "${content}"`);
  }
};
