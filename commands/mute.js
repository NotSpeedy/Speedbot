const ms = require('ms');
module.exports = {
    name: 'mute',
    description: "This mutes a member",
    aliases: [],
    execute(client, message, args, Discord) {
        const target = message.mentions.users.first();
        if (target) {
 
            let mainRole = message.guild.roles.cache.find(role => role.name === 'member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'mute');
 
            let memberTarget = message.guild.members.cache.get(target.id);
 
            if (!args[1]) {
                memberTarget.roles.remove(mainRole); 
                memberTarget.roles.add(muteRole);
                message.channel.send(`<@${memberTarget.user.id}> has been muted`);
                return
            }
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`);
 
            setTimeout(function () {
                memberTarget.roles.remove(muteRole);
                memberTarget.roles.add(mainRole);
            }, ms(args[1]));
        } else {
            message.channel.send('Cant find that member!');
        }
    }
}