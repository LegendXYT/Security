const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const prefix = botconfig.prefix;
const work = botconfig.work;


module.exports.run = async (bot, message, args) => {

  if (message.author.id != "513571036688547871") {
    if(work != "true") return message.channel.send(`The bot is under maintenance do ` + "`" + `${prefix}support` + "`" + ` for more information`)
  }
  	let ping = message.createdTimestamp - message.createdTimestamp
	let choices = [":ping_pong: Ping Pong", "I don't wanna see my ping", "Is my ping bad?", "How fast is my security?"]
	let response = choices[Math.floor(Math.random() * choices.length)]

		 message.channel.send("Pinging ...")  // Placeholder for pinging ...
		 .then((msg) => { // Resolve promise
				msg.edit("Pong!")
				.then((msg) => {
					msg.edit(`${response}: Bot Latency: ` + "`" + `${ping}` + "`" + ` API Latency: ` + "`" + `${Math.round(bot.ping)}` + "`")
				}) // Edits message with current timestamp minus timestamp of message
			});
}
  module.exports.config = {
      name: "ping",
      noalias: "No Aliases",
      aliases: [],
      usage: `${prefix}ping`,
      description: "check the bots ping!",
      accessableby: "everyone"
    }
