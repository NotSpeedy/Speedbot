const Discord = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'This is a ping command to show the latency of the bot!',
    aliases: [],
    async execute(client, message, args) {

        const msg = await message.channel.send('Pinging...');

        const latency = msg.createdTimestamp - message.createdTimestamp;
        const choices = ['Is this really my ping?', 'Am i so slow? :(', 'PONG!!!! :rofl:', 'Well uhhhh', 'You know Candice?'];
        const response = choices[Math.floor(Math.random() * choices.length)];

        msg.edit(`${response} - Bot Latency: \`${latency}ms\``)
    }

}