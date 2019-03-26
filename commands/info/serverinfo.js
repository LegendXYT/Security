const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const prefix = botconfig.prefix;

const work = botconfig.work;


module.exports.run = async (bot, message, args) => {

  if (message.author.id != "513571036688547871") {
    if(work != "true") return message.channel.send(`The bot is under maintenance do ` + "`" + `${prefix}support` + "`" + ` for more information`)
  }
  
  const verlvl = {
    0: "None",
    1: "Low",
    2: "Medium",
    3: "(╯°□°）╯︵ ┻━┻",
    4: "(ノಠ益ಠ)ノ彡┻━┻"
  }

    let inline = true
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setThumbnail(sicon)
    .setAuthor(message.guild.name)
    .addField("Name", message.guild.name, true)
    .addField("ID", message.guild.id,true)
    .addField("Owner", message.guild.owner, true)
    .addField("Region", message.guild.region, true)
    .addField("Verification Level", verlvl[message.guild.verificationLevel], true)
    .addField("Members", `${message.guild.memberCount}`, true)
    .addField("Roles", message.guild.roles.size, true)
    .addField("Channels", message.guild.channels.size, true)
    .addField("You Joined", message.member.joinedAt, true)
    .setFooter(`Created ${message.guild.createdAt}`);

    message.channel.send(serverembed);

    message.delete();
}

module.exports.config = {
    name: "serverinfo",
    noalias: "No Aliases",
    aliases: [],
    usage: `${prefix}serverinfo`,
    description: "information about the server!",
    accessableby: "everyone"
  }
