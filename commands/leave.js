const Discord = require("discord.js");

exports.run = (client, message, args, ops) => {
  if (!message.member.voiceChannel)
    return message.channel
      .send("Connectes toi à un salon.")
      .then((msg) => msg.delete(10000));

  if (!message.guild.me.voiceChannel)
    return message.channel
      .send("Désolé, le bot n'est pas connecté à la guilde")
      .then((msg) => msg.delete(20000));

  if (message.guild.me.voiceChannelID !== message.member.voiceChannelID)
    return message.channel
      .send("Désolé, tu n'es pas connecté au meme salon.")
      .then((msg) => msg.delete(20000));

  message.guild.me.voiceChannel.leave();

  message.channel.send("Je me casse...").then((msg) => msg.delete(10000));
};

module.exports.help = {
  name: "leave",
};
