module.exports = function (client) {
  client.on('messageCreate', message => {
    if (message.author.bot || !message.guild) return;

    const lienRegex = /(https?:\/\/[^\s]+)/gi;

    if (lienRegex.test(message.content)) {
      message.delete().catch(() => {});
      message.channel.send(`🔗 Pas de lien ici ${message.author}, t’as cru que c’était un panneau pub ?`).catch(() => {});
    }
  });
};
