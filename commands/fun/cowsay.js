const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const prefix = botconfig.prefix;
const work = botconfig.work;


module.exports.run = async (bot, message, args) => {

  if (message.author.id != "513571036688547871") {
    if(work != "true") return message.channel.send(`The bot is under maintenance do ` + "`" + `${prefix}support` + "`" + ` for more information`)
  }

  const cowsay = require("cowsay");
  let text = args.join(" ");
  message.channel.send("```" + cowsay.say({
    text: text
  }) + "```")

}

module.exports.config = {
    name: "cowsay",
    noalias: "No Aliases",
    aliases: [],
    usage: `${prefix}cowsay <message>`,
    description: "make the cow say something!",
    accessableby: "everyone"
  }
