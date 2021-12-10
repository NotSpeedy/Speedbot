const Discord = require('discord.js');
module.exports = {
    name: 'say',
    description: 'says a message.',
    aliases: [],
    async execute(client, message, args, Discord) {
        const messageToSay = args.join(' ');
        const sayEmbed = new Discord.MessageEmbed()
        .setDescription(`${messageToSay}`)
        .setFooter(message.author.tag ,message.author.displayAvatarURL())
        .setColor('#a834eb')

        try {
            await message.channel.send(sayEmbed);
        } catch (err) {
            console.log(err);
            message.channel.send('There is something going wrong...')
        }
    }
}
   
        