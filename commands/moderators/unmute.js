const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const prefix = botconfig.prefix;

const work = botconfig.work;


module.exports.run = async (bot, message, args) => {

  if (message.author.id != "513571036688547871") {
    if(work != "true") return message.channel.send(`The bot is under maintenance do ` + "`" + `${prefix}support` + "`" + ` for more information`)
  }

  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(`${emoji('cross')} command is not avaliable for your role`);
  if(!message.guild.me.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.channel.send("I dont have permission to use this command")

  let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
  if(!mutee) return message.channel.send("Supply a user to be unmuted!");

  let reason = args.slice(1).join(" ");
  if(!reason) reason = "No reason given"

  //define mute role and if the mute role doesnt exist then send a message
  let muterole = message.guild.roles.find(r => r.name === "301 Muted")
  if(!muterole) return message.channel.send("There is no mute role to remove!")

  //remove role to the mentioned user and also send the user a dm explaing where and why they were unmuted
  if (mutee.roles.has(muterole.id)) {
  mutee.removeRole(muterole.id).then(() => {
      mutee.send(`You have been unmuted in ${message.guild.name} for: **${reason}**`).catch(err => console.log(err))
      message.channel.send(`${emoji('tick')} Successfully unmuted ${mutee.user.username}!`)
  })
} else {
  message.channel.send("They are not muted.")
}

  //send an embed to the modlogs channel
  let embed = new Discord.RichEmbed()
  .setColor("#3d72f7")
  .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
  .setTitle("Unmute")
  .addField("Unmuted User:", `${mutee}`)
  .addField("Moderator:", `<@${message.author.id}>`)
  .addField("Reason:", reason)
  .addField("Date:", message.createdAt.toLocaleString())

  let unembed = message.guild.channels.find(`name`, "⛔server-logs⛔");
  if(!unembed) return message.author.send(`do ` + "`" + `-setup` + "`" + ` in ${message.guild.name} so the bot can setup stuff for you to use these commands correctly :ok_hand:`);

  unembed.send(embed);


   function emoji(name) {return bot.emojis.find(emoji => emoji.name === name)

   }
 }
module.exports.config = {
   name: 'unmute',
   noalias: "No Aliases",
   aliases: [],
   description: 'unmute a user in a server',
   usage: `${prefix}unmute <user> (reason)`,
   accessableby: "moderators"
 }
