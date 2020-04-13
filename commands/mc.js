const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.channel.send(`Qui peut jouer à MC avec ${message.member}`);
};

module.exports.help = {
  name: "mc",
};
