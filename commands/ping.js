
module.exports = {
  name: 'ping',
  description: 'Affiche le ping',
  execute(message) {
    const ping = Math.floor(Math.random() * 200) + 50;
    message.channel.send(`🏓 Le ping ? ${ping}ms. T'as cru t’étais à l’armée ?`);
  }
};
