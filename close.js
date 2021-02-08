const discord = require("discord.js");

module.exports = {
    name: 'close',
    execute(message, args){
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Je hebt niet de goede perms');
        message.channel.delete();
    }
}