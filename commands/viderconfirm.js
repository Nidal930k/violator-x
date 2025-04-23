module.exports = {
  name: 'viderconfirm',
  description: 'Demande confirmation avant de vider tout le salon',
  async execute(message, args) {
    if (!message.member.permissions.has("MANAGE_MESSAGES")) {
      return message.reply("❌ Tu n’as pas la permission pour faire ça.");
    }

    const confirmMessage = await message.channel.send("⚠️ Tu es sur le point de **vider entièrement ce salon**. Tape `confirmer` dans les 10 secondes pour valider.");

    const filter = m => m.author.id === message.author.id && m.content.toLowerCase() === 'confirmer';
    try {
      const collected = await message.channel.awaitMessages({ filter, max: 1, time: 10000, errors: ['time'] });
      message.channel.send("🧹 Nettoyage en cours...");
      clearChannel(message.channel);
    } catch (err) {
      message.channel.send("❌ Nettoyage annulé.");
    }
  }
};

async function clearChannel(channel) {
  let fetched;
  do {
    fetched = await channel.messages.fetch({ limit: 100 });
    await Promise.all(fetched.map(msg => msg.delete().catch(() => {})));
  } while (fetched.size >= 2);
}