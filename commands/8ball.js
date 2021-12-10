const Discord = require('discord.js');

module.exports = {
    name: '8ball',
    description: '8ball command',
    aliases: ['magicball'],
    async execute(client, message, args, Discord) {

        if (!args[0]) return message.reply('Please ask a question');
        let replies = ['Yes.', 'Outlook seems good.', 'yus', 'of course.', 'definitely', 'no', 'Thats top secret...', 'Can not tell you right now.', 'Outlook doesnt seem that good...', 'nah bro', 'Dude that question is stupid, ask something else', 'I think so.', 'I dont know', 'Never.', 'Maybe!', 'sadly, yea.', 'Sadly not', 'not for today c:'];

        let result = Math.floor((Math.random() * replies.length));
        let question = args.slice().join(' ');

        let ballembed = new Discord.MessageEmbed()
            .setAuthor(`🎱 ${message.author.username}`)
            .setColor('#a834eb')
            .addField('Question:', question)
            .addField('Answer', replies[result])

        message.channel.send(ballembed)
    }
}