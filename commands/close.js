module.exports = {
  name: 'close',
  description: 'Ferme un ticket',
  async execute(message) {
    const channel = message.channel;

    // Vérifie si c'est un ticket
    if (!channel.name.startsWith("ticket-")) {
      return message.reply("❌ Tu dois être dans un salon ticket pour faire ça, guignol.");
    }

    try {
      await message.channel.send("🔒 Ticket fermé. Dossier classé.");
      setTimeout(() => {
        channel.delete().catch(err => console.error("Erreur lors de la suppression :", err));
      }, 3000); // délai de 3 secondes pour laisser le message visible
    } catch (err) {
      console.error("❌ Erreur dans !close :", err);
      message.reply("💥 Une erreur est survenue lors de la fermeture du ticket.");
    }
  }
};
