module.exports = {
  name: "ping",
  description: "Ping du bot mais avec arrogance",
  async execute(message) {
    const sent = await message.channel.send("⏱️ T’es pressé ou quoi ?");
    sent.edit(`🏓 Le ping ? ${sent.createdTimestamp - message.createdTimestamp}ms. T'as cru t’étais à l’armée ?`);
  }
};