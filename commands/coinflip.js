module.exports = {
  name: 'coinflip',
  description: 'Pile ou face brutal',
  async execute(message) {
    const result = Math.random() < 0.5 ? "🪙 **PILE** — t’as eu de la chance..." : "🪙 **FACE** — t’es une merde, désolé.";
    message.channel.send(result);
  }
};