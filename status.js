const discord = require("discord.js");

module.exports = {
    name: 'status',
    execute(message, args, discord){
        if(message.member.roles.cache.has('806080232603385870')){
        message.delete();
        if(args[0] === 'on') return message.channel.send('✅');
        if(args[0] === 'off') return message.channel.send('❌');
        if(args[0] === 'load') return message.channel.send('⏱');
        if(args[0] === 'all') return message.channel.send('✅ 》Bot is online \n \n ⏱ 》Bot heeft een update, dus niet gebruiken \n \n ❌ 》Bot is offline')
        
        if(!args[0]) return message.channel.send('Je hebt geen status aan gegeven');
        }else{
            return message.channel.send('Je hebt niet de goede perms.')
        }
    }
}