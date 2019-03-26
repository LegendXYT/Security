const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const prefix = botconfig.prefix;
const work = botconfig.work;


module.exports.run = async (bot, message, args) => {

  if (message.author.id != "513571036688547871") {
    if(work != "true") return message.channel.send(`The bot is under maintenance do ` + "`" + `${prefix}support` + "`" + ` for more information`)
  }
  
  try {
       const guild = message.guild
       return message.channel.send({
         embed: {
           title: 'MemberCount',
           color: 0xace9e7,
           description: `There are currently ${guild.memberCount
           } users in this discord. (${guild.members.array().filter(
             m => m.presence.status !== 'offline').length} currently online).`,
           author: {
             name: message.guild.name,
             icon_url: message.guild.iconURL
           }
         }
       })
     } catch (e) {
       console.log(`Error sending users message: ${e}`)
       return null
     }
}
  module.exports.config = {
      name: "membercount",
      aliases: ["users"],
      usage: `${prefix}membercount`,
      description: "check the server membercount!",
      accessableby: "everyone"
    }
