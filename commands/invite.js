exports.run = async(client, message) => {
    message.channel.send({
        embed: {
            title: 'invite link',
            description: `
            invite , "[Click Here](https://discord.com/oauth2/authorize?client_id=804993556749353013&permissions=93185&scope=bot)"
            support server , "[Click Here](https://discord.gg/HBCc8BT82z)"
            `,
            color: 'GREEN'
        }
    })
}
