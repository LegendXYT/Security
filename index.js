const Discord = require("discord.js");
const botconfig = require("./botconfig.json");
const prefix = botconfig.prefix;

const bot = new Discord.Client({disableEveryone: true});


require("./util/eventHandler")(bot)
// start of commmand handler
const fs = require("fs");

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

let foldernames = ["administrators", "botowner", "fun", "info", "moderators", "utlity"]; // feel free to add all the folders u have into this array

function loadCommands(folder) {
    fs.readdir(`./commands/${folder}`, (err, files) => {
        if (err) console.error(err);
        let jsfiles = files.filter(f => f.split(".").pop() === "js");

        if (jsfiles.length <= 0) return console.log("There are no commands to load...");

        console.log(`Loading ${jsfiles.length} commands...`);
        jsfiles.forEach((f, i) => {
            let props = require(`./commands/${folder}/${f}`);
            console.log(`${i + 1}: ${f} loaded!`);
            bot.commands.set(props.config.name, props);
            props.config.aliases.forEach(alias => {
                bot.aliases.set(alias, props.config.name);
            });
        });
    });
}

foldernames.forEach(folder => {
     loadCommands(folder);
});


bot.on("guildCreate", guild => {
  let gcembed = new Discord.RichEmbed()
  .setColor("#08d32a")
  .setAuthor(`${guild.name}`, guild.iconURL)
  .addField("I joined a server!", `I am now in ${bot.guilds.size} servers.`)
  .addField("Owner", `${guild.owner}`, true)
  .addField("Member Count", `${guild.memberCount}`, true)
  bot.channels.get("545921329958879252").send(gcembed);

});

bot.on("guildDelete", guild => {
  let gdembed = new Discord.RichEmbed()
  .setColor("#f70404")
  .setAuthor(`${guild.name}`, guild.iconURL)
  .addField("I Left a server!", `I am now in ${bot.guilds.size} servers.`)
  .addField("Owner", `${guild.owner}`, true)
  .addField("Member Count", `${guild.memberCount} members`, true)
  bot.channels.get("545921329958879252").send(gdembed);
});
// end of command handler

// // user joins server
bot.on("guildMemberAdd", member => {
  let welcomeChannel = member.guild.channels.find(`name`, "⛔server-logs⛔");
  if(!welcomeChannel) return;
  let gmaembed = new Discord.RichEmbed()
  .setAuthor(member.username.tag, member.displayAvatarURL)
  .setDescription("hi")

 welcomeChannel.send(gmaembed)

})

// user leaves a server

bot.on("guildMemberRemove", member => {
  let welcomeChannel = member.guild.channels.find(`name`, "⛔server-logs⛔");
  if(!welcomeChannel) return;
  let gmrembed = new Discord.RichEmbed()

})

//message delete

bot.on('messageDelete', function(message){
  let logsChannel = message.guild.channels.find(x => x.name == "⛔server-logs⛔");
  if(!logsChannel) return;

  let mdembed =  new Discord.RichEmbed()
  .setColor(0xafeeee)
  .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
  .setDescription(`**Message sent by ${message.author} deleted in ${message.channel}**\n${message}`)
  .setFooter(`Author: ${message.author.id} | Message ID: ${message.id} • ${Date.now() - 5000}`)

  logsChannel.send(mdembed).catch(error => console.error(error));
})

bot.on('channelCreate', function(channel){
  let logsChannel2 = channel.guild.channels.find(`name`, "⛔server-logs⛔")
  if(!logsChannel2) return;

  let ccembed =  new Discord.RichEmbed()
  .setColor(0xafeeee)
  .setAuthor(`${channel.guild.name}`, channel.guild.iconURL)
  .setDescription(`**channel created ${channel}**`)
  .setFooter(`${Date.now() - 5000}`)

  logsChannel2.send(ccembed).catch(error => console.error(error));
})

bot.on('channelDelete', function(channel2){
  let logsChannel3 = channel2.guild.channels.find(`name`, "⛔server-logs⛔");
  if(!logsChannel3) return;

  let cdembed =  new Discord.RichEmbed()
  .setColor(0xafeeee)
  .setAuthor(`${channel2.guild.name}`, channel2.guild.iconURL)
  .setDescription(`**channel deleted:** ${channel2.name}`)
  .setFooter(`${Date.now() - 5000}`)

  logsChannel3.send(cdembed).catch(error => console.error(error));
})

bot.on('roleCreate', function(role){
  let logsChannel4 = role.guild.channels.find(`name`, "⛔server-logs⛔");
  if(!logsChannel4) return;

  let rcembed =  new Discord.RichEmbed()
  .setColor(0xafeeee)
  .setAuthor(`${role.guild.name}`, role.guild.iconURL)
  .setDescription(`**New Role Created** ${role}`)
  .setFooter(`${Date.now() - 5000}`)

  logsChannel4.send(rcembed).catch(error => console.error(error));
})

bot.on('roleDelete', function(role){
  let logsChannel5 = role.guild.channels.find(`name`, "⛔server-logs⛔");
  if(!logsChannel5) return;

  let rdembed =  new Discord.RichEmbed()
  .setColor(0xafeeee)
  .setAuthor(`${role.guild.name}`, role.guild.iconURL)
  .setDescription(`**Role Deleted** ${role.name}`)
  .setFooter(`${Date.now() - 5000}`)

  logsChannel5.send(rdembed).catch(error => console.error(error));
})

bot.on('emojiCreate', function(emoji){
  let logsChannel6 = emoji.guild.channels.find(`name`, "⛔server-logs⛔");
  if(!logsChannel6) return;

  let acembed =  new Discord.RichEmbed()
  .setColor(0xafeeee)
  .setAuthor(`${emoji.guild.name}`, emoji.guild.iconURL)
  .setDescription(`**Emoji Added:** ${emoji}`)
  .setFooter(`${Date.now() - 5000}`)

  logsChannel6.send(acembed).catch(error => console.error(error));
})

bot.on('emojiDelete', function(emoji){
  let logsChannel7 = emoji.guild.channels.find(`name`, "⛔server-logs⛔");
  if(!logsChannel7) return;

  let adembed =  new Discord.RichEmbed()
  .setColor(0xafeeee)
  .setAuthor(`${emoji.guild.name}`, emoji.guild.iconURL)
  .setDescription(`**Emoji Deleted:** ${emoji.name}`)
  .setFooter(`${Date.now() - 5000}`)

  logsChannel7.send(adembed).catch(error => console.error(error));
})





// message event
bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  }

    let prefix = prefixes[message.guild.id].prefixes;
    if(!message.content.startsWith(prefix)) return;
    let sender = message.author;
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);


    if(!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(bot,message,args)





});
//ready the bot
  console.log(`Security 301 is online and ready to protect ${bot.guilds.size} servers and watching ${bot.users.size} users!`)
  //bot token
  bot.login(process.env.token);
