module.exports = {
    name: 'clear',
    async execute(message, args){
        if(message.member.roles.cache.has('806080232700379159')){
        if(!args[0]) return message.reply(":copyright: Je moet een getal opgeven!");
        if(isNaN(args[0])) return message.reply(':copyright: het moet een cijfer zijn!');
        
        if(args[0] > 100) return message.reply(':copyright: Het getal moet onder de 100 zijn!!');
        if(args[0] < 1) return message.reply(':copyright: Ik kan geen 0 berichten verwijderen!!');

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
    }else{
        message.reply(':copyright: Je hebt niet de goede perms!');
        }
    }
}