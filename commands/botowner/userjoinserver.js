const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const prefix = botconfig.prefix;
const work = botconfig.work;


module.exports.run = async (bot, message, args) => {

  if(message.author.id != "513571036688547871") return message.channel.send("Only the **Bot Owner** can use this command")
  // bot.emit("guildMemberAdd", message.member);
}


module.exports.config = {
    name: "testjoin",
    description: "test the user welcome join system",
    usage: `${prefix}testjoin`,
    accessableby: "Bot Owner",
    aliases: ["userjoinserver"]
}
