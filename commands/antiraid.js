
const fs = require("fs");
const configPath = "./configViolator.json";

module.exports = {
  name: "antiraid",
  description: "Active ou désactive l'antiraid",
  async execute(message, args) {
    if (!message.member.permissions.has("Administrator")) return message.reply("🔒 Accès refusé.");
    const config = JSON.parse(fs.readFileSync(configPath));
    if (args[0] === "on") {
      config.antiraid = true;
      message.channel.send("🛡️ Antiraid est maintenant activé.");
    } else if (args[0] === "off") {
      config.antiraid = false;
      message.channel.send("❌ Antiraid désactivé.");
    } else {
      message.channel.send(`🛡️ Antiraid est ${config.antiraid ? "activé" : "désactivé"}. Utilise !antiraid on/off`);
    }
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
  }
};
