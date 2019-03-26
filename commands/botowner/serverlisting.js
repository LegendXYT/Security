const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const prefix = botconfig.prefix;
const work = botconfig.work;


module.exports.run = async (bot, message, args) => {

  if(message.author.id != "513571036688547871") return message.channel.send("Only the **Bot Owner** can use this command")

message.channel.send(bot.guilds.map(r => r.name + ` | **${r.memberCount}** members`))


}


module.exports.config = {
    name: "listservers",
    description: "lists the serevrs the bots in",
    usage: `${prefix}listservers`,
    accessableby: "Bot Owner",
    aliases: ["botservers"]
}
