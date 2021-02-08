module.exports = {
    name: 'regels',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        message.delete();
        const channel = '806080233194651694';
        const update = message.guild.roles.cache.find(role => role.name === "✅| Rule's");
 
        const updateping = '✅';
 
        let embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Rules')
        .setDescription(" **Our Discord Server Rules** \n \n 1. All of the Discord TOS are also part of our rules. \n 2. Don't swear, even if that word doesn't mean anything for you. \n 3. Don't spamm pings; even if its for a joke. \n 4. Don't spamm \n 5. Staff is always right, but they are human and human make mistakes and we all learn from mistakes. \n 6. You can make a joke but have respect for eachother. \n 7. Don't threat someone; even if you hate him/here \n 8. DOXEN and DDOSSEN are strictly prohibited. \n \n  if you don't follow the rules, you will be punished! \n \n (Warn, mute, kick or even a ban) \n \n  If you get punished by a staff for no reasson you can create a ticket. \n \n we may adjust this at any time we wan't! \n \n Klik on the ✔ to verify that you have read the rules and agree.");
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(updateping);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === updateping) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(update);
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
            } else {
                return;
            }
 
        });
    }
 
}   