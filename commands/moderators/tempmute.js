const Discord = require("discord.js")
const botconfig = require("../../botconfig.json")
const ms = require("ms")
const prefix = botconfig.prefix;

const work = botconfig.work;


module.exports.run = async (bot, message, args) => {

  if (message.author.id != "513571036688547871") {
    if(work != "true") return message.channel.send(`The bot is under maintenance do ` + "`" + `${prefix}support` + "`" + ` for more information`)
  }

  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(`${emoji('cross')} command is not avaliable for your role`);
  if(!message.guild.me.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.channel.send("I dont have permission to use this command")

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Couldn't find user.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");

  let reason = args.slice(2).join(" ");
  if(!reason) reason = "No reason given"

  //define mute role and if the mute role doesnt exist then create one
  let muterole = message.guild.roles.find(r => r.name === "301 Muted")
  if(!muterole) {
      try{
          muterole = await message.guild.createRole({
              name: "301 Muted",
              color: "#514f48",
              permissions: []
          })
          message.guild.channels.forEach(async (channel, id) => {
              await channel.overwritePermissions(muterole, {
                  SEND_MESSAGES: false,
                  ADD_REACTIONS: false,
                  SEND_TTS_MESSAGES: false,
                  ATTACH_FILES: false,
                  SPEAK: false
              })
          })
      } catch(e) {
          console.log(e.stack);
      }
  }

  //add role to the mentioned user and also send the user a dm explaing where and why they were muted
  let mutetime = args[1];
 if(!mutetime) return message.reply("You didn't specify a time!");

if (!tomute.roles.has(muterole.id)) {
 await(tomute.addRole(muterole.id));
  tomute.addRole(muterole.id).then(() => {
      tomute.send(`You have been in muted in ${message.guild.name} for ${ms(ms(mutetime))}: **${reason}**`).catch(err => console.log(err))
      message.channel.send(`${emoji('tick')} Successfully muted ${tomute.user.username} for ${ms(ms(mutetime))}!`)
  })
} else {
  message.channel.send("They already are muted!")
}

  //send an embed to the modlogs channel
  let embed = new Discord.RichEmbed()
  .setColor('#1651e5')
  .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
  .setTitle("Temp Mute")
  .addField("Muted User:", `${tomute}`)
  .addField("Moderator:", `<@${message.author.id}>`)
  .addField("Muted for:",  `${ms(ms(mutetime))}`)
  .addField("Reason:", reason)
  .addField("Date:", message.createdAt.toLocaleString())

  let muteChannel = message.guild.channels.find(`name`, "⛔server-logs⛔");
  if(!muteChannel) return message.author.send(`do ` + "`" + `-setup` + "`" + ` in ${message.guild.name} so the bot can setup stuff for you to use these commands correctly :ok_hand:`);

  muteChannel.send(embed);

  setTimeout(function(){
  tomute.removeRole(muterole.id);
  message.channel.send(`<@${tomute.id}> has been unmuted!`);

  tomute.send(`You have been in unmuted in ${message.guild.name}`).catch(err => console.log(err))

  let aembed = new Discord.RichEmbed()
  .setColor('#ef4c10')
  .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
  .setTitle("Unmute")
  .addField("unMuted User:", `${tomute}`)
  .addField("Moderator:", "Security 301")
  .addField("Reason:", `Time of mute has finished`)
  .addField("Date:", message.createdAt.toLocaleString())

  let channel = message.guild.channels.find(`name`, "⛔server-logs⛔");
  channel.send(aembed);

}, ms(mutetime));





   function emoji(name) {return bot.emojis.find(emoji => emoji.name === name)

   }
 }
module.exports.config = {
   name: 'tempmute',
   noalias: "No Aliases",
   aliases: [],
   description: 'tempmute a user in a server',
   usage: `${prefix}mute <user> (reason)`,
   accessableby: "moderators"
 }
