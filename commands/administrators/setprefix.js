const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const prefix = botconfig.prefix;
const work = botconfig.work;
const fs = require("fs");


module.exports.run = async (bot, message, args) => {

  if (message.author.id != "513571036688547871") {
    if(work != "true") return message.channel.send(`The bot is under maintenance do ` + "`" + `${prefix}support` + "`" + ` for more information`)
  }
  

        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("require **ADMINISTRATOR** permission, sorry");
        if(!args[0]) return message.reply("Usage: -prefix <your custom prefix here>");

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

    prefixes[message.guild.id] = {
      prefixes: args[0]
    };

    fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
      if (err) console.log(err)
    });

    message.channel.send(`Set prefix to ` + "`" + args[0] + "`");

}


module.exports.config = {
    name: "setprefix",
    description: "set the guild prefix (p.s any of the commands that show - will not change for the time being)",
    usage: `${prefix}setprefix [prefix]`,
    accessableby: "Administrators",
    aliases: ["guildprefixset"]
}
