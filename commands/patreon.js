module.exports = {
    name: 'patreon',
    description: 'Gives the link of the Patreon',
    aliases: [],
    execute(client, message, args, Discord){
        message.channel.send('Thanks for wanting to support my creator! https://www.patreon.com/Speedbot');
    }
}