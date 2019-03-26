const Discord = require("discord.js");
const botconfig =  require("../../botconfig.json");
const prefix = botconfig.prefix;
const work = botconfig.work;
const emoji = [`:smile:`];


module.exports.run = async (bot, message, args) => {

  if (message.author.id != "513571036688547871") {
    if(work != "true") return message.channel.send(`The bot is under maintenance do ` + "`" + `${prefix}support` + "`" + ` for more information`)
  }
      fetch.get("http://api.yomomma.info").then(joke => {
        const yomama = new Discord.RichEmbed()
        .addField("Here is a `yomama joke` for ya!", joke.body)
        .setColor("RANDOM")

        message.channel.send({embed: yomama}).catch(e => console.error(e));
      })
      .catch(e => console.error(e));
}

module.exports.config = {
    name: "yomama",
    noalias: "No Aliases",
    description: "see a yo mama joke!",
    usage: `${prefix}yomama`,
    accessableby: "everyone",
    aliases: []
}
