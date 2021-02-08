var discord = require('discord.js')
module.exports = {
    name: 'poll',
    async execute(message, args){
        const author = message.author.id;
        const embed = new discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Hoe maak je een poll')
        .setDescription('© Type (?poll en dan je poll) om je poll te maken.');


        if(!args[0]){
            message.channel.send(embed);
            return;
        }
        let split = args.slice(0).join(" "); 
        message.delete()

        let messageEmbed = await message.channel.send('Dit bericht is geplaatst door' + ` <@${author}>` + '\n-----------------------------------------------\n' + "📩  " + "**" + split + "**")
        messageEmbed.react('👍');
        messageEmbed.react('👎');
    }
}