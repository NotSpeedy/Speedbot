const discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'meme',
    description: 'meme',
    aliases: [],
    execute(client, message, args, Discord){

        fetch('https://www.reddit.com/r/bonehurtingjuice/random/.json').then(resp => resp.json()).then(respFormatted => {

        var permaLink = respFormatted[0].data.children[0].data.permaLink;
        var memeUrl = `https://reddit.com${permaLink}`;
        var memeFoto = respFormatted[0].data.children[0].data.url;
        var memeTitle = respFormatted[0].data.children[0].data.title;

        var embed = new discord.MessageEmbed()
        .setTitle(`${memeTitle}`)
        .setURL(`${memeUrl}`)
        .setImage(`${memeFoto}`)
        .setColor('#a834eb');

        message.channel.send(embed);

        }).catch('error', (err) => {
            console.log(err.message);
        })
    }
}