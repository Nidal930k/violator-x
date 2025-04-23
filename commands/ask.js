const { OpenAI } = require("openai");
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

module.exports = {
  name: "ask",
  description: "Pose une question à Violator IA (brutal et arrogant)",
  async execute(message, args) {
    if (!args.length) {
      return message.reply("💢 T’as oublié de poser une vraie question, abruti.");
    }

    const prompt = args.join(" ");

    try {
      const chat = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "Tu es Violator, une IA brutale, arrogante, sarcastique et violente. Tu insultes gentiment les gens, tu es direct, tu n'es jamais poli. Tu parles comme un mec sûr de lui, tu ne mâches pas tes mots, et tu prends les gens de haut. Réponds toujours de manière stylée, même quand on te pose une question sérieuse."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.95,
        max_tokens: 300
      });

      const reply = chat.choices[0].message.content;
      message.channel.send(`🧠 **Violator IA :**\n${reply}`);
    } catch (err) {
      console.error(err);
      message.reply("💥 Violator a crashé. Faut croire que ta question était trop conne.");
    }
  }
};
