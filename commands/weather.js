const weather = require('weather-js');

const Disocrd = require('discord.js')

module.exports = {
    name: 'weather',
    description: 'Weather',
    aliases: [],
    async execute(client, message, args, Discord) {
        weather.find({search: args.join(' '), degreeType: 'C'}, function (error, result){
            if(error) return message.channel.send(error);
            if(!args[0]) return message.channel.send('Please specify a location')

            if(result === undefined || result.length === 0) return message.channel.send('**Invalid** loaction');
            var current = result[0].current;
            var location = result[0].location;

            const weatherinfo = new Disocrd.MessageEmbed()
            .setDescription('The weather right now!')
            .setAuthor(`weather forecast for ${current.observationpoint}`)
            .setThumbnail(current.imageUrl)
            .setColor(0x111111)
            .addField('timezone', `UTC${location.timezone}`, true)
            .addField('Degree Type', 'Celsius', true)
            .addField('Temperature', `${current.temperature}`, true)
            .addField('Wind', current.winddisplay, true)
            .addField('Feels like', `${current.feelslike}`, true)
            .addField('Humidity', `${current.humidity}%, true`)

            message.channel.send(weatherinfo)
        })
    }
}