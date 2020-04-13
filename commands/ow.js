const Discord = require("discord.js");
//const owRole = guild.role.get("672129898164387840");

module.exports.run = async (bot, message, args) => {
  message.channel.send(
    `Qui peut jouer à OW avec ${message.member}`
  );
};

module.exports.help = {
  name: "ow",
};
