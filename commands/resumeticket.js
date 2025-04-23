const { OpenAI } = require("openai");

module.exports = {
  name: "resumeticket",
  description: "Résumé IA d’un ticket en langage Violator",
  async execute(message) {
    const isTicketChannel = message.channel.name?.startsWith("ticket-") || message.channel.isThread?.();
    if (!isTicketChannel) {
      return message.reply("💢 T’es pas dans un ticket, guignol.");
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
            content: "Tu es Violator, un bot Discord brutal, insolent et stylé. Résume ce ticket de façon sarcastique, arrogante, brutale mais marrante. Balance la vérité avec du punch, comme si t'étais le boss de l’univers Discord."
          },
          {
            role: "user",
            content: `Voici le transcript du ticket :\n${transcript}\n\nFais-moi un résumé stylé et méchant.`
          }
        ],
        temperature: 0.9,
        max_tokens: 300
      });

      const summary = completion.choices[0].message.content;
      message.channel.send(`📋 **Résumé du ticket selon Violator :**\n${summary}`);
    } catch (err) {
      console.error("Erreur dans resumeticket :", err);
      message.reply("💥 Résumé impossible. Même l'IA a abandonné face à tant de bêtises.");
    }
  }
};
