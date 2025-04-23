const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "guildMemberAdd",
  execute(member) {
    const channel = member.guild.channels.cache.find(
      ch => ch.name === "👋bienvenue" || ch.name.toLowerCase().includes("welcome")
    );
    if (!channel) return;

    const embed = new EmbedBuilder()
      .setColor(0xff0000)
      .setTitle("🚨 Nouvelle victime détectée")
      .setDescription(\`Bienvenue ${member}, t’es sur le territoire de **Violator Supreme**.\nComporte-toi bien... ou pas.\`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true }));

    channel.send({ embeds: [embed] });
  }
};