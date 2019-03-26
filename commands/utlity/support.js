const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const prefix = botconfig.prefix;
const work = botconfig.work;

module.exports.run = async (bot, message, args) => {

  var server = bot.guilds.get('532808886399270912')
  var phrases = [
    'JOIN OUR DISCORD SERVER!',
    'THE SUPPORT DISCORD SERVER!'
  ]
  let torf;

  if(work === 'true'){
    torf = 'tick'
  }
  if(work === 'false'){
    torf = 'cross'
  }

  var phrase = phrases[Math.round(Math.random() * (phrases.length - 1))];


  let embed = new Discord.RichEmbed()
  .setColor("#77abff")
  .addField("Server Link", `[${phrase}](https://discord.gg/CZK6cDm)`)
  .addField("Contacts:", `Legend X#3768`)
  .addField("Help", `${prefix}help`)
  .addField(`Total Members:`, `${server.memberCount}`)
  .addField(`Online Members:`, `${server.members.filter(member => member.presence.status !== "offline").size}`)
  .addField("Bot Status:", `${emoji(torf)}`)

  message.channel.send(embed)
  function emoji(name) {return bot.emojis.find(emoji => emoji.name === name)

  }
}

module.exports.config = {
    name: "support",
    noalias: "No Aliases",
    aliases: [],
    usage: `${prefix}support`,
    description: "Gives you the bots support info!",
    accessableby: "Members"
  }
