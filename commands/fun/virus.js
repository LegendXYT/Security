const discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const Player = new discord.Client();
const prefix = botconfig.prefix;
const work = botconfig.work;
var used = false;


module.exports.run = async (bot, message, args) => {

  if (message.author.id != "513571036688547871") {
    if(work != "true") return message.channel.send(`The bot is under maintenance do ` + "`" + `${prefix}support` + "`" + ` for more information`)
  }
  if(used) return message.channel.send(":timer: You need to wait 20 seconds! ");
  else{
    let user;
    if(message.mentions.members.first()) {
      user = message.mentions.members.first();
    }
    const member = message.guild.member(user);
    let virusname = args.join(' ');
      if (virusname < 1) {
        return message.channel.send('Please tag a user to set a virus on!')
      }
      if (!user){
      message.channel.send({
        embed: new discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)
      }).then(msg => {
      setTimeout(function () {
        msg.edit({
          embed: new discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓ ] - 1%').setColor(0xFF0000)
        })
      }, 1000)
      setTimeout(function () {
        msg.edit({
          embed: new discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓ ] / 2%').setColor(0xFF0000)
        })
      }, 2000)
      setTimeout(function () {
        msg.edit({
          embed: new discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓ ] - 2%').setColor(0xFF0000)
        })
      }, 3000)
      setTimeout(function () {
        msg.edit({
          embed: new discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓ ] \ 2%').setColor(0xFF0000)
        })
      }, 4000)
      setTimeout(function () {
        msg.edit({
          embed: new discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓ ] - 28%').setColor(0xFF0000)
        })
      }, 5000)
      setTimeout(function () {
        msg.edit({
          embed: new discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓ ] / 28%').setColor(0xFF0000)
        })
      }, 6000)


      setTimeout(function () {
        msg.edit({
          embed: new discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] - 78%').setColor(0xFF0000)
        })
      }, 7000)
      setTimeout(function () {
        msg.edit({
          embed: new discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] \ 78%').setColor(0xFF0000)
        })
      }, 8000)
      setTimeout(function () {
        msg.edit({
          embed: new discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] - 78%').setColor(0xFF0000)
        })
      }, 9000)

      setTimeout(function () {
        msg.edit({
          embed: new discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] / 96%').setColor(0xFF0000)
        })
      }, 10000)
      setTimeout(function () {
        msg.edit({
          embed: new discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] - 96%').setColor(0xFF0000)
        })
      }, 11000)
      setTimeout(function () {
        msg.edit({
          embed: new discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] \ 96%').setColor(0xFF0000)
        })
      }, 12000)
      setTimeout(function () {
        msg.edit({
          embed: new discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] - 96%').setColor(0xFF0000)
        })
      }, 13000)
      setTimeout(function () {
        msg.edit({
          embed: new discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] / 96%').setColor(0xFF0000)
        })
      }, 14000)

      setTimeout(function () {
        msg.edit({
          embed: new discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] - 99%').setColor(0xFF0000)
        })
      }, 15000)
      setTimeout(function () {
        msg.edit({
          embed: new discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 96%').setColor(0xFF0000)
        })
      }, 16000)


      setTimeout(function () {
        msg.edit({
          embed: new discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] - 100%').setColor(0xFF0000)
        })
      }, 17000)
      setTimeout(function () {
        msg.edit({
          embed: new discord.RichEmbed().setTitle('[' + virusname + ']: Stealing Token...').setColor(0xFF0000)
        })
      }, 19000)
      setTimeout(function () {
        msg.edit({
          embed: new discord.RichEmbed().setTitle('[' + virusname + ']: Uploading Token to sql://localhost:8080/encrypted_' + virusname + ".key").setColor(0xFF0000)
        })
      }, 22000)
      setTimeout(function () {
        msg.edit({
          embed: new discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 5...').setColor(0xFF0000)
        })
      }, 25000)
      setTimeout(function () {
        msg.edit({
          embed: new discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 4...').setColor(0xFF0000)
        })
      }, 26000)
      setTimeout(function () {
        msg.edit({
          embed: new discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 3...').setColor(0xFF0000)
        })
      }, 27000)
      setTimeout(function () {
        msg.edit({
          embed: new discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 2...').setColor(0xFF0000)
        })
      }, 28000)
      setTimeout(function () {
        msg.edit({
          embed: new discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 1...').setColor(0xFF0000)
        })
      }, 29000)
      setTimeout(function () {
        msg.edit({
          embed: new discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 0...').setColor(0xFF0000)
        })
      }, 30000)
      setTimeout(function () {
        msg.edit({
          embed: new discord.RichEmbed().setTitle(':boom:' + 'Virus Overload :boom:').setColor(0xFF0000)
        })
      }, 31000)
    })
      }
      if(user){
        message.channel.send({
          embed: new discord.RichEmbed().setDescription(`Loading ${user} Discord Virus...`).setColor(0xFF0000)
        }).then(msg => {
        setTimeout(function () {
          msg.edit({
            embed: new discord.RichEmbed().setDescription(`Loading ${user} A Discord Virus [▓ ] - 1%`).setColor(0xFF0000)
          })
        }, 1000)
        setTimeout(function () {
          msg.edit({
            embed: new discord.RichEmbed().setDescription(`Loading ${user} A Discord Virus [▓ ] \ 2%`).setColor(0xFF0000)
          })
        }, 2000)
        setTimeout(function () {
          msg.edit({
            embed: new discord.RichEmbed().setDescription(`Loading ${user} A Discord Virus [▓▓▓▓▓ ] / 11%`).setColor(0xFF0000)
          })
        }, 3000)
        setTimeout(function () {
          msg.edit({
            embed: new discord.RichEmbed().setDescription(`Loading ${user} A Discord Virus [▓▓▓▓▓▓▓▓ ] + 24%`).setColor(0xFF0000)
          })
        }, 4000)
        setTimeout(function () {
          msg.edit({
            embed: new discord.RichEmbed().setDescription(`Loading ${user} A Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓ ] - 28%`).setColor(0xFF0000)
          })
        }, 5000)
        setTimeout(function () {
          msg.edit({
            embed: new discord.RichEmbed().setDescription(`Loading ${user} A Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] \ 50%`).setColor(0xFF0000)
          })
        }, 6000)


        setTimeout(function () {
          msg.edit({
            embed: new discord.RichEmbed().setDescription(`Loading ${user} A Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] / 65%`).setColor(0xFF0000)
          })
        }, 7000)
        setTimeout(function () {
          msg.edit({
            embed: new discord.RichEmbed().setDescription(`Loading ${user} A Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] \ 78%`).setColor(0xFF0000)
          })
        }, 8000)
        setTimeout(function () {
          msg.edit({
            embed: new discord.RichEmbed().setDescription(`Loading ${user} A Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] - 85%`).setColor(0xFF0000)
          })
        }, 9000)

        setTimeout(function () {
          msg.edit({
            embed: new discord.RichEmbed().setDescription(`Loading ${user} A Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] + 94%`).setColor(0xFF0000)
          })
        }, 10000)
        setTimeout(function () {
          msg.edit({
            embed: new discord.RichEmbed().setDescription(`Loading ${user} A Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] / 95%`).setColor(0xFF0000)
          })
        }, 11000)
        setTimeout(function () {
          msg.edit({
            embed: new discord.RichEmbed().setDescription(`Loading ${user} A Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] \ 96%`).setColor(0xFF0000)
          })
        }, 12000)
        setTimeout(function () {
          msg.edit({
            embed: new discord.RichEmbed().setDescription(`Loading ${user} A Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] - 97%`).setColor(0xFF0000)
          })
        }, 13000)
        setTimeout(function () {
          msg.edit({
            embed: new discord.RichEmbed().setDescription(`Loading ${user} A Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] / 98%`).setColor(0xFF0000)
          })
        }, 14000)

        setTimeout(function () {
          msg.edit({
            embed: new discord.RichEmbed().setDescription(`Loading ${user} A Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] - 99%`).setColor(0xFF0000)
          })
        }, 15000)
        setTimeout(function () {
          msg.edit({
            embed: new discord.RichEmbed().setDescription(`Loading ${user} A Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 80%`).setColor(0xFF0000)
          })
        }, 16000)


        setTimeout(function () {
          msg.edit({
            embed: new discord.RichEmbed().setDescription(`Loading ${user} A Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] - 100%`).setColor(0xFF0000)
          })
        }, 17000)
        setTimeout(function () {
          msg.edit({
            embed: new discord.RichEmbed().setDescription(`Stealing Token From ${user}...`).setColor(0xFF0000)
          })
        }, 19000)
        setTimeout(function () {
          msg.edit({
            embed: new discord.RichEmbed().setDescription(`Uploading Token to sql for ${user}: https://localhost:8080/encrypted_${virusname}.key`).setColor(0xFF0000)
          })
        }, 22000)
        setTimeout(function () {
          msg.edit({
            embed: new discord.RichEmbed().setDescription(`Virus Uploaded For ${user}! Initiating explosion in 5...`).setColor(0xFF0000)
          })
        }, 25000)
        setTimeout(function () {
          msg.edit({
            embed: new discord.RichEmbed().setDescription(`Virus Uploaded For ${user}! Initiating explosion in 4...`).setColor(0xFF0000)
          })
        }, 26000)
        setTimeout(function () {
          msg.edit({
            embed: new discord.RichEmbed().setDescription(`Virus Uploaded For ${user}! Initiating explosion in 3...`).setColor(0xFF0000)
          })
        }, 27000)
        setTimeout(function () {
          msg.edit({
            embed: new discord.RichEmbed().setDescription(`Virus Uploaded For ${user}! Initiating explosion in 2...`).setColor(0xFF0000)
          })
        }, 28000)
        setTimeout(function () {
          msg.edit({
            embed: new discord.RichEmbed().setDescription(`Virus Uploaded For ${user}! Uploaded! Initiating explosion in 1...`).setColor(0xFF0000)
          })
        }, 29000)
        setTimeout(function () {
          msg.edit({
            embed: new discord.RichEmbed().setDescription(`Virus Uploaded For ${user}! Initiating explosion in 0...`).setColor(0xFF0000)
          })
        }, 30000)
        setTimeout(function () {
          msg.edit({
            embed: new discord.RichEmbed().setTitle(':boom:' + 'Virus Overload :boom:').setColor(0xFF0000),
          })
        }, 31000)
        setTimeout(function () {
          user.send(`${user}` + "\n" + `You haved received a virus on **${message.guild}** https://tenor.com/4lyU.gif`);
        }, 45000)
      })
      }
      used = true;
      setTimeout(() => {
        used = false;
      }, 1000 * 20);
  }

}
  module.exports.config = {
      name: "virus",
      noalias: "No Aliases",
      aliases: [],
      usage: `${prefix}virus`,
      description: "set a virus (not a real virus)!",
      accessableby: "everyone"
    }
