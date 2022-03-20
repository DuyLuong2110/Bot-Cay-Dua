/*const client = require('../index.js');
const {MessageEmbed} = require ('discord.js');

client.on("guildCreate", (guild) => {
    let channeltoSend;
    guild.channels.cache.forEach((channel) => { 
        if(
            channel.type === "text"  &&
            !channeltoSend &&
            channel.permissionsFor(guild.me).has("SEND_MESSAGE")
        ) channeltoSend = channel;
    });
    if(!channeltoSend) return

    channeltoSend.send({embed: [new MessageEmbed() 
    .setColor("WHITE")
    .setAuthor(`Hello! Cảm ơn bạn đã mời Con Ghệ Sexy này vào ${guild.name}!`)
    .setDescription("Prefix is `.` btw!")
    .addField("Sử dụng lệnh ,help để xem tính năng và lệnh", "Liên hệ qua [facebook Dev] (https://www.facebook.com/ken.luong.3132021)!")
]});
})*/