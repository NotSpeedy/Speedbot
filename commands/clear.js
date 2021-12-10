module.exports = {
    name: 'clear',
    description: 'clear messages',
    aliases: [],
    async execute(client, message, args, Discord) {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('Insufficient permissions');
        if(!args[0]) return message.reply('Hey! You need to specify the amount of messages you want to clear!');
        if(isNaN(args[0])) return message.reply('Please enter a valid number.');

        if(args[0] > 100) return message.reply('Hold up, you cannot clear so many messages!');
        if(args[0] < 1) return message.reply('You need to enter a number higher than that.')

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        })
        message.channel.send('messages has been cleared!'), message.delete()
        
    }
}