module.exports = {
    name: 'vidersalon',
    description: 'Supprime tous les messages du salon',
    async execute(message, args) {
      if (!message.member.permissions.has("MANAGE_MESSAGES")) {
        return message.reply("❌ T’as pas les permissions pour faire ça.");
      }
  
      if (!message.guild || !message.channel) return;
  
      message.channel.send("🧹 Je nettoie cette poubelle...").then(() => {
        clearChannel(message.channel);
      });
    }
  };
  
  async function clearChannel(channel) {
    let fetched;
    do {
      fetched = await channel.messages.fetch({ limit: 100 });
      await Promise.all(fetched.map(msg => msg.delete().catch(() => {})));
    } while (fetched.size >= 2);
  }
  