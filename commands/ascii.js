const Discord = require('discord.js');
const figlet = require('figlet');

module.exports = {
    name: 'ascii',
    description: 'text art',
    aliases: [],
    execute(client, message, args){
        figlet.text(args.join(' '), {
            font: '',
        }, async(err, data) => {
            message.channel.send(`\`\`\`${data}\`\``)
        })
    }
}