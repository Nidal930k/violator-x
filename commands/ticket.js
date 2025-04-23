const { ChannelType, PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: 'ticket',
  description: 'Crée un salon privé de ticket dans la catégorie "tickets"',
  async execute(message) {
    const existing = message.guild.channels.cache.find(c => c.name === `ticket-${message.author.id}`);
    if (existing) return message.reply("📩 Tu as déjà un ticket ouvert.");

    const category = message.guild.channels.cache.find(c => c.name.toLowerCase() === "tickets" && c.type === ChannelType.GuildCategory);
    if (!category) return message.reply("❗ La catégorie 'tickets' est introuvable.");

    try {
      const channel = await message.guild.channels.create({
        name: `ticket-${message.author.id}`,
        type: ChannelType.GuildText,
        parent: category.id,
        permissionOverwrites: [
          {
            id: message.guild.roles.everyone.id,
            deny: [PermissionFlagsBits.ViewChannel]
          },
          {
            id: message.author.id,
            allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages]
          },
          {
            id: message.client.user.id,
            allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages]
          }
        ]
      });

      channel.send(`🎫 Ticket ouvert par ${message.author}. Un staff va te répondre.`);
      message.reply(`✅ Ton ticket a été créé : ${channel}`);
    } catch (err) {
      console.error(err);
      message.reply("❗ Une erreur est survenue pendant la création du ticket.");
    }
  }
};