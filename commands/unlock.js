module.exports = {
   
    name: 'unlock',
    description: 'Unlocks a locked channel',
    aliases: [],
    async execute(client, message, args, Discord) {
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply('Insufficient permissions');

        await message.channel.overwritePermissions([

            {
                id: message.guild.roles.cache.find(r => r.name == '@everyone').id,
                allow: ['SEND_MESSAGES']
            }

        ]);

        message.channel.send('Channel has been unlocked!')

    }
}