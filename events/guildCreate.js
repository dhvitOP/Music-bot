
module.exports = (client, message, guild) => {
const channel = client.channels.cache.get('804964881455120404');
const servers = client.guilds.cache.size;
const members = client.users.cache.size;
channel.send(`New Guild :tada: now we are ${servers} and other things : now our whole users of bot are: ${client.users.cache.size}`)
}