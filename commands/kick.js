module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    aliases: [],
    execute(client, message, args, Discord){
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply('Insufficient permissions');
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send("User has been kicked");
        }else{
            message.channel.send(`You coudn't kick that member!`);
        }
    }
}