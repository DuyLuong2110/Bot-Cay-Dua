/*const Discord = require('discord.js');
const DIG = require('discord-image-generation');
module.exports = {
    name: "xinh",
    description: "sends beautiful image",
    accessableby: "Members",
    aliases: ['xinh'],
    run: async (client, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]) || message.author;
        let avatar
        if (user.id === message.author.id) {
            avatar = user.displayAvatarURL({ format: 'jpg', size: 128 });
        } else { avatar = user.user.displayAvatarURL({ format: 'jpg', size: 128 }) }
        let img = await new DIG.Beautiful().getImage(avatar)
        let attach = new Discord.MessageAttachment(img, 'beautiful.png');;
        message.channel.send({embeds: [attach]})
    }
}*/
const Discord = require('discord.js')
const got = require('got')
module.exports = {
    name: "xinh",
    description: "sends Sexy Girls",
    accessableby: "Members",
    aliases: ['Xinh'],
    run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
        got('https://www.reddit.com/r/PrettyGirls/random/.json').then(response => {
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let memeUrl = `https://reddit.com${permalink}`;
            let memeImage = content[0].data.children[0].data.url;
            let memeTitle = content[0].data.children[0].data.title;
            let memeUpvotes = content[0].data.children[0].data.ups;
            let memeDownvotes = content[0].data.children[0].data.downs;
            let memeNumComments = content[0].data.children[0].data.num_comments;
            embed.setTitle(`${memeTitle}`)
            embed.setURL(`${memeUrl}`)
            embed.setImage(memeImage)
            embed.setColor('RANDOM')
            embed.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`)
            message.channel.send({embeds: [embed]})
        })
    }
}
