module.exports = {
    name: 'nuke',
    description: 'Nukes the channel',
    aliases: ['nook '],
    async execute(client, message, args, Discord){
        
        //checking perms = 
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('Insufficient permissions');
        if (!message.guild.me.hasPermission('MANAGE_CHANNLES')) return message.channel.send('I do not have the permission manage channels... Please give me these permissions in order to let the nuke command work!');

        //Variables
        let reason = args.join(' ');
        const nukeChannel = message.channel;

        //input checking
        if (!reason) reason = 'No reason given.';

        //executing
        await nukeChannel.clone().catch(err => console.log(err));
        await nukeChannel.delete(reason).catch(err => console.log(err));
    }
}