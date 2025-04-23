module.exports = {
  name: 'tempban',
  description: 'Bannir un utilisateur temporairement',
  async execute(message, args) {
    if (!message.member.permissions.has('BanMembers')) {
      return message.reply("🚫 T’as pas le droit de tempban.");
    }

    const target = message.mentions.members.first();
    const duration = parseInt(args[1]); // en secondes
    const reason = args.slice(2).join(" ") || "Aucune raison";

    if (!target || isNaN(duration)) {
      return message.reply("❗ Utilisation : `!tempban @user durée(s) raison`");
    }

    try {
      await target.ban({ reason });
      message.channel.send(`🔨 ${target.user.tag} banni pour ${duration} secondes. Raison: ${reason}`);

      setTimeout(async () => {
        await message.guild.members.unban(target.id);
        message.channel.send(`🔓 ${target.user.tag} a été débanni après ${duration} secondes.`);
      }, duration * 1000);

    } catch (err) {
      console.error(err);
      message.reply("❗ Erreur lors du bannissement.");
    }
  }
};