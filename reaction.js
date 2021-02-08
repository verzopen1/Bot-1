module.exports = {
    name: 'reaction',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        message.delete();
        const channel = '806253010921324594';
        const update = message.guild.roles.cache.find(role => role.name === "Nederlands");
        const give = message.guild.roles.cache.find(role => role.name === "English");
 
        const updateping = '🚩';
        const giveaway = '🏴';
 
        let embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('choos an emoji')
        .setDescription(`${updateping} for ${update} \n ${giveaway} for ${give}`);

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(updateping);
        messageEmbed.react(giveaway);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === updateping) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(update);
                }
                if (reaction.emoji.name === giveaway) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(give);
                }
            } else {
                return;
            }
 
        });
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === updateping) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(update);
                }
                if (reaction.emoji.name === giveaway) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(give);
                }
            } else {
                return;
            }
 
        });
    }
 
}   