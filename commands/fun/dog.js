const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const prefix = botconfig.prefix
const work = botconfig.work;
const superagent = require("superagent")


module.exports.run = async (bot, message, args) => {

  if (message.author.id != "513571036688547871") {
    if(work != "true") return message.channel.send(`The bot is under maintenance do ` + "`" + `${prefix}support` + "`" + ` for more information`)
  }

  let msg = await message.channel.send("Generating...")

   let {body} = await superagent
   .get(`https://dog.ceo/api/breeds/image/random`)
   if(!{body}) return message.channel.send("Failure to send.")

       let mEmbed = new Discord.RichEmbed()
       .setColor(0x00ffff)
       .setAuthor(`Cute Dogs!`, message.guild.iconURL)
       .setImage(body.url)
       .setTimestamp()
       .setFooter(`Security 301`, bot.user.displayAvatarURL)

       message.channel.send({embed: mEmbed})

       msg.delete();
}

module.exports.config = {
    name: "dog",
    description: "Sends you a dog!",
    usage: `${prefix}dog`,
    accessableby: "everyone",
    aliases: ["doggie", "puppy"]
}
