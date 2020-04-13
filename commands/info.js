const Discord = require("discord.js");

//informations sur le bot
module.exports.run = async (bot, message, args) => {
  let botIcon = bot.user.displayAvatarURL;
  let embed = new Discord.RichEmbed()
    .setDescription("Informations sur le bot")
    .setColor("#0066ff")
    .setThumbnail(botIcon)
    .addField("Nom du bot", bot.user.username)
    .addField("Commandes", "-------------------------------------------")
    .addField(
      "_play",
      "Placez l'url d'une video apres la commande et le bot va vous la jouer dans votre salon"
    )
    .addField(
      "_search",
      "Recherche une vidéo youtube et vous la joue dans votre salon"
    )
    .addField("_pause", "Met en pause la video")
    .addField("_resume", "Joue la video")
    .addField("_leave", "Quitte la video")
    .addField("_infoserv", "Renvoie les informations sur le serveur")
    .addField("_info", "Renvoie des informations sur le bot")
    .addField("_mc", "Demande aux membres du serv pour jouer à MC")
    .addField("_ow", "Demande aux membres du serv pour jouer à OW")
    .addField("_ark", "Demande aux membres du serv pour jouer à ARK")
    .addField("_sot", "Demande aux membres du serv pour jouer à SOT");

  return message.channel.send(embed);
};

module.exports.help = {
  name: "info",
};
