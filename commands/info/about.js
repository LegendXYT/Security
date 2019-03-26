const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const prefix = botconfig.prefix;
const work = botconfig.work;


module.exports.run = async (bot, message, args) => {

  if (message.author.id != "513571036688547871") {
    if(work != "true") return message.channel.send(`The bot is under maintenance do ` + "`" + `${prefix}support` + "`" + ` for more information`)
  }
  
  var phrases = [
    'Support Server!',
    'Need any help?!'
  ]

  var phrase = phrases[Math.round(Math.random() * (phrases.length - 1))];


   let bicon = bot.user.displayAvatarURL;
   let embed = new Discord.RichEmbed()

      .setTitle("About me!")
      .setColor("#15f153")
      .setThumbnail(bicon)
      .addField("Bot Name", bot.user.username, true)
      .addField("Help command", `${prefix}help`, true)
      .addField("Created On", bot.user.createdAt, true)
      .addField("BotOwner", `Legend X#3768`, true)
      .addField("Setup the auto mod", `${prefix}setup (make sure you and the bot has **ADMINISTRATOR** permissions)`, true)
      .addField("Support", `[${phrase}](https://discord.gg/PZNqnfb)`)

      message.channel.send(embed)
}

module.exports.config = {
    name: "about",
    aliases: ['botinfo'],
    usage: `${prefix}about`,
    description: "Get information about the bot!",
    accessableby: "everyone"
  }
