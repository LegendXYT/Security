const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const moment = require("moment")
const prefix = botconfig.prefix;

const work = botconfig.work;


module.exports.run = async (bot, message, args) => {
  if (message.author.id != "513571036688547871") {
    if(work != "true") return message.channel.send(`The bot is under maintenance do ` + "`" + `${prefix}support` + "`" + ` for more information`)
  }

  let user;
  if(message.mentions.members.first()) {
    user = message.mentions.members.first();


  } else {
    user = message.author;
  }


    const member = message.guild.member(user);
    let arr = message.guild.members.array(); // Create an array with every member

    const embed = new Discord.RichEmbed()
        .setColor(`RANDOM`)
        .setAuthor(member.user.tag, member.user.displayAvatarURL)
        .setThumbnail(member.user.displayAvatarURL)
        .setDescription(`${user}`)
        .addField('Status:', user.presence.status, true)
        .addField('Joined', `${moment.utc(user.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
        .addField('Registered', `${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
        .addField('Game:', `${(user.presence.game && user.presence.game && user.presence.game.name) || 'Not playing a game.'}`, true)
        .addField('Roles:', user.roles.map(r => `${r}`).join(' | '), true)
        .setFooter(`ID: ${user.id}`)
        .setTimestamp();


    message.channel.send({embed});
    return;
}

module.exports.config = {
      name: "userinfo",
      aliases: ['whois'],
      usage: `${prefix}userinfo {user}`,
      description: "check information about a user!",
      accessableby: "everyone"
    }
