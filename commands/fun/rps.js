const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const prefix = botconfig.prefix;
const work = botconfig.work;


module.exports.run = async (bot, message, args) => {

  if (message.author.id != "513571036688547871") {
    if(work != "true") return message.channel.send(`The bot is under maintenance do ` + "`" + `${prefix}support` + "`" + ` for more information`)
  }
  let rock2 = ['Paper!:page_facing_up: I win!', 'Scissors!:scissors: You win!']
  let rock1 = Math.floor(Math.random() * rock2.length);

  let paper2 = ['Rock!:black_circle: You win!', 'Scissors!:scissors: I win!']
  let paper1 = Math.floor(Math.random() * paper2.length);

  let scissors2 = ['Rock!:black_circle I win!', 'Paper!:page_facing_up: You win!']
  let scissors1 = Math.floor(Math.random() * scissors2.length);

  let rock = new Discord.RichEmbed()
  .setAuthor('Rock, Paper, Scissors')
  .setColor(0x6B5858)
  .addField('You Choose', `${args[0]}`)
  .addField('I Choose', rock2[rock1])

    let paper = new Discord.RichEmbed()
    .setAuthor('Rock, Paper, Scissors')
    .setColor(0x6B5858)
    .addField('You Choose', `${args[0]}`)
    .addField('I Choose', paper2[paper1])


      let scissors = new Discord.RichEmbed()
      .setAuthor('Rock, Paper, Scissors')
      .setColor(0x6B5858)
      .addField('You Choose', `${args[0]}`)
      .addField('I Choose', scissors2[scissors1])

      if (message.content === `${prefix}rps rock`) message.channel.send(rock)
      if (message.content === `${prefix}rps r`) message.channel.send(rock)
      if (message.content === `${prefix}rps Rock`) message.channel.send(rock)

      if (message.content === `${prefix}rps paper`) message.channel.send(paper)
      if (message.content === `${prefix}rps Paper`) message.channel.send(paper)
      if (message.content === `${prefix}rps p`) message.channel.send(paper)

      if (message.content === `${prefix}rps scissors`) message.channel.send(scissors)
      if (message.content === `${prefix}rps s`) message.channel.send(scissors)
      if (message.content === `${prefix}rps Scissors`) message.channel.send(scissors)

      if (message.content === `${prefix}rps`) message.channel.send('The options are `rock`, `paper`, `scissors`. usage -> `-rps <option>`')


}

module.exports.config = {
    name: "rps",
    noalias: "No Aliases",
    aliases: [],
    usage: `${prefix}about`,
    description: "play rock paper scissors!",
    accessableby: "everyone"
  }
