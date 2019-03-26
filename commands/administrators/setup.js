const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const prefix = botconfig.prefix;
const work = botconfig.work;


module.exports.run = async (bot, message, args) => {

  if (message.author.id != "513571036688547871") {
    if(work != "true") return message.channel.send(`The bot is under maintenance do ` + "`" + `${prefix}support` + "`" + ` for more information`)
  }

   if(!message.member.hasPermission("ADMINISTRATOR") || !message.guild.owner) return message.channel.send(`${emoji('cross')} **Failure to setup the server!** If this is a mistake **contact** the server owner!`);
   if(!message.guild.me.hasPermission(["MANAGE_CHANNELS", "ADMINISTRATOR", "MANAGE_ROLES"])) return message.channel.send(`${emoji('cross')} **Failure to setup the server!** If this a mistake try ` + "`" + `${prefix}about` + "`" + ` for more information!`)
   // create roles


   // message.guild.channels.overwritePermissions(`name`, "@everyone", { 'MENTION_EVERYONE': false});
   let ownerRole = message.guild.roles.find(`name`, "Owner");

   if(!ownerRole){
    try{
      ownerRole = await message.guild.createRole({
        name: "Owner",
        color: "#08a825",
        permissions:['ADMINISTRATOR', 'MENTION_EVERYONE']
      })
    }catch(e){
      console.log(e.stack);
}
}

let adminRole = message.guild.roles.find(`name`, "Administrators");

if(!adminRole){
 try{
   adminRole = await message.guild.createRole({
     name: "Administrators",
     color: "#0684dd",
     permissions:['ADMINISTRATOR', 'MENTION_EVERYONE']
   })
 }catch(e){
   console.log(e.stack);
}
}

let modRole = message.guild.roles.find(`name`, "Moderators");

if(!modRole){
 try{
   modRole = await message.guild.createRole({
     name: "Moderators",
     color: "#e180f7",
     permissions:['BAN_MEMBERS', 'KICK_MEMBERS', 'VIEW_AUDIT_LOG', 'MANAGE_MESSAGES', 'MUTE_MEMBERS', 'MANAGE_NICKNAMES', 'MANAGE_ROLES', 'MANAGE_GUILD', 'MENTION_EVERYONE']
   })
 }catch(e){
   console.log(e.stack);
}
}

let staffRole = message.guild.roles.find(`name`, "Trial Moderator");

if(!staffRole){
 try{
   staffRole = await message.guild.createRole({
     name: "Trial Moderator",
     color: "#620577",
     permissions:['BAN_MEMBERS', 'KICK_MEMBERS', 'VIEW_AUDIT_LOG', 'MANAGE_MESSAGES', 'MUTE_MEMBERS', 'MANAGE_NICKNAMES', 'MANAGE_ROLES', 'MANAGE_GUILD', 'MENTION_EVERYONE']
   })
 }catch(e){
   console.log(e.stack);
}
}

let tmodRole = message.guild.roles.find(`name`, "Staff");

if(!tmodRole){
 try{
   tmodRole = await message.guild.createRole({
     name: "Staff",
     color: "Default",
     permissions:['BAN_MEMBERS', 'KICK_MEMBERS', 'VIEW_AUDIT_LOG', 'MANAGE_MESSAGES', 'MUTE_MEMBERS', 'MANAGE_NICKNAMES', 'MENTION_EVERYONE']
   })
 }catch(e){
   console.log(e.stack);
}
}









   // create categories/channels
   var server = message.guild;

   message.guild.createChannel("MODERATORS", "category").then((cat1) => {

     cat1.overwritePermissions(message.guild.roles.find('name', '@everyone'), { 'READ_MESSAGES': false}); // Give the channel some standard permissions.
   }).catch (e => {
     console.log(e)
   })
   // end of create category
   message.guild.createChannel("》staff-announcements《", "text").then((chan1) => {

     let category = server.channels.find(c => c.name == "MODERATORS" && c.type === "category");

     if (!category) throw new Error("Category channel does not exist");
     chan1.setParent(category.id);

     chan1.overwritePermissions(message.guild.roles.find('name', '@everyone'), { 'READ_MESSAGES': false}); // Give the channel some standard permissions.
                chan1.overwritePermissions(message.guild.roles.find('name', 'Moderators'), {
                    'CREATE_INSTANT_INVITE' : true,        'ADD_REACTIONS': true,
                    'READ_MESSAGES': true,                  'SEND_MESSAGES': true,
                    'SEND_TTS_MESSAGES': true,              'MANAGE_MESSAGES': false,
                    'EMBED_LINKS': true,                    'ATTACH_FILES': false,
                    'READ_MESSAGE_HISTORY': true,           'MENTION_EVERYONE': false,
                    'EXTERNAL_EMOJIS': true,                'CONNECT': true,
                    'SPEAK': true
                  });
                  chan1.overwritePermissions(message.guild.roles.find('name', 'Administrators'), {
                      'CREATE_INSTANT_INVITE' : true,        'ADD_REACTIONS': true,
                      'READ_MESSAGES': true,                  'SEND_MESSAGES': true,
                      'SEND_TTS_MESSAGES': true,              'MANAGE_MESSAGES': true,
                      'EMBED_LINKS': true,                    'ATTACH_FILES': true,
                      'READ_MESSAGE_HISTORY': true,           'MENTION_EVERYONE': false,
                      'EXTERNAL_EMOJIS': true,                'CONNECT': true,
                      'SPEAK': true
                    });
                    chan1.overwritePermissions(message.guild.roles.find('name', 'Owner'), {
                        'CREATE_INSTANT_INVITE' : true,        'ADD_REACTIONS': true,
                        'READ_MESSAGES': true,                  'SEND_MESSAGES': true,
                        'SEND_TTS_MESSAGES': true,              'MANAGE_MESSAGES': true,
                        'EMBED_LINKS': true,                    'ATTACH_FILES': true,
                        'READ_MESSAGE_HISTORY': true,           'MENTION_EVERYONE': false,
                        'EXTERNAL_EMOJIS': true,                'CONNECT': true,
                        'SPEAK': true
                      });
                      chan1.overwritePermissions(message.guild.roles.find('name', 'Staff'), {
                          'CREATE_INSTANT_INVITE' : true,        'ADD_REACTIONS': true,
                          'READ_MESSAGES': true,                  'SEND_MESSAGES': true,
                          'SEND_TTS_MESSAGES': true,              'MANAGE_MESSAGES': false,
                          'EMBED_LINKS': true,                    'ATTACH_FILES': false,
                          'READ_MESSAGE_HISTORY': true,           'MENTION_EVERYONE': false,
                          'EXTERNAL_EMOJIS': true,                'CONNECT': true,
                          'SPEAK': true
                        });
                        chan1.overwritePermissions(message.guild.roles.find('name', 'Trial Moderator'), {
                            'CREATE_INSTANT_INVITE' : true,        'ADD_REACTIONS': true,
                            'READ_MESSAGES': true,                  'SEND_MESSAGES': true,
                            'SEND_TTS_MESSAGES': true,              'MANAGE_MESSAGES': false,
                            'EMBED_LINKS': true,                    'ATTACH_FILES': false,
                            'READ_MESSAGE_HISTORY': true,           'MENTION_EVERYONE': false,
                            'EXTERNAL_EMOJIS': true,                'CONNECT': true,
                            'SPEAK': true
                          });
                        }).catch (e => {
                          console.log(e)
                        })
   // mod chat perms
   message.guild.createChannel("modchat", "text").then((chan2) => {

     let category = server.channels.find(c => c.name == "MODERATORS" && c.type === "category");

     if (!category) throw new Error("Category channel does not exist");
     chan2.setParent(category.id);

     chan2.overwritePermissions(message.guild.roles.find('name', '@everyone'), { 'READ_MESSAGES': false}); // Give the channel some standard permissions.
                chan2.overwritePermissions(message.guild.roles.find('name', 'Moderators'), {
                    'CREATE_INSTANT_INVITE' : true,        'ADD_REACTIONS': true,
                    'READ_MESSAGES': true,                  'SEND_MESSAGES': true,
                    'SEND_TTS_MESSAGES': true,              'MANAGE_MESSAGES': false,
                    'EMBED_LINKS': true,                    'ATTACH_FILES': false,
                    'READ_MESSAGE_HISTORY': true,           'MENTION_EVERYONE': false,
                    'EXTERNAL_EMOJIS': true,                'CONNECT': true,
                    'SPEAK': true
                  });
                  chan2.overwritePermissions(message.guild.roles.find('name', 'Administrators'), {
                      'CREATE_INSTANT_INVITE' : true,        'ADD_REACTIONS': true,
                      'READ_MESSAGES': true,                  'SEND_MESSAGES': true,
                      'SEND_TTS_MESSAGES': true,              'MANAGE_MESSAGES': true,
                      'EMBED_LINKS': true,                    'ATTACH_FILES': true,
                      'READ_MESSAGE_HISTORY': true,           'MENTION_EVERYONE': false,
                      'EXTERNAL_EMOJIS': true,                'CONNECT': true,
                      'SPEAK': true
                    });
                    chan2.overwritePermissions(message.guild.roles.find('name', 'Owner'), {
                        'CREATE_INSTANT_INVITE' : true,        'ADD_REACTIONS': true,
                        'READ_MESSAGES': true,                  'SEND_MESSAGES': true,
                        'SEND_TTS_MESSAGES': true,              'MANAGE_MESSAGES': true,
                        'EMBED_LINKS': true,                    'ATTACH_FILES': true,
                        'READ_MESSAGE_HISTORY': true,           'MENTION_EVERYONE': false,
                        'EXTERNAL_EMOJIS': true,                'CONNECT': true,
                        'SPEAK': true
                      });
                      chan2.overwritePermissions(message.guild.roles.find('name', 'Staff'), {
                          'CREATE_INSTANT_INVITE' : true,        'ADD_REACTIONS': true,
                          'READ_MESSAGES': true,                  'SEND_MESSAGES': true,
                          'SEND_TTS_MESSAGES': true,              'MANAGE_MESSAGES': false,
                          'EMBED_LINKS': true,                    'ATTACH_FILES': false,
                          'READ_MESSAGE_HISTORY': true,           'MENTION_EVERYONE': false,
                          'EXTERNAL_EMOJIS': true,                'CONNECT': true,
                          'SPEAK': true
                        });
                        chan2.overwritePermissions(message.guild.roles.find('name', 'Trial Moderator'), {
                            'CREATE_INSTANT_INVITE' : true,        'ADD_REACTIONS': true,
                            'READ_MESSAGES': true,                  'SEND_MESSAGES': true,
                            'SEND_TTS_MESSAGES': true,              'MANAGE_MESSAGES': false,
                            'EMBED_LINKS': true,                    'ATTACH_FILES': false,
                            'READ_MESSAGE_HISTORY': true,           'MENTION_EVERYONE': false,
                            'EXTERNAL_EMOJIS': true,                'CONNECT': true,
                            'SPEAK': true

                          });
                        }).catch (e => {
                            console.log(e)
                          })
   // warns perms
   message.guild.createChannel("⛔warns⛔", "text").then((chan3) => {
     let category = server.channels.find(c => c.name == "MODERATORS" && c.type === "category");

     if (!category) throw new Error("Category channel does not exist");
     chan3.setParent(category.id);

     chan3.overwritePermissions(message.guild.roles.find('name', '@everyone'), { 'READ_MESSAGES': false}); // Give the channel some standard permissions.
                chan3.overwritePermissions(message.guild.roles.find('name', 'Moderators'), {
                    'CREATE_INSTANT_INVITE' : true,        'ADD_REACTIONS': true,
                    'READ_MESSAGES': true,                  'SEND_MESSAGES': false,
                    'SEND_TTS_MESSAGES': true,              'MANAGE_MESSAGES': false,
                    'EMBED_LINKS': true,                    'ATTACH_FILES': false,
                    'READ_MESSAGE_HISTORY': true,           'MENTION_EVERYONE': false,
                    'EXTERNAL_EMOJIS': true,                'CONNECT': true,
                    'SPEAK': true
                  });
                  chan3.overwritePermissions(message.guild.roles.find('name', 'Administrators'), {
                      'CREATE_INSTANT_INVITE' : true,        'ADD_REACTIONS': true,
                      'READ_MESSAGES': true,                  'SEND_MESSAGES': false,
                      'SEND_TTS_MESSAGES': true,              'MANAGE_MESSAGES': true,
                      'EMBED_LINKS': true,                    'ATTACH_FILES': true,
                      'READ_MESSAGE_HISTORY': true,           'MENTION_EVERYONE': false,
                      'EXTERNAL_EMOJIS': true,                'CONNECT': true,
                      'SPEAK': true
                    });
                    chan3.overwritePermissions(message.guild.roles.find('name', 'Owner'), {
                        'CREATE_INSTANT_INVITE' : true,        'ADD_REACTIONS': true,
                        'READ_MESSAGES': true,                  'SEND_MESSAGES': false,
                        'SEND_TTS_MESSAGES': true,              'MANAGE_MESSAGES': true,
                        'EMBED_LINKS': true,                    'ATTACH_FILES': true,
                        'READ_MESSAGE_HISTORY': true,           'MENTION_EVERYONE': false,
                        'EXTERNAL_EMOJIS': true,                'CONNECT': true,
                        'SPEAK': true
                      });
                      chan3.overwritePermissions(message.guild.roles.find('name', 'Staff'), {
                          'CREATE_INSTANT_INVITE' : true,        'ADD_REACTIONS': true,
                          'READ_MESSAGES': true,                  'SEND_MESSAGES': false,
                          'SEND_TTS_MESSAGES': true,              'MANAGE_MESSAGES': false,
                          'EMBED_LINKS': true,                    'ATTACH_FILES': false,
                          'READ_MESSAGE_HISTORY': true,           'MENTION_EVERYONE': false,
                          'EXTERNAL_EMOJIS': true,                'CONNECT': true,
                          'SPEAK': true
                        });
                        chan3.overwritePermissions(message.guild.roles.find('name', 'Trial Moderator'), {
                            'CREATE_INSTANT_INVITE' : true,        'ADD_REACTIONS': true,
                            'READ_MESSAGES': true,                  'SEND_MESSAGES': false,
                            'SEND_TTS_MESSAGES': true,              'MANAGE_MESSAGES': false,
                            'EMBED_LINKS': true,                    'ATTACH_FILES': false,
                            'READ_MESSAGE_HISTORY': true,           'MENTION_EVERYONE': false,
                            'EXTERNAL_EMOJIS': true,                'CONNECT': true,
                            'SPEAK': true
                          });
                        }).catch (e => {
                          console.log(e)
                        })
   // staff logs
   message.guild.createChannel("⛔server-logs⛔", "text").then((chan4) => {
     let category = server.channels.find(c => c.name == "MODERATORS" && c.type === "category");

     if (!category) throw new Error("Category channel does not exist");
     chan4.setParent(category.id)

     chan4.overwritePermissions(message.guild.roles.find('name', '@everyone'), { 'READ_MESSAGES': false}); // Give the channel some standard permissions.
                chan4.overwritePermissions(message.guild.roles.find('name', 'Moderators'), {
                    'CREATE_INSTANT_INVITE' : true,        'ADD_REACTIONS': true,
                    'READ_MESSAGES': true,                  'SEND_MESSAGES': false,
                    'SEND_TTS_MESSAGES': true,              'MANAGE_MESSAGES': false,
                    'EMBED_LINKS': true,                    'ATTACH_FILES': false,
                    'READ_MESSAGE_HISTORY': true,           'MENTION_EVERYONE': false,
                    'EXTERNAL_EMOJIS': true,                'CONNECT': true,
                    'SPEAK': true
                  });
                  chan4.overwritePermissions(message.guild.roles.find('name', 'Administrators'), {
                      'CREATE_INSTANT_INVITE' : true,        'ADD_REACTIONS': true,
                      'READ_MESSAGES': true,                  'SEND_MESSAGES': true,
                      'SEND_TTS_MESSAGES': true,              'MANAGE_MESSAGES': true,
                      'EMBED_LINKS': true,                    'ATTACH_FILES': true,
                      'READ_MESSAGE_HISTORY': true,           'MENTION_EVERYONE': false,
                      'EXTERNAL_EMOJIS': true,                'CONNECT': true,
                      'SPEAK': true
                    });
                    chan4.overwritePermissions(message.guild.roles.find('name', 'Owner'), {
                        'CREATE_INSTANT_INVITE' : true,        'ADD_REACTIONS': true,
                        'READ_MESSAGES': true,                  'SEND_MESSAGES': true,
                        'SEND_TTS_MESSAGES': true,              'MANAGE_MESSAGES': true,
                        'EMBED_LINKS': true,                    'ATTACH_FILES': true,
                        'READ_MESSAGE_HISTORY': true,           'MENTION_EVERYONE': false,
                        'EXTERNAL_EMOJIS': true,                'CONNECT': true,
                        'SPEAK': true
                      });
                      chan4.overwritePermissions(message.guild.roles.find('name', 'Staff'), {
                          'CREATE_INSTANT_INVITE' : true,        'ADD_REACTIONS': true,
                          'READ_MESSAGES': true,                  'SEND_MESSAGES': false,
                          'SEND_TTS_MESSAGES': true,              'MANAGE_MESSAGES': false,
                          'EMBED_LINKS': true,                    'ATTACH_FILES': false,
                          'READ_MESSAGE_HISTORY': true,           'MENTION_EVERYONE': false,
                          'EXTERNAL_EMOJIS': true,                'CONNECT': true,
                          'SPEAK': true
                        });
                        chan4.overwritePermissions(message.guild.roles.find('name', 'Trial Moderator'), {
                            'CREATE_INSTANT_INVITE' : true,        'ADD_REACTIONS': true,
                            'READ_MESSAGES': true,                  'SEND_MESSAGES': false,
                            'SEND_TTS_MESSAGES': true,              'MANAGE_MESSAGES': false,
                            'EMBED_LINKS': true,                    'ATTACH_FILES': false,
                            'READ_MESSAGE_HISTORY': true,           'MENTION_EVERYONE': false,
                            'EXTERNAL_EMOJIS': true,                'CONNECT': true,
                            'SPEAK': true
                          });
                        }).catch (e => {
                          console.log(e)
                        })
   // start of permission voice
   message.guild.createChannel("staff-voice", "voice").then((chan5) => {
     let category = server.channels.find(c => c.name == "MODERATORS" && c.type === "category");

     if (!category) throw new Error("Category channel does not exist");
     chan5.setParent(category.id)

     chan5.overwritePermissions(message.guild.roles.find('name', '@everyone'), { 'READ_MESSAGES': false}); // Give the channel some standard permissions.
                chan5.overwritePermissions(message.guild.roles.find('name', 'Moderators'), {
                    'CREATE_INSTANT_INVITE' : true,        'ADD_REACTIONS': false,
                    'READ_MESSAGES': true,                  'SEND_MESSAGES': true,
                    'SEND_TTS_MESSAGES': true,              'MANAGE_MESSAGES': false,
                    'EMBED_LINKS': true,                    'ATTACH_FILES': false,
                    'READ_MESSAGE_HISTORY': true,           'MENTION_EVERYONE': false,
                    'EXTERNAL_EMOJIS': true,                'CONNECT': true,
                    'SPEAK': true
                  });
                  chan5.overwritePermissions(message.guild.roles.find('name', 'Administrators'), {
                      'CREATE_INSTANT_INVITE' : true,        'ADD_REACTIONS': true,
                      'READ_MESSAGES': true,                  'SEND_MESSAGES': true,
                      'SEND_TTS_MESSAGES': true,              'MANAGE_MESSAGES': true,
                      'EMBED_LINKS': true,                    'ATTACH_FILES': true,
                      'READ_MESSAGE_HISTORY': true,           'MENTION_EVERYONE': false,
                      'EXTERNAL_EMOJIS': true,                'CONNECT': true,
                      'SPEAK': true
                    });
                    chan5.overwritePermissions(message.guild.roles.find('name', 'Owner'), {
                        'CREATE_INSTANT_INVITE' : true,        'ADD_REACTIONS': true,
                        'READ_MESSAGES': true,                  'SEND_MESSAGES': true,
                        'SEND_TTS_MESSAGES': true,              'MANAGE_MESSAGES': true,
                        'EMBED_LINKS': true,                    'ATTACH_FILES': true,
                        'READ_MESSAGE_HISTORY': true,           'MENTION_EVERYONE': false,
                        'EXTERNAL_EMOJIS': true,                'CONNECT': true,
                        'SPEAK': true
                      });
                      chan5.overwritePermissions(message.guild.roles.find('name', 'Staff'), {
                          'CREATE_INSTANT_INVITE' : true,        'ADD_REACTIONS': false,
                          'READ_MESSAGES': true,                  'SEND_MESSAGES': true,
                          'SEND_TTS_MESSAGES': true,              'MANAGE_MESSAGES': false,
                          'EMBED_LINKS': true,                    'ATTACH_FILES': false,
                          'READ_MESSAGE_HISTORY': true,           'MENTION_EVERYONE': false,
                          'EXTERNAL_EMOJIS': true,                'CONNECT': true,
                          'SPEAK': true
                        });
                        chan5.overwritePermissions(message.guild.roles.find('name', 'Trial Moderator'), {
                            'CREATE_INSTANT_INVITE' : true,        'ADD_REACTIONS': false,
                            'READ_MESSAGES': true,                  'SEND_MESSAGES': true,
                            'SEND_TTS_MESSAGES': true,              'MANAGE_MESSAGES': false,
                            'EMBED_LINKS': true,                    'ATTACH_FILES': false,
                            'READ_MESSAGE_HISTORY': true,           'MENTION_EVERYONE': false,
                            'EXTERNAL_EMOJIS': true,                'CONNECT': true,
                            'SPEAK': true
                          });
   }).catch (e => {
     console.log(e)
   })   // end of permission voice channel


   function emoji(name) {return bot.emojis.find(emoji => emoji.name === name)

   }

}

module.exports.config = {
    name: "setup",
    noalias: "No Aliases",
    aliases: [],
    usage: `${prefix}setup`,
    description: "Setup the server so the bot can auto mod it while your gone!",
    accessableby: "ADMINISTRATORS"
  }
