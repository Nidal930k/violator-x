module.exports = {
  name: "close",
  description: "Ferme un ticket",
  async execute(message) {
    const isTicket = message.channel.name?.startsWith("ticket-") || message.channel.isThread?.();

    if (!isTicket) {
      return message.reply("❌ Ce n’est pas un salon de ticket !");
    }

    try {
      await message.channel.send("🔒 Ticket fermé. Ce salon va s’autodétruire dans 3 secondes...");
      setTimeout(() => {
        message.channel.delete().catch(console.error);
      }, 3000);
    } catch (error) {
      console.error("Erreur en fermant le ticket :", error);
      message.reply("💥 Impossible de fermer ce ticket, l’univers te protège.");
    }
  }
};
