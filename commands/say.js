module.exports = {
  name: 'say',
  description: 'Fait parler le bot',
  execute(message, args) {
    if (!message.member.permissions.has('ManageMessages')) {
      return message.reply("🚫 T'as pas la permission d'utiliser cette commande.");
    }

    const msg = args.join(" ");
    if (!msg) return message.reply("❗ Tu dois écrire un message.");

    message.delete().catch(() => {});
    message.channel.send(msg);
  }
};