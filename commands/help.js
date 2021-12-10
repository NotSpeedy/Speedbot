const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'help!',
    aliases: [],
    execute(client, message, args, Discord) {
        const helpembed = new Discord.MessageEmbed()
        .setTitle("Help")
        .setFooter("Copyright © 2021 Speedbot - All rights reserved")
        .setDescription("A list of useful commands!")
        .setColor('#9403fc')
        .addFields(
            {
                name: '🌴 || General commands',
                value: '> s!help, s!ping, s!say, s!serverinfo, s!weather'
            },

            {
                name: '📢 || Staff commands',
                value: '> s!ban, s!kick, s!clear, s!lock, s!unlock, s!nuke, s!slowmode, '
            },
            
            {
                name: '🎲 || Games commands',
                value: '> s!8ball, s!calculate, s!rps, s!ascii'
            },

            {
                name: '🎵 || Music commands',
                value: '> s!play, s!stop | Under heavy development'
            },
            
            {
                name: '🖼️ || Image commands',
                value: '> s!cat, s!meme'
            }

            
        )
        
        message.channel.send(helpembed)
    }

}