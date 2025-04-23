
module.exports = {
  name: "slowmode",
  description: "Active le slowmode dans le salon.",
  async execute(message, args) {
    if (!message.member.permissions.has("ManageChannels")) {
      return message.reply("❌ T'as pas les couilles pour ça.");
    }
    const seconds = parseInt(args[0]);
    if (isNaN(seconds) || seconds < 0 || seconds > 21600) {
      return message.reply("⏱️ Donne un temps entre 0 et 21600 secondes.");
    }
    await message.channel.setRateLimitPerUser(seconds);
    message.channel.send(`💬 Mode lent activé à ${seconds} secondes. T’as intérêt à réfléchir avant de parler.`);
  }
};
