const config = require('../configViolator.json');

module.exports = {
  name: 'messageCreate',
  async execute(message) {
    if (message.author.bot || !config.antilink) return;
    const regex = /(https?:\/\/)?(www\.)?(discord\.gg|discordapp\.com\/invite|t\.me|instagram\.com|youtube\.com|x\.com|twitter\.com|http)/gi;
    if (regex.test(message.content)) {
      try {
        await message.delete();
        message.channel.send(`🔗 ${message.author}, t'as cru que tu pouvais balancer des liens ici ?`).then(m => setTimeout(() => m.delete(), 5000));
      } catch (err) {
        console.error("Erreur suppression de lien :", err);
      }
    }
  }
};