const { Util, MessageEmbed } = require('discord.js');
module.exports = {
    name: 'VoiceList',
    category: 'Voice',
    aliases: ['listvoice'],
    run: (client, message, args) => {
        const ListVoice = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Duy lương')
            .setURL('https://www.facebook.com/ken.luong.3132021')
            .setAuthor('Hướng Dẫn', 'https://scontent.fsgn5-1.fna.fbcdn.net/v/t1.6435-9/159384462_2910463732518948_1787921128032272587_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=fZKhovUyuqEAX9H27dX&_nc_ht=scontent.fsgn5-1.fna&oh=94aacf1b44d26f65d11a382527e07d1b&oe=61B60283', 'https://www.facebook.com/ken.luong.3132021')
            .setDescription('Liên hệ Chủ vườn dừa qua lệnh ,r hoặc ,report')
            .setThumbnail('https://scontent.fsgn5-1.fna.fbcdn.net/v/t1.6435-9/159384462_2910463732518948_1787921128032272587_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=fZKhovUyuqEAX9H27dX&_nc_ht=scontent.fsgn5-1.fna&oh=94aacf1b44d26f65d11a382527e07d1b&oe=61B60283')
            .addFields(
                {
                    name: 'Các lệnh Voice',
                    value: '`Thêm dấu , đằng trước để sài lệnh nhé`|\n`hd`|`sd`|`lph`|`vcl`|`cdc`|`congiai`|`damn`|`dtt`|`dmm`|`dt`|`đcc`|`ddtc`|`dvl`|`at`|`acadb`|`holyshit`|`ktdd`|`nghien`|`oh`|`tml`|`smile`|`vtq`|`xl`|`sqsq`|`luleo`|`ydcg`|`alo`|`really`|`iachay`|`ctt`|`ckt`|`hutthuoc`|`hpbd`|`muasa`|`emdua`'
                },

                {
                    name: 'Kiểm tra cập nhật',
                    value: 'Sử dụng lệnh ,up hoặc ,update để kiểm tra phiên bản của bot nếu bot đang sài phiên bản cũ sẽ tự động cập nhật'
                },
                {
                    name: 'Thông báo phiên bản hiện đang sử dụng',
                    value: 'Thầy Bé đang được sử dụng ở phiên bản v5.0'
                },
                {
                    name: 'Khi Xãy ra lỗi bot Hãy dùng các lệnh bên dưới',
                    value: 'Dùng lệnh ,r hoặc ,report để gữi lỗi đến Dev , ghi rõ lỗi và lệnh bị lỗi, Xin lỗi vì sự bất tiện trên!'
                },
            )
            //.addField('Inline field title', 'Some value here', true)
            .setTimestamp()
            .setFooter('Các thắc mắc cứ liên hệ với Dev', 'https://scontent.fsgn5-1.fna.fbcdn.net/v/t1.6435-9/159384462_2910463732518948_1787921128032272587_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=eS8QuykA2PgAX-JHgVd&tn=cLfRP71urOas43Ce&_nc_ht=scontent.fsgn5-1.fna&oh=157f783baf9fb68900c4620cc58a02ef&oe=61AA2503')
            .setURL('https://www.facebook.com/ken.luong.3132021');
        message.channel.send({ embeds: [ListVoice] });
        message.channel.send('Dùng các lệnh voice ở trên để bot nói')
    }
}