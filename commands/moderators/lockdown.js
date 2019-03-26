const Discord = require("discord.js")
const ms = require("ms")
const botconfig =  require("../../botconfig.json")
const prefix = botconfig.prefix;

const work = botconfig.work;


module.exports.run = async (bot, message, args) => {

  if (message.author.id != "513571036688547871") {
    if(work != "true") return message.channel.send(`The bot is under maintenance do ` + "`" + `${prefix}support` + "`" + ` for more information`)
  }

  if(!message.member.hasPermission("MANAGE_CHANNELS") || !message.guild.owner) return message.channel.send("You dont have permission to use this command.");
   if(!message.guild.me.hasPermission(["MANAGE_CHANNELS", "ADMINISTRATOR"])) return message.channel.send("I don't have permission **'MANAGE_CHANNELS'**!")
  if (!bot.lockit) bot.lockit = [];
 let time = args.join(' ');
 let validUnlocks = ['release', 'unlock'];
 if (!time) return message.reply('You must set a duration for the lockdown in either hours, minutes or seconds');
 let bicon = bot.user.displayAvatarURL
 let sicon = message.guild.displayAvatarURL

 let lockChannel = message.guild.channels.find(`name`, "⛔server-logs⛔");
 if(!lockChannel) return message.author.send(`do ` + "`" + `-setup` + "`" + ` in ${message.guild.name} so the bot can setup stuff for you to use these commands correctly :ok_hand:`);

 let Lembed = new Discord.RichEmbed()
 .setTitle("lockdown settings")
 .setThumbnail(bicon)
   .addField("Lockdown Status", `${emoji('switchOff')} - Turned off`)
   .addField("Lockdown News", `Lockdown lifted, Procced Chatting again!`)

   let Sembed = new Discord.RichEmbed()
      .setTitle("lockdown settings")
     .setThumbnail(bicon)
     .addField("Lockdown Status", `${emoji('switchOn')} - Turned on`)
     .addField("Lockdown News", `Channel Lockdown, Chatting is disabled for ${ms(ms(time), { long:true })}!`)

     let Saembed = new Discord.RichEmbed()
        .setTitle("lockdown settings")
       .setThumbnail(bicon)
       .addField("Lockdown Status", `${emoji('switchOn')} - Turned on`)
       .addField("Lockdown News", `Channel Lockdown, Chatting is disabled in ${message.channel} for ${ms(ms(time), { long:true })}!`)

       let Laembed = new Discord.RichEmbed()
       .setTitle("lockdown settings")
       .setThumbnail(bicon)
         .addField("Lockdown Status", `${emoji('switchOff')} - Turned off`)
         .addField("Lockdown News", `Lockdown lifted in ${message.channel}, Procced Chatting again!`)



 if (validUnlocks.includes(time)) {
   message.channel.overwritePermissions(message.guild.id, {
     SEND_MESSAGES: null
   }).then(() => {
     lockChannel.send(Laembed)
     message.channel.send(Lembed);
     clearTimeout(bot.lockit[message.channel.id]);
     delete bot.lockit[message.channel.id];
   }).catch(error => {
     console.log(error);
   });
 } else {
   message.channel.overwritePermissions(message.guild.id, {
     SEND_MESSAGES: false
   }).then(() => {
      lockChannel.send(Saembed)
     message.channel.send(Sembed).then(() => {

       bot.lockit[message.channel.id] = setTimeout(() => {
         message.channel.overwritePermissions(message.guild.id, {
           SEND_MESSAGES: null
         }).then(message.channel.send(Lembed), lockChannel.send(Laembed)).catch(console.error);
         delete bot.lockit[message.channel.id];
       }, ms(time));

     }).catch(error => {
       console.log(error);
     });
   });
 }
   function emoji(name) {return bot.emojis.find(emoji => emoji.name === name)

   }
};
module.exports.config = {
   name: 'lockdown',
   aliases: ["lock"],
   description: 'Locks a channel for a set duration (in hrs, mins or secs).',
   usage: `${prefix}lockdown <duration>`,
   accessableby: "Moderators"
}
