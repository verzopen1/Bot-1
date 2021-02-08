module.exports = {
    name: 'help',
    execute(message, args, discord){
        var member = message.author.tag;
        
        const embed = new discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Help menu!')
        .setDescription('**?partner :** Om de partner soli te zien. \n **?servers :** Om al onze servers of vrienden te tonen. \n **?help :** Voor het help menu. \n **?soli :** Voor de soli regels \n **?ticket :** Om een ticket te maken. \n **?poll :** om een poll te maken! \n **?twitch :** Voor mijn twitch kanaal.')
        .setFooter(`${member}   || Help menu. `)

       return message.channel.send(embed);
    }
}