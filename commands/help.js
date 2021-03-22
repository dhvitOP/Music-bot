const Discord = require('discord.js');
exports.run = async(client, message) => {
    const embed = new Discord.MessageEmbed()
    .setTitle(`Help of Experience+ music bot`)
    .setDescription(`+help | It shows this message\n +play <name of song> | It plays a song from youtube\n +stop | for leaving bot from vc\n +lyrics | Gives the lyrics of current playing song\n +np | Shows the details of current song\n +pause | To Pause the current playing song\n +queue | Shows the name of songs which are in list of playing next\n +shuffle | It randomize the song position from queue\n +skip | Skip the current song\n +volume <volume number> | Increase the volume to given number\n +resume | Resumes the current playing song\n +invite | Gives the link to invite the bot in any server\n [**__Invite me__**](https://discord.com/oauth2/authorize?client_id=804993556749353013&permissions=93185&scope=bot)\n [__**Support Server**__](https://discord.com/oauth2/authorize?client_id=804993556749353013&permissions=93185&scope=bot)`)
message.channel.send(embed);
}
