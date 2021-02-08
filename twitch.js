const discord = require('discord.js');

module.exports = {
    name: 'twitch',
    execute(message, args, discord){
        message.channel.send('https://twitch.tv/ytverzopen')
    }
}