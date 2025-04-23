
const { OpenAI } = require("openai");
require('dotenv').config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

module.exports = {
  name: 'img',
  async execute(message, args) {
    if (!args.length) {
      return message.reply("🧠 T’as oublié l’idée géniale ? Donne-moi un truc à dessiner ! Exemple : `!img une pomme sur une vache`.");
    }

    try {
      const response = await openai.images.generate({
        prompt: args.join(" "),
        n: 1,
        size: "512x512",
      });

      const imageUrl = response.data[0].url;
      message.channel.send(`🎨 Voilà ton œuvre de malade mentale :
${imageUrl}`);
    } catch (err) {
      console.error(err);
      message.reply("💥 Ton idée est trop chelou, même l'IA a crashé.");
    }
  }
};
