const discord = require("discord.js");

module.exports = {
    name: 'unmute',
    execute(message, args){
        if(message.member.roles.cache.has('806080232700379159')){
        const target = message.mentions.users.first();
        const zender = message.author.id;
        const zenderFooter = message.author.tag;
        var embed = new discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle('Unmute')
        .setDescription(`${target} is geunmute door <@${zender}>`)
        .setFooter(`${zenderFooter} ©`)
        .setTimestamp();

        if(target) {
            const target = message.mentions.users.first();
            let mainRole = message.guild.roles.cache.find(role => role.name === '🔔 | Members');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.add(mainRole.id);
            memberTarget.roles.remove(muteRole.id);
            message.channel.send(embed)
        }else{
            message.channel.send('© Ik kan dat lid niet vinden.');
        }
        }else{
            message.reply('© Je hebt niet de goede perms');
        }
    }
}