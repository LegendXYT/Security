const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const prefix = botconfig.prefix;

const work = botconfig.work;


module.exports.run = async (bot, message, args) => {

  if (message.author.id != "513571036688547871") {
    if(work != "true") return message.channel.send(`The bot is under maintenance do ` + "`" + `${prefix}support` + "`" + ` for more information`)
  }
    function duration(ms) {
    const sec = Math.floor((ms / 1000) % 60).toString()
    const min = Math.floor((ms / (1000 * 60)) % 60).toString()
    const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
    const day = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
    return `**${day.padStart(1, '0')}** days, **${hrs.padStart(2, '0')}** hours, **${min.padStart(2, '0')}** minutes, **${sec.padStart(2, '0')}** seconds`
  }

  message.channel.send(`I have been on online for: ${duration(bot.uptime)}`)

}

module.exports.config = {
    name: "uptime",
    noalias: "No Aliases",
    aliases: [],
    usage: `${prefix}uptime`,
    description: "get the bots uptime!",
    accessableby: "Members"
  }
