const Discord = require("discord.js");
const bot = new Discord.Client({ disableEveryone: true });

//informations sur le bot
module.exports.run = async (bot, message, args) => {
  let servIcon = message.guild.iconURL;
  let servEmbed = new Discord.RichEmbed()
    .setDescription("Informations sur le serveur")
    .setColor("0066ff")
    .setThumbnail(servIcon)
    .addField("Nom du serveur", message.guild.name)
    .addField("Nombre de membres", message.guild.memberCount)
    .addField("Créer le", message.guild.createdAt)
    .addField("Vous avez rejoint le", message.member.joinedAt);

  return message.channel.send(servEmbed);
};

module.exports.help = {
  name: "infoserv",
};
