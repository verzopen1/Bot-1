var discord = require('discord.js')
module.exports = {
    name: 'say',
    async execute(message, args){
        if(message.member.roles.cache.has('806080232700379159')){
        const author = message.author.id;
        const embed = new discord.MessageEmbed()

        if(!args[0]){
            message.channel.send('Je hebt geen bericht opgegeven');
            return;
        }
        let split = args.slice(0).join(" "); 
        message.delete()

        await message.channel.send(split)
        }else{
            message.channel.send('**Je hebt niet de goede perms!!**');
        }
    }
}