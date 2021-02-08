module.exports = {
    name: 'mute',
    execute(message, args, discord){
        if(message.member.roles.cache.has('806080232700379159')){
        const target = message.mentions.users.first();
        const zender = message.author.id;
        const zenderFooter = message.author.tag;
        var embed = new discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Gemute')
        .setDescription(`${target} is gemute door <@${zender}>`)
        .setFooter(`${zenderFooter} :copyright:`)
        .setTimestamp();

        if(target) {
            const target = message.mentions.users.first();
            let mainRole = message.guild.roles.cache.find(role => role.name === '🔥| Member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

            let memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(embed);
        }else{
            message.channel.send(':copyright: Ik kan dat lid niet vinden.');
        }
    }else{
        message.reply(':copyright: Je hebt niet de goede perms.');
        }
    }
}