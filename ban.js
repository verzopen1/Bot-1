module.exports = {
    name: 'ban',
    execute(message, args, discord){
        const target = message.mentions.users.first();
        const author = message.author.tag;

        var embed = new discord.MessageEmbed()
        .setColor('#990000')
        .setTitle('Verbannen')
        .setDescription(`**${target}** Is **verbannen** van de server!!`)
        .setTimestamp()
        .setFooter(`Verbannen door || ${author} `);

        if(target){
            if(message.member.roles.cache.has('806080232700379159')){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send(embed);
        }else{
            message.reply(`:copyright: Je hebt niet de goede permissions`);
           }  
        }else{
            message.reply(':copyright: Je hebt geen member opgegeven!');
        }
    }
}