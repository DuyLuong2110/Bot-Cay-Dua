/*const { MessageEmbed } = require("discord.js");
const randomPuppy = require ("random-puppy");
const Discord = require ("discord.js");
module.exports = {
    name: 'meme',
    category: 'fun',
    aliases:['meme'],
    run: async (client ,  message ,  args) => {
        const subReddits = ["dankmeme", "meme", "memes"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]
        const img = await randomPuppy(random)

        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage(img)
        .setTitle(`Meme của bạn đang được hiển thị từ r/${random}`)
        .setURL(`https://reddit.com/r/${random}`)

        message.channel.send({embeds: [embed]})
    }

}*/
const Discord = require('discord.js')
const got = require('got')
module.exports = {
    name: "meme",
    description: "sends a random meme from reddit",
    accessableby: "Members",
    aliases: ['meme'],
    run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
        got('https://www.reddit.com/r/memes/random/.json').then(response => {
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
