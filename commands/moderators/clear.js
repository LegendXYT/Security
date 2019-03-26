const Discord = require("discord.js");
const botconfig =  require("../../botconfig.json")
const prefix = botconfig.prefix

const work = botconfig.work;

module.exports.run = async (bot, message, args) => {
  if (message.author.id != "513571036688547871") {
    if(work != "true") return message.channel.send(`The bot is under maintenance do ` + "`" + `${prefix}support` + "`" + ` for more information`)
  }

  //!clear 15
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You do not have the permission 'MANAGE_MESSAGES'!");
  if(!args[0]) return message.channel.send("Please select the amount of messages you want to delete.");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(5000));
  });
  let embed = new Discord.RichEmbed()
  .setColor(0xafeeee)
  .setAuthor(`${message.guild.name}`, message.guild.iconURL)
  .setDescription(`**${message.author} deleted ${args[0]} messages in ${message.channel}**`)
  .setFooter(new Date())

  let clearChannel = message.guild.channels.find(`name`, "⛔server-logs⛔");
  if(!clearChannel) return message.author.send(`do ` + "`" + `-setup` + "`" + ` in ${message.guild.name} so the bot can setup stuff for you to use these commands correctly :ok_hand:`);


    clearChannel.send(embed);
}

module.exports.config = {
    name: "clear",
    description: "clears a ceartain ammount of messages!",
    usage: `${prefix}clear <message count>`,
    accessableby: "Modertators",
    aliases: ["purge", "clean"]
}
