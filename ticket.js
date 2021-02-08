const discord = require("discord.js");

module.exports = {
    name: 'ticket',
    execute(message, args){
            message.delete({timeout: 2000});
            var createdChannel = createdChannel;
            var zender = message.author.id;
            var embed = new discord.MessageEmbed()
            .setColor('#0066dd')
            .setTitle('Ticket')
            .setDescription(`<@${zender}> your ticket has been created`);
    
            message.channel.send(embed).then (msg => msg.delete({ timeout: 5000 }));
    
            message.guild.channels.create("Ticket-van-" + `${message.author.tag}`).then((createdChannel) => {
                createdChannel.updateOverwrite(message.guild.roles.everyone, {VIEW_CHANNEL: false});
                createdChannel.updateOverwrite(message.author, {VIEW_CHANNEL: true});
    
                var tick = new discord.MessageEmbed()
                .setColor('#0055bb')
                .setTitle('Ticket')
                .setDescription(`Hello <@${zender}> \n we will help you as soon as possible \n Type your question in advance.`) 
                createdChannel.send('@here');
                createdChannel.send(tick);
            });
    }
}