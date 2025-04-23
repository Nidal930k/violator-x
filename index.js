
const { Client, GatewayIntentBits, Collection } = require('discord.js');
const fs = require('fs');
const axios = require('axios');
require('dotenv').config();
const { prefix } = require('./config.json');
const settings = require('./configViolator.json');
const path = require('path');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.commands = new Collection();

// Chargement des commandes
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.once('ready', () => {
  console.log(`🔥 Violator Supreme prêt à écraser le serveur.`);
});

// ANTI-LIEN listener si activé
if (settings.antilien) {
  const setupAntiLien = require('./utils/antilien-listener');
  setupAntiLien(client);
}

// XP automatique + gestion des commandes
client.on('messageCreate', async message => {
  if (message.author.bot) return;

  // XP auto
  const xpFile = path.join(__dirname, 'data/level.json');
  let levels = fs.existsSync(xpFile) ? JSON.parse(fs.readFileSync(xpFile)) : {};
  const id = message.author.id;
  if (!levels[id]) levels[id] = { xp: 0, level: 1 };
  levels[id].xp += 10;
  if (levels[id].xp >= levels[id].level * 100) {
    levels[id].xp = 0;
    levels[id].level += 1;
    message.channel.send(`💥 GG ${message.author.username}, t’es monté niveau ${levels[id].level} !`);
  }
  fs.writeFileSync(xpFile, JSON.stringify(levels, null, 2));

  // Commandes
  if (!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();
  const command = client.commands.get(commandName);
  if (!command) return;

  try {
    await command.execute(message, args);
  } catch (err) {
    console.error("❌ Erreur dans la commande :", err);
    message.reply("💥 Une erreur violente est survenue. Violator est en rage !");
  }
});

client.login(process.env.TOKEN);

const antiSpam = require('./utils/antispam');
client.on('messageCreate', antiSpam.execute);
