module.exports = {
  name: 'helpadmin',
  description: 'Affiche les commandes admin',
  execute(message) {
    if (!message.member.permissions.has('Administrator')) {
      return message.reply("🚫 Tu n'as pas la permission de voir les commandes admin.");
    }

    const adminHelp = [
      "**🔧 Commandes Admin Disponibles :**",
      "",
      "🛡️ `!promote @user Role` — Attribuer un rôle",
      "🧹 `!demote @user Role` — Retirer un rôle",
      "🔒 `!lock` / `!unlock` — Verrouiller/Déverrouiller un salon",
      "🐌 `!slowmode X` — Régler le slowmode en secondes",
      "🔇 `!mutechannel` / `!unmutechannel` — Mute/Unmute un salon",
      "🎟️ `!ticket` — Créer un ticket privé",
      "🚨 `!report @user raison` — Signaler un utilisateur",
      "⏳ `!tempban @user X Raison` — Bannir temporairement (X = secondes)"
    ];

    message.channel.send(adminHelp.join("\n"));
  }
};