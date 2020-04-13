const Discord = require("discord.js");

const bot = new Discord.Client({ disableEveryone: true });

const ownerID = "440076332739854336";

exports.run = async (bot, message, args, ops) => {
  //restart

  if (message.author.id !== ownerID) return;

  let botIcon = bot.user.displayAvatarURL;
  let stopEmbed = new Discord.RichEmbed()
    .setDescription("Le bot va cesser de fonctionner.")
    .setColor("ff9900")
    .setThumbnail(botIcon);

  return message.channel.send(stopEmbed).then(() => {
    process.exit(1);
  });
};

module.exports.help = {
  name: "stop",
};
