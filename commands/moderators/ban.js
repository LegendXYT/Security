const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const prefix = botconfig.prefix;

const work = botconfig.work;


module.exports.run = async (bot, message, args) => {

  if (message.author.id != "513571036688547871") {
    if(work != "true") return message.channel.send(`The bot is under maintenance do ` + "`" + `${prefix}support` + "`" + ` for more information`)
  }

  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`${emoji('cross')} command is not avaliable for your role`);

  let banMember = message.mentions.members.first() || message.guild.members.get(args[0])
   if(!banMember) return message.channel.send("Please provide a user to ban!")
   if(banMember.hasPermission("BAN_MEMBERS")) return message.reply("Can't ban them!");

   let reason = args.slice(1).join(" ");
   if(!reason) reason = "No reason given!"

   if(!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("I dont have permission to use this command")

   banMember.send(`You have been banned from ${message.guild.name} for: **${reason}**`).then(() =>
   message.guild.ban(banMember).catch(err => console.log(err)));

  message.channel.send(`${emoji('tick')} Successfully banned **${banMember.user.tag}**`)

  let embed = new Discord.RichEmbed()
  .setDescription("Ban")
  .setColor("#af3001")
  .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
  .addField("Banned User", `${banMember}`)
  .addField("Banned User ID", `${banMember.id}`)
  .addField("Banned By", `<@${message.author.id}>`)
  .addField("Banned In", message.channel)
  .addField("Reason", reason)
  .addField("Date:", message.createdAt.toLocaleString())

  let banChannel = message.guild.channels.find(`name`, "⛔server-logs⛔");
  if(!banChannel) return message.author.send(`do ` + "`" + `-setup` + "`" + ` in ${message.guild.name} so the bot can setup stuff for you to use these commands correctly :ok_hand:`);


    banChannel.send(embed);


   function emoji(name) {return bot.emojis.find(emoji => emoji.name === name)

   }
 }
module.exports.config = {
   name: 'ban',
   noalias: "No Aliases",
   aliases: [],
   description: 'ban a user from the server',
   usage: `${prefix}ban <user> (reason)`,
   accessableby: "moderators"
 }
