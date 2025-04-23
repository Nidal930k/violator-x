const fs = require('fs');
const configPath = './configViolator.json';

module.exports = {
  name: 'antilien',
  description: 'Active ou désactive l’anti-lien',
  execute(message, args) {
    if (!message.member.permissions.has('Administrator')) {
      return message.reply("❌ T’as pas les clés du royaume.");
    }

    let config = { antilink: false };
    if (fs.existsSync(configPath)) {
      config = JSON.parse(fs.readFileSync(configPath));
    }

    const sub = args[0];
    if (sub === "on") {
      config.antilink = true;
      fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
      return message.reply("✅ Anti-lien ACTIVÉ.");
    } else if (sub === "off") {
      config.antilink = false;
      fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
      return message.reply("❌ Anti-lien DÉSACTIVÉ.");
    } else {
      return message.reply(`📡 Anti-lien est **${config.antilink ? "ACTIVÉ" : "DÉSACTIVÉ"}**. Utilise \`!antilien on/off\``);
    }
  }
};