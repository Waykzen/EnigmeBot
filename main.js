const Discord = require("discord.js");
const config = require("./config.json");
const fs = require("fs");
const bot = new Discord.Client({ disableEveryone: true });
const search = require("yt-search");

const ownerID = "440076332739854336";
const active = new Map();

bot.commands = new Discord.Collection();

fs.readdir(`./commands/`, (err, files) => {
  if (err) console.log(err);

  let jsfile = files.filter((f) => f.split(".").pop() === "js");
  if (jsfile.length <= 0) {
    console.log("Je ne trouve pas la commande");
    return;
  }

  jsfile.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {
  console.log(" Bot est en ligne !");
  bot.user.setActivity("Pornhub", `{ type: 'WATCHING' }`);
});

bot.on("message", async (message) => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = process.env.PREFIX;
  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);

  let commandFile = bot.commands.get(command.slice(prefix.length));
  if (commandFile) commandFile.run(bot, message, args);

  let blacklisted = [
    "batard",
    "enculé",
    "fuck",
    "pute",
    "bitch",
    "connard",
    "con",
  ];

  let foundInText = false;
  for (var i in blacklisted) {
    if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase()))
      foundInText = true;
  }
  if (foundInText) {
    message.delete();
    message.channel
      .send("Attention au warn !")
      .then((msg) => msg.delete(10000));
  }
});

bot.login(process.env.TOKEN);
