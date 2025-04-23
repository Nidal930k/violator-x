
module.exports = async (message, description) => {
  const logChannel = message.guild.channels.cache.find(ch => ch.name === "logs");
  if (!logChannel) return;

  logChannel.send({
    embeds: [{
      title: "🧠 Action Modération",
      description: description,
      color: 0xff0000,
      footer: {
        text: `Violator • ${new Date().toLocaleString("fr-FR")}`
      }
    }]
  });
};
