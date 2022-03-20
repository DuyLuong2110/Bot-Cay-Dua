const {Util, MessageEmbed } = require('discord.js');
const {parse} = require('twemoji-parser');

module.exports = {
    name: 'emoji',
    category: 'fun',
    aliases:['emo','emoji'],
    run: (client ,  message ,  args) => {
        const emoji = args[0];
        if (!emoji) return message.channel.send("Nhập emoji gì đó bạn ơi!");

        let custom = Util.parseEmoji(emoji);
        const embed = new MessageEmbed()
        .setTitle('Phien ban to cua emoji: ${emoji}')
        .setColor("RANDOM");

        if (custom.id) {
            let link = `https://cdn.discordapp.com/emojis/${custom.id}.${custom.animated ? "gif" : "png"}`;
            embed.setImage(link)
                .setFooter(`Emoji ID: ${custom.id}`);
            return message.channel.send({embeds: [embed]});
        } else {
            let parsed = parse(emoji, { assetType: 'png' });
            if (!parsed[0]) return message.channel.send('Emoji Không hợp lệ !');
            embed.setImage(parsed[0 ].url);
            return message.channel.send({embeds: [embed]});
        }

    }
}