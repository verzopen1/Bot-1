module.exports = {
    name: 'staffhelp',
    execute(message, args, discord){
        var member = message.author.tag;
        
        const embed = new discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Staff Help menu!')
        .setDescription('**?Ban :** Om iemand te bannen van de server. \n **?kick :** Om iemand te kicken van de server \n **?clear : **Om een aantal berichten weg te halen. \n **?uitslag :** Voor de uitslag van de soli. \n **?close :** Om een ticket te sluiten. \n **?claim :** Om een ticket te claimen.')
        .setFooter(`${member}   || Staff help menu. `)

       return message.channel.send(embed);
    }
}