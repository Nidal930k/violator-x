
const config = require('../configViolator.json');

module.exports = {
  name: "protection",
  description: "Affiche l'état actuel des protections du bot.",
  async execute(message) {
    const status = (value) => value ? "🟢 ACTIVÉ" : "🔴 DÉSACTIVÉ";
    
    const response = `🛡️ **État des protections de Violator :**\n\n` +
      `- ${status(config.antilien)} Anti-lien\n` +
      `- ${status(config.antiraid)} Antiraid\n` +
      `- ${status(config.antibot)} Antibot\n` +
      `- ${status(config.antiwebhook)} Anti-webhook\n` +
      `- ${status(config.botclean)} Auto-kick bots inconnus\n` +
      `- ${status(config.autolock)} Auto-lock salon à l’attaque\n\n` +
      `ℹ️ Utilise les commandes suivantes pour les activer/désactiver :\n` +
      `- !antilien on/off\n- !antiraid on/off\n- !antibot on/off\n- !antiwebhook on/off\n- !botclean on/off\n- !autolock on/off`;
    
    message.channel.send(response);
  }
};
