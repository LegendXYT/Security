const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const prefix = botconfig.prefix;
const work = botconfig.work;


module.exports.run = async (bot, message, args) => {

  if (message.author.id != "513571036688547871") {
    if(work != "true") return message.channel.send(`The bot is under maintenance do ` + "`" + `${prefix}support` + "`" + ` for more information`)
  }


        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("require **manage messages** permission, sorry");
        let argsresult;
        let mChannel = message.mentions.channels.first()
        if(mChannel) {
          argsresult = args.slice(1).join(" ")
          mChannel.send(argsresult)
        } else {
          argsresult = args.join(" ")
          message.channel.send(argsresult)
        }


}


module.exports.config = {
    name: "say",
    description: "say a message",
    usage: `${prefix}say [message]`,
    accessableby: "staff",
    aliases: ["quote", "announcement"]
}
