module.exports = {
    name: 'invite',
    description: 'Invites the bot',
    aliases: [],
    execute(client, message, args){
        message.channel.send('Click on this link to invite me to your server! https://bit.ly/3k6WJzK');
    }
}