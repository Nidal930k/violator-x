
const { Collection } = require('discord.js');
const userMessages = new Collection();

module.exports = {
  name: 'messageCreate',
  async execute(message) {
    if (message.author.bot) return;

    const now = Date.now();
    const userId = message.author.id;
    const userData = userMessages.get(userId) || { messages: [], lastWarning: 0 };
    userData.messages.push(now);

    // Garder les messages dans les 5 dernières secondes
    userData.messages = userData.messages.filter(timestamp => now - timestamp < 5000);
    userMessages.set(userId, userData);

    // Trop de messages
    if (userData.messages.length > 5) {
      if (now - userData.lastWarning > 10000) {
        userData.lastWarning = now;
        message.channel.send(`🧨 Calme-toi ${message.author}, tu spam comme un bot qui bug ! Encore un message et je t’implose.`).then(msg => {
          setTimeout(() => msg.delete().catch(() => {}), 7000);
        });
      }
      try { await message.delete(); } catch (e) {}
      return;
    }

    // Trop de mentions
    if ((message.mentions.users.size + message.mentions.roles.size) >= 4) {
      message.channel.send(`🚫 Trop de mentions ${message.author}, tu crois t’es une alarme ou quoi ?`).then(msg => {
        setTimeout(() => msg.delete().catch(() => {}), 7000);
      });
      try { await message.delete(); } catch (e) {}
      return;
    }

    // Trop d’emojis
    const emojiCount = (message.content.match(/<a?:.+?:\d+>/g) || []).length + (message.content.match(/[⌚-]/g) || []).length;
    if (emojiCount >= 10) {
      message.channel.send(`🎭 ${message.author}, t’es pas un panneau emoji. Détends-toi.`).then(msg => {
        setTimeout(() => msg.delete().catch(() => {}), 7000);
      });
      try { await message.delete(); } catch (e) {}
      return;
    }
  }
};
