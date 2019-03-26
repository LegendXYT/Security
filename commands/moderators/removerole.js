const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const prefix = botconfig.prefix;

const work = botconfig.work;


module.exports.run = async (bot, message, args) => {

  if (message.author.id != "513571036688547871") {
    if(work != "true") return message.channel.send(`The bot is under maintenance do ` + "`" + `${prefix}support` + "`" + ` for more information`)
  }

  if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(`${emoji('cross')} command is not avaliable for your role` )

  let user;
  if(message.mentions.members.first()) {
    user = message.mentions.members.first();
  }

  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Couldn't find that user!");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Couldn't find that role.");

  if(!rMember.roles.has(gRole.id)) return message.reply("They don't have that role.");
  await(rMember.removeRole(gRole.id));


    message.delete()
    message.channel.send(`${emoji('tick')} Successfully Changed roles for ${user} -${role}`)

    let aembed = new Discord.RichEmbed()
    .setColor(0xafeeee)
    .setAuthor(`${message.guild.name}`, message.guild.iconURL)
    .setDescription(`**${rMember} has been given role ${gRole} by ${message.author}**`)
    .setFooter(new Date())

    let addroleChannel = message.guild.channels.find(`name`, "⛔server-logs⛔");
    if(!addroleChannel) return message.author.send(`do ` + "`" + `-setup` + "`" + ` in ${message.guild.name} so the bot can setup stuff for you to use these commands correctly :ok_hand:`);


      addroleChannel.send(aembed);

   function emoji(name) {return bot.emojis.find(emoji => emoji.name === name)

   }
 }
module.exports.config = {
   name: 'removerole',
   aliases: ["remrole"],
   description: 'remove a role from a user',
   usage: `${prefix}removerole <user> <role>`,
   accessableby: "Moderators"
}
