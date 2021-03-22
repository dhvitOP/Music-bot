const Discord = require('discord.js');
exports.run = async(client, message) => {

const embed = new Discord.MessageEmbed()
.addField(`Bot Name - Experience+`, `Bot Owners - <@694960268698189874> and <@698139730730024981>\n Bot Stats :\n Bot Guilds - ${client.guilds.cache.size}\n Bot total channels - ${client.channels.cache.size}\n Bot Created on - 6th Feb 2021\n Bot Created by - JavaScript And Your :heart:\n Hosting on - [repl.it](https://replit.com)\nComputer Stats :\n RAM - 47.89mb\n Memory - 89.04mb\n Cpu - 85.05%\n [__**Invite bot**__](https://discord.com/oauth2/authorize?client_id=804993556749353013&permissions=93185&scope=bot)\n [__**Support Server**__](https://discord.gg/HBCc8BT82z)`)
message.channel.send(embed);

}