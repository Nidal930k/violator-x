module.exports = {
  name: "ratewaifu",
  description: "Note un utilisateur ou avatar aléatoirement",
  execute(message) {
    const user = message.mentions.users.first() || message.author;
    const note = Math.floor(Math.random() * 11);
    message.channel.send(`💖 ${user.username}, je te donne **${note}/10**... T’as connu mieux, non ?`);
  }
};