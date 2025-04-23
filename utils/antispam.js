
module.exports = {
  name: 'antispam',
  execute(message) {
    if (message.content.length > 500) {
      message.delete();
      message.channel.send('🛑 Trop de spam ici, calme-toi.').then(m => setTimeout(() => m.delete(), 5000));
    }
  }
};
