const discord = require("discord.js");

module.exports = {
    name: 'soli',
    execute(message, args){
        var embed1 = new discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle('Solicitatie')
        .setDescription('**Wat is uw naam? \n \n Wat is uw leeftijd? \n \n geef een paar hobbys/interesses op! \n \n Wat kunnen wij van u verwachten? \n \n Waarom ons? \n \n Pluspunten \n \n Minpunten \n \n Extra? \n \n Eventueel ervaring \n \n wat zou je veranderen**');
        
        var embed = new discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle('Solicitation')
        .setDescription('**What is your name? \n \n What is your age? \n \n Please enter some hobbies  terests! \n \n What can we expect from you? \n \n Why us? \n \n Advantages \n \n Minuses \n \n Extra? \n \n  Possible experience \n \n what would you change **');
        
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
        if(args[0] === 'en') return message.channel.send(embed);
        if(args[0] === 'nl') return message.channel.send(embed1);

        
        if(!args[0] === 'en') return message.channel.send('**Het moet `en` of `nl` zijn**');
        if(!args[0] === 'nl') return message.channel.send('**Het moet `en` of `nl` zijn**');
        if(!args[0]) return message.channel.send('Je moet een taal aangeven.');
    }
}