/*
const { MessageEmbed, Message } = require("discord.js");
const { paginationEmbed } = require("../../hotro" );
module.exports = {
    name: "helpinfo",
    category: "fun",
    aliases: ["helpinfo"],
    cooldown: 4,
    description: "Hiển thị tất cả các lệnh phụ có sẵn cho tất cả các Lệnh",
    run: async (client, message, args) => {
      try{
       
        //SONG CMD
        let string1 = `\`\`\`fix // còn chữ fix này để im cho tôi nhé
        ,ping -- thông báo ping discord 
        \`\`\``
        //QUEUE CMD
        let string2 = `\`\`\`fix
        ,emoji -- phóng to emoji người dùng 
        \`\`\``
        let string3 = `\`\`\`fix 
        ,instagram -- hiển thị instagram bạn cần tìm 
        \`\`\``     
        let string4 = `\`\`\`fix // còn chữ fix này để im cho tôi nhé
        ,help -- hiển thị bảng lệnh và thông báo 
        \`\`\``
        
        let string5 = `\`\`\`fix
        ,report -- gữi lỗi đến cho Dev để dev xử lý 
        \`\`\``
        let string6 = `\`\`\`fix 
        ,update -- cập nhật thông tin fix lỗi từ dev và thông báo phiên bản bot hiện tại 
        \`\`\``     
         
        let pages = [
          {"title": "PING COMMANDS - ALIASES", "msg": string1},
          {"title": "EMOJI COMMANDS - ALIASES", "msg": string2},
          {"title": "INSTGRAM COMMANDS - ALIASES", "msg": string3},
          {"title": "HELP COMMANDS- ALIASES", "msg": string4},
          {"title": "REPORT COMMANDS- ALIASES", "msg": string5},
          {"title": "UPDATE COMMANDS- ALIASES", "msg": string6},
        ]
        paginationEmbed(message, pages, ['⏪', '⏩', "⏹"], 60000)

    } catch (e) {
        console.log(String(e.stack).bgRed)
        return message.channel.send(new MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`❌ Lỗi | Đã xảy ra lỗi`)
            .setDescription(`\`\`\`${e.stack}\`\`\``)
        );
    }
  }
}*/
const { Util, MessageEmbed } = require('discord.js');
module.exports = {
  name: 'helpinfo',
  category: 'fun',
  aliases: ['hifo', 'helpinfo'],
  run: (client, message, args) => {
    const helpinfo = new MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Duy lương')
      .setURL('https://www.facebook.com/ken.luong.3132021')
      .setAuthor('Hướng Dẫn', 'https://scontent.fsgn5-1.fna.fbcdn.net/v/t1.6435-9/159384462_2910463732518948_1787921128032272587_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=fZKhovUyuqEAX9H27dX&_nc_ht=scontent.fsgn5-1.fna&oh=94aacf1b44d26f65d11a382527e07d1b&oe=61B60283', 'https://www.facebook.com/ken.luong.3132021')
      .setDescription('Liên hệ Dev qua lệnh ,r hoặc ,report')
      .setThumbnail('https://scontent.fsgn5-1.fna.fbcdn.net/v/t1.6435-9/159384462_2910463732518948_1787921128032272587_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=fZKhovUyuqEAX9H27dX&_nc_ht=scontent.fsgn5-1.fna&oh=94aacf1b44d26f65d11a382527e07d1b&oe=61B60283')
      .addFields(
        {
          name: 'Fun',
          value: '`Chứa các lệnh:`|`emo`|`help`|`insta`|`pause`|`play`|`report`|`say`|`sp`|`update`'
        },
        // { name: '\u200B', value: '\u200B' },
        {
          name: 'Animal',
          value: '`Chứa các lệnh:`|`cat`|`dog`|`aqua `'
        },
        {
          name: 'nsfw',
          value: '`Chứa các lệnh:`|`Asian`|`meme`|`hotgirl`|`sexy`|`sexyasian`|`xinh`'
        },
        {
          name: 'voice',
          value: 'Án lệnh ,listvoice để xem các lệnh về voice'
        },
        {
          name: 'Game',
          value: '`Chứa các lệnh:`|`ttt`|`maytinh`'
        },
        {
          name: 'User',
          value: '`Chứa các lệnh:`|`chatbot`|`clear`|`ping`|`weather`|`avt`'
        },
        {
          name: 'Thông báo phiên bản hiện đang sử dụng',
          value: 'Cây dừa đang được sử dụng ở phiên bản mới nhất'
        },
        {
          name: 'Link mời bot',
          value: 'https://discord.com/api/oauth2/authorize?client_id=909189490264899614&permissions=8&scope=bot'
        },
      )
      //.addField('Inline field title', 'Some value here', true)
      .setTimestamp()
      .setFooter('Các thắc mắc cứ liên hệ với chủ vườn dừa', 'https://scontent.fsgn5-1.fna.fbcdn.net/v/t1.6435-9/159384462_2910463732518948_1787921128032272587_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=fZKhovUyuqEAX9H27dX&_nc_ht=scontent.fsgn5-1.fna&oh=94aacf1b44d26f65d11a382527e07d1b&oe=61B60283');

    message.channel.send({ embeds: [helpinfo] });
    message.channel.send('Đã được up lên phiên bản mới nhất.')
  }
}