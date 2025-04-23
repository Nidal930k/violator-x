const { OpenAI } = require("openai");

module.exports = {
  name: "resumeticket",
  description: "Résumé IA d’un ticket en langage Violator",
  async execute(message, args) {
    if (!message.channel.isThread()) {
      return message.reply("💢 T’es pas dans un ticket ou un salon thread, guignol.");
    }

    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    try {
      const messages = await message.channel.messages.fetch({ limit: 50 });
      const transcript = messages
        .map(m => `${m.author.username} : ${m.content}`)
        .reverse()
        .join("\n");

      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "Tu es Violator, un bot Discord brutal et insolent. Résume ce ticket comme un chef : t'insultes un peu, t'es franc, t'exagères les trucs comme si c'était ultra important, mais t'es drôle et stylé."
          },
          {
            role: "user",
            content: `Voici le transcript du ticket :\n${transcript}\n\nFais-moi un résumé de ce ticket.`
          }
        ],
        temperature: 0.9,
        max_tokens: 300
      });

      const summary = completion.choices[0].message.content;
      message.channel.send(`📋 **Résumé du ticket selon Violator :**
${summary}`);
    } catch (err) {
      console.error("Erreur dans resumeticket :", err);
      message.reply("💥 Résumé impossible. Faut croire que même l'IA a eu la flemme de lire ton roman.");
    }
  }
};
