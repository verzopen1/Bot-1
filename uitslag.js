const discord = require('discord.js');

module.exports = {
    name: 'uitslag',
    execute(message, args, discord){
        message.delete();
        var embed = new discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle('Uitslag')
        .setDescription(`${args[0]} Je bent aangenomen. \n Ik hoop dat u een fijne tijd heeft als staff in het staff team.`);

        var embed1 = new discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Uitslag')
        .setDescription(`${args[0]} Jammer je bent niet aangenomen. \n Ik hoop dat u daar geen problemen mee heeft`);
        
        if(!args[0]) return message.reply('Je hebt geen persoon opgegeven');
        if(!args[1]) return message.channel.send('Je hebt geen uitslag opgegeven `Type aangenomen of afgewezen`');

        if(args[1] === 'aangenomen') return message.channel.send(embed);
        if(args[1] === 'afgewezen') return message.channel.send(embed1);

        if(!args[1] === 'aangenomen', 'afgewezen') return message.channel.send('Je moet **aangenomen** of **afgwezen** typen niet iets anders.')
    }
}