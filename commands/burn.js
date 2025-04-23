module.exports = {
  name: "burn",
  description: "Clash visuel d’un utilisateur",
  execute(message) {
    const user = message.mentions.users.first();
    if (!user) return message.reply("Mentionne quelqu’un à brûler.");
    message.channel.send(`🔥 ${user}, t’as tellement honte que même ton avatar veut fuir.`);
  }
};