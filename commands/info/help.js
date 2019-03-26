const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const prefix = botconfig.prefix;
const work = botconfig.work;


module.exports.run = async (bot, message, args) => {

  if (message.author.id != "513571036688547871") {
    if(work != "true") return message.channel.send(`The bot is under maintenance do ` + "`" + `${prefix}support` + "`" + ` for more information`)
  }

    if(args[0] == "help") return message.channel.send(`Just do ${prefix}help instead.`)

    if(args[0]) {
        let command = args[0];
        if(bot.commands.has(command)) {
            command = bot.commands.get(command);
            var SHembed = new Discord.RichEmbed()
            .setColor('#5780cd')
            .setAuthor(`Security 301 help!`, bot.user.displayAvatarURL)
            .setThumbnail(message.guild.iconURL)
            .setDescription(`The bot prefix is: ${prefix}\n\n**>Command:** ${command.config.name}\n**>Description:** ${command.config.description || "No Description"}\n**>Usage:** ${command.config.usage || "No Usage"}\n**>Accessable by:** ${command.config.accessableby || "Members"}\n**>Aliases:** ${command.config.noalias || command.config.aliases}`)
            .setFooter(`Requested by: ${message.author.username}`, message.author.displayAvatarURL )
            message.channel.send(SHembed);
        }}
  if (message.author.id != "513571036688547871") {
    if(!args[0]) {
        let Sembed = new Discord.RichEmbed()
        .setColor('#5780cd')
        .setAuthor(`Security 301 Help`, bot.user.displayAvatarURL)
        .setThumbnail( message.guild.iconURL)
        .setTimestamp()
        .setDescription(`These are the avaliable commands for the Diamond Drop!\nThe bot prefix is: ${prefix}\n**Do** ${prefix}help [Command] **- for further information**`)
        .addField(`:8ball: Fun`, "`virus` `cowsay` `rps` `8ball` `coinflip` `dog` `cat` `meme`")
        .addField(`:spy: Administrator:`, "`setup` `say` `setprefix`")
        .addField(`:tools: Modertation:`, "`lockdown` `addrole` `ban` `kick` `mute` `removerole` `tempmute` `unmute` `clear` `unban`")
        .addField(`:information_source: Information`, "`about` `serverinfo` `roleinfo` `userinfo` `membercount` `weather`")
        .addField(`:wrench: Utility`,  "`help` `invite` `support` `uptime` `ping`")
        .setFooter(`Requested by: ${message.author.username}`, message.author.displayAvatarURL )
        message.channel.send(Sembed)
    }
  }else {
        if(!args[0]) {
        let Saembed = new Discord.RichEmbed()
        .setColor('#5780cd')
        .setAuthor(`Security 301 Help`, bot.user.displayAvatarURL)
        .setThumbnail( message.guild.iconURL)
        .setTimestamp()
        .setDescription(`These are the avaliable commands for the Diamond Drop!\nThe bot prefix is: ${prefix}\n**Do** ${prefix}help [Command] **- for further information**`)
        .addField(`:warning: Bot owner`, "`setstatus`, `listservers` `testjoin` `testleave`" )
        .addField(`:8ball: Fun`, "`virus` `cowsay` `rps` `8ball` `coinflip` `dog` `cat` `meme`")
        .addField(`:spy: Administrator:`, "`setup` `say` `setprefix`")
        .addField(`:tools: Modertation:`, "`lockdown` `addrole` `ban` `kick` `mute` `removerole` `tempmute` `unmute` `clear` `unban`")
        .addField(`:information_source: Information`, "`about` `serverinfo` `roleinfo` `userinfo` `membercount` `weather`")
        .addField(`:wrench: Utility`,  "`help` `invite` `support` `uptime` `ping` `setstatus` `listservers`")
        .setFooter(`Requested by: ${message.author.username}`, message.author.displayAvatarURL )
        message.channel.send(Saembed)
    }
  }
    function emoji(name) {return bot.emojis.find(emoji => emoji.name === name)
}
}


module.exports.config = {
    name: "help",
    aliases: ["h", "halp", "commands"],
    usage: "${prefix}help",
    description: "Shows the list of commands for this bot",
    accessableby: "everyone"
  }
