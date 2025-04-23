module.exports = {
  name: "helpfun",
  description: "Affiche toutes les commandes fun & troll de Violator",
  execute(message) {
    const msg = `
🎭 **Commandes Fun & Troll de Violator :**

🔥 \`!burn @user\` – Clash visuel style mugshot
🕵️ \`!snipe\` – Affiche le dernier message supprimé
⚠️ \`!blame @user [raison]\` – Désigne quelqu’un comme coupable
💀 \`!virus @user\` – Fausse alerte de virus
🧹 \`!purge @user\` – Supprime les messages d’un utilisateur
💖 \`!ratewaifu\` – Note waifu/avatar avec moquerie
🎤 \`!diss @user\` – Clash stylé façon punchline
🔮 \`!curse @user\` – Maudit fictivement un utilisateur

Utilise-les avec précaution... ou pas 😈
    `;
    message.channel.send(msg);
  }
};