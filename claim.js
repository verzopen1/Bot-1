const discord = require("discord.js");

module.exports = {
    name: 'claim',
    execute(message, args){
        message.delete();
        var zender = message.author.id;
        var embed = new discord.MessageEmbed()
        .setColor('#0099ff')
        .setTimestamp()
        .setTitle('Claim')
        .setFooter('©')
        .setDescription(`Hoi ik ben <@${zender}>, En ik ga u verder helpen.`);
        message.channel.send(embed);
    }
}