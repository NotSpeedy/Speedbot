const discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'cat',
    description: 'c a t s',
    aliases: [],
    execute(client, message, args, Discord){

        fetch('https://reddit.com/r/cats/random/.json').then(resp => resp.json()).then(respFormatted => {

        var permaLink = respFormatted[0].data.children[0].data.permaLink;
        var catUrl = `https://reddit.com${permaLink}`;
        var catFoto = respFormatted[0].data.children[0].data.url;
        var catTitle = respFormatted[0].data.children[0].data.title;

        var embed = new discord.MessageEmbed()
        .setTitle(`${catTitle}`)
        .setURL(`${catUrl}`)
        .setImage(`${catFoto}`)
        .setColor('#a834eb');

        message.channel.send(embed);

        }).catch('error', (err) => {
            console.log(err.message);
        })
    }
}