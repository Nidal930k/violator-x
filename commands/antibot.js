const fs = require('fs');
const configPath = './data/protection.json';

module.exports = {
  name: 'antibot',
  description: "Active ou désactive la protection Antibot",
  async execute(message, args) {
    if (!message.member.permissions.has('Administrator')) {
      return message.reply("❌ T’as pas les droits, soldat.");
    }

    let config = {};
    if (fs.existsSync(configPath)) {
      config = JSON.parse(fs.readFileSync(configPath));
    }

    if (args[0] === 'on') {
      config.antibot = true;
      fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
      return message.channel.send("🛡️ Antibot est maintenant **ACTIVÉ**.");
    }

    if (args[0] === 'off') {
      config.antibot = false;
      fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
      return message.channel.send("🛡️ Antibot est maintenant **DÉSACTIVÉ**.");
    }

    const status = config.antibot ? "🟢 ACTIVÉ" : "🔴 DÉSACTIVÉ";
    message.channel.send(`🛡️ Antibot est actuellement **${status}**. Utilise ` + "`!antibot on` ou `!antibot off`.");
  }
};
