const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.channel.send(`Qui peut jouer à ARK avec ${message.member}`);
};

module.exports.help = {
  name: "ark",
};
