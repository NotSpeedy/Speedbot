const Discord = require('discord.js');

module.exports = {
    name: 'serverinfo',
    description: 'Gives the link of the support server',
    aliases: ['sinfo', 'server'],
    execute(client, message, args){
        const { guild } = message

        const { name, region, memberCount, createdAt, rules, owner } = guild
        const icon = guild.iconURL()
        
        const embed = new Discord.MessageEmbed()
        .setTitle(`Server info for ''${name}''`)
        .setThumbnail(icon)
        .addFields({
            name: 'Region',
            value:region,

        },
        {
            name: 'Members',
            value:memberCount,

        },{
            name: 'Created at',
            value:createdAt,

        }, {
            name: 'Rules channel',
            value:rules,

        },{
            name: 'owner',
            value:owner.user.tag,

        }) 


        message.channel.send(embed)
    }
}