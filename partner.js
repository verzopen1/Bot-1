const discord = require("discord.js");

module.exports = {
    name: 'partner',
    execute(message, args){
        var embed2 = new discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle('partner Soli')
        .setDescription('**Hoeveel Leden heeft u?** \n \n **Is uw discord mooi en netjes opgemaakt?** \n \n **Heeft u NSFW in uw discord?**');

        var embed3 = new discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle('partner Soli')
        .setDescription('**How many members do you have?** \n \n **Is your discord nice and neat?** \n \n **Do you have NSFW in uw discord?**');

        var embed4 = new discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle('partenaire Soli')
        .setDescription('**Combien de membres avez vous?** \n \n **Votre discorde est-elle bien et soigneusement présenetée?** \n \n **Avez-vous NSFW dans votre discorde?**');

        if(args[0] === 'nl') return message.channel.send(embed2);
        if(args[0] === 'en') return message.channel.send(embed3);
        if(args[0] === 'fr') return message.channel.send(embed4);

        if(!args[0]) return message.channel.send('Je moet een taal aangeven.');
    }
}