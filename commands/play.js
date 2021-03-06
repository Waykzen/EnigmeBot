const ytdl = require("ytdl-core");
const Discord = require("discord.js");

exports.run = async (client, message, args, ops) => {
  if (!message.member.voiceChannel)
    return message.channel
      .send("Connectes toi à un salon vocal.")
      .then((msg) => msg.delete(20000));

  if (!args[0])
    return message.channel
      .send("T'as pas mis de lien batard !")
      .then((msg) => msg.delete(20000));

  let validate = await ytdl.validateURL(args[0]);

  if (!validate)
    return message.channel
      .send("L'url ne marche pas !")
      .then((msg) => msg.delete(20000));

  let info = await ytdl.getInfo(args[0]);

  let connection = await message.member.voiceChannel.join();

  let dispatcher = await connection.playStream(
    ytdl(args[0], { filter: `audioonly` })
  );

  message.channel
    .send(`En Train De Jouer: ${info.title}`)
    .then((msg) => msg.delete(100000));
};

module.exports.help = {
  name: "play",
};

//let data = ops.active.get(message.guild.id) || {};

//if (!data.connection)
// data.connection = await message.member.voiceChannel.join();
//if (!data.queue) data.queue = [];
//data.guildID = message.guild.id;

//data.queue.push({
// songTitle: InputDeviceInfo.title,
// requester: message.author.tag,
//url: args[0],
// annoucementChannel: message.channel.id,
//});

//if (!data.dispatcher) play(client, ops, data);
//else {
// message.channel.send(
//  `Ajouter à la queue: ${info.title} | Demander Par: ${message.author.id} `
//   );
// }

// ops.active.set(message.guild.id, data);
//};
//async function play(client, ops, data) {
//client.channels
//.get(data.queue[0].announceChannel)
//.send(
//  `En Train De Jouer: ${data.queue[0]} | Demander Par:  ${data.queue[0].requester}`
// );

//data.dispatcher = await data.connection.playStream(
//ytdl(data.queue[0].url, { filter: "audioonly" })
// );
//data.dispatcher.guildID = data.guildID;

//data.dispatcher.once("finish", function () {
//  finish(client, ops, this);
// });
//}

//function finish(client, ops, dispatcher) {
//let fetched = ops.active.get(dispatcher.guildID);

// fetched.queue.shift();

// if (fetched.queue.length > 0) {
// ops.active.set(dispatcher.guildID, fetched);

//  play(client, ops, fetched);
//} else {
//  ops.active.delete(dispatcher.guildID);

//  let vc = client.guild.get(dispatcher.guildID).me.voiceChannel;
// if (vc) vc.leave();
// }
//}
