module.exports = {
  async execute(message) {
    if (message.content.includes("http")) {
      try {
        await message.delete();
        message.channel.send("🔗 Stop à tes liens, parasite.");
      } catch (err) {
        console.error("Erreur antispam :", err);
      }
    }
  }
};
