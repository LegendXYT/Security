const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const prefix = botconfig.prefix
const work = botconfig.work;


module.exports.run = async (bot, message, args) => {

  if (message.author.id != "513571036688547871") {
    if(work != "true") return message.channel.send(`The bot is under maintenance do ` + "`" + `${prefix}support` + "`" + ` for more information`)
  }

    let chance = Math.floor(Math.random() * 2);
    if(chance == 0)
    {
      message.channel.send("Your Coin landed on **Heads**!", {files: [__dirname + "/coinpics/heads.png"]});
    }
    else
    {
      message.channel.send("Your Coin landed on **Tails**!", {files: [__dirname + "/coinpics/tails.png"]});
    }
}

module.exports.config = {
    name: "flip",
    description: "Flips a coin!",
    usage: `${prefix}flip`,
    accessableby: "everyone",
    aliases: ["coinflip", "coinf", "fcoin", "flipcoin"]
}
