module.exports = {
   
    name: 'lock',
    description: 'Locks down a channel',
    aliases: [],
    async execute(client, message, args, Discord) {
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply('Insufficient permissions');

        await message.channel.overwritePermissions([

            {
                id: message.guild.roles.cache.find(r => r.name == '@everyone').id,
                deny: ['SEND_MESSAGES']
            }

        ]);

        message.channel.send('Channel is in lockdown!')

    }
}