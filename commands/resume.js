const Discord = require("discord.js");

exports.run = (client, message, args, ops) => {
  let fetched = ops.active.get(message.guild.id);

  if (!fetched)
    return message.channel
      .send("Il y a pas de muisque qui joue en ce moment.")
      .then((msg) => msg.delete(20000));

  if (message.member.voiceChannel !== message.guild.me.voiceChannel)
    return message.channel
      .send("Déso t'es pas dans le même salon que le bot")
      .then((msg) => msg.delete(20000));

  if (fetched.dispatcher.paused)
    return message.channel
      .send("La musique n'est pas en pause.")
      .then((msg) => msg.delete(20000));

  fetched.dispatcher.resume();

  message.channel
    .send(`La musique ${fetched.queue[0].songTitle} est rejoue!`)
    .then((msg) => msg.delete(20000));
};

module.exports.help = {
  name: "resume",
};
