const discord = require('discord.js');
const client = new discord.Client();
const prefix = '?';
const fs = require('fs');
require('dotenv').config();

const memberCounter = require('./counters/member-counter');

client.commands = new discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('[VZ community] is online!!');
    client.user.setActivity('?help', {
        type: 'PLAYING'
        
    }).catch(console.error);
    memberCounter(client);
    const guild = client.guilds.cache.get('806080232603385866');
    const channel = guild.channels.cache.get('807908205144834048');    
    channel.setName(`Bot Status : 🟢`);
});

client.on('guildMemberAdd', guildMember => {
    var kanaal = '806080233194651694';
    var embed = new discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Welcome')
    .setDescription(`Welcome ${guildMember} \n to our server. look at <@${kanaal}> to verify you. \n Have a good time in our discord.`);

    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === '🔥| Member');
    guildMember.guild.channels.cache.get('806080233194651690').send(embed);

    guildMember.roles.add(welcomeRole);
});

client.on('guildMemberAdd', guildMember => {
    var embed = new discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Geleaved')
    .setDescription(`${guildMember} is geleaved. \n i hope you have a good time in another discord.`);

    guildMember.guild.channels.cache.get('806080233194651690').send(embed);
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ticket'){
        client.commands.get('ticket').execute(message, args);
    }else if(command === 'close'){
        client.commands.get('close').execute(message, args);
    }else if(command === 'claim'){
        client.commands.get('claim').execute(message, args);
    }else if(command === 'uitslag'){
        client.commands.get('uitslag').execute(message, args, discord);
    }else if(command === 'say'){
        client.commands.get('say').execute(message, args, discord);
    }else if(command === 'clear'){
        client.commands.get('clear').execute(message, args, discord);
    }else if(command === 'kick'){
        client.commands.get('kick').execute(message, args, discord);
    }else if(command === 'mute'){
        client.commands.get('mute').execute(message, args, discord);
    }else if(command === 'regels'){
        client.commands.get('regels').execute(message, args, discord, client);
    }else if(command === 'status'){
        client.commands.get('status').execute(message, args, discord, client);
    }else if(command === 'soli'){
        client.commands.get('soli').execute(message, args, discord, client);
    }else if(command === 'help'){
        client.commands.get('help').execute(message, args, discord, client);
    }else if(command === 'poll'){
        client.commands.get('poll').execute(message, args, discord, client);
    }else if(command === 'staffhelp'){
        client.commands.get('staffhelp').execute(message, args, discord, client);
    }else if(command === 'servers'){
        client.commands.get('servers').execute(message, args, discord, client);
    }else if(command === 'partner'){
        client.commands.get('partner').execute(message, args, discord, client);
    }else if(command === 'reactionrole'){
        client.commands.get('reactionrole').execute(message, args, discord, client);
    }else if(command === 'reaction'){
        client.commands.get('reaction').execute(message, args, discord, client);
    }else if(command === 'twitch'){
        client.commands.get('twitch').execute(message, args, discord, client);
    }else if(command === 'youtube'){
        client.commands.get('youtube').execute(message, args, discord, client);
    }else if(command === 'play'){
        client.commands.get('play').execute(message, args, discord, client);
    }
    });

client.login(process.env.DISCORD_TOKEN);