const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const prefix = botconfig.prefix
const work = botconfig.work;

module.exports.run = async (bot, message, args) => {
  if (message.author.id != "513571036688547871") {
    if(work != "true") return message.channel.send(`The bot is under maintenance do ` + "`" + `${prefix}support` + "`" + ` for more information`)
  }

  let response = ["Yes", "Maybe", "No", "Try again later", "Possibly", "Absolutely", "Probably not", "Outcome is looking good", "Outcome not looking good", "The stars say yes", "You wish"];

    message.channel.send(`${response[~~(Math.random() * response.length)]}, ${message.author.username}.`);
};

module.exports.config = {
    name: "8ball",
    noalias: "No Aliases",
    aliases: [],
    usage: `${prefix}8ball`,
    description: "Ask the magic 8ball wizard for an answer!",
    accessableby: "everyone"
  }
