module.exports = {
  name: 'lock',
  description: '🔒 Verrouille le salon pour empêcher les messages.',
  async execute(message) {
    if (!message.member.permissions.has("ManageChannels")) {
      return message.reply("🚫 T'as pas le droit de verrouiller ce salon, zgeg.");
    }

    try {
      await message.channel.permissionOverwrites.edit(message.guild.roles.everyone, {
        SendMessages: false
      });
      message.channel.send("🔒 Ce salon est maintenant verrouillé. Personne n’écrit sans ton autorisation !");
    } catch (err) {
      console.error(err);
      message.reply("💥 Violator a failé le verrouillage... permissions manquantes ?");
    }
  }
};
