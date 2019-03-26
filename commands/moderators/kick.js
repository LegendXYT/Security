const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const prefix = botconfig.prefix;

const work = botconfig.work;


module.exports.run = async (bot, message, args) => {

  if (message.author.id != "513571036688547871") {
    if(work != "true") return message.channel.send(`The bot is under maintenance do ` + "`" + `${prefix}support` + "`" + ` for more information`)
  }

  if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`${emoji('cross')} command is not avaliable for your role`);

  let kickMember = message.mentions.members.first() || message.guild.members.get(args[0])
  if(!kickMember) return message.channel.send("Please provide a user to kick!")
  if(kickMember.hasPermission("KICK_MEMBERS")) return message.reply("Can't kick them!");

  let reason = args.slice(1).join(" ")
  if(!reason) reason = "No reason given!"

  if(!message.guild.me.hasPermission(["KICK_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("I dont have permission to do this!")

  kickMember.send(`You have been kicked from ${message.guild.name} for: **${reason}**`).then(() =>
  kickMember.kick()).catch(err => console.log(err))

  message.channel.send(`${emoji('tick')} Successfully kicked **${kickMember.user.tag}**`)

  let embed = new Discord.RichEmbed()
  .setDescription("Kick")
  .setColor("#af3001")
  .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
  .addField("Kicked User", `${kickMember}`)
  .addField("kicked User ID", `${kickMember.id}`)
  .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
  .addField("Kicked In", message.channel)
  .addField("Reason", reason)
  .addField("Date:", message.createdAt.toLocaleString())

  let kickChannel = message.guild.channels.find(`name`, "⛔server-logs⛔");
  if(!kickChannel) return message.author.send(`do ` + "`" + `-setup` + "`" + ` in ${message.guild.name} so the bot can setup stuff for you to use these commands correctly :ok_hand:`);
  kickChannel.send(embed);



   function emoji(name) {return bot.emojis.find(emoji => emoji.name === name)

   }
 }
module.exports.config = {
   name: 'kick',
   noalias: "No Aliases",
   aliases: [],
   description: 'kick a user from the server',
   usage: `${prefix}kick <user> (reason)`,
   accessableby: "moderators"

}
