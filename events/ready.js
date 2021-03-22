module.exports = (client, message) => {
    client.user.setActivity(`Music With You`, { type : "LISTENING" });
    console.log('Im alive as GOD AND ' + client.user.tag)
}