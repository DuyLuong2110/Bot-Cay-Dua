const { count } = require('console');
const { Util, MessageEmbed } = require('discord.js');
const fs = require('fs'); //Dùng thư viện json
const { parse } = require('path');
module.exports = {
  name: 'update',
  category: 'fun',
  aliases: ['up', 'update'],
  run: (client, message, args) => {
    //Setup một cái embed chứa report
    const update = new MessageEmbed()
      .setColor('#0099ff')  
      .setTitle('Update')
      .setDescription('Chủ vườn dừa thông báo đã cập nhật')
      .addFields(
        {
          name: 'Thông báo update',
          value: 'Đã Fix tất cả các lỗi , bổ sung các lệnh mới cho Voice, Game, Image '
        },
        // { name: '\u200B', value: '\u200B' },
        {
          name: 'Update mới và hướng dẫn đã có trong Helpinfo',
          value: 'Sử dụng lệnh ,hpin hoặc ,helpinfo để xem hướng dẫn các lệnh mới và lệnh đã FIX'
        },
        {
          name: 'Kiểm tra cập nhật',
          value: 'Sử dụng lệnh ,up hoặc ,update để kiểm tra phiên bản của bot nếu bot đang sài phiên bản cũ sẽ tự động cập nhật'
        },
        {
          name: 'Thông báo phiên bản hiện đang sử dụng',
          value: 'Cây dừa đang được sử dụng ở phiên bản mới nhất'
        },
      )
      .setTimestamp()
    //Gửi embed cho sever fix loi , auto cap nhat 
    message.channel.send({ embeds: [update] });
    message.channel.send('Đã được tự động update lên phiên bản mới nhất V16.')

    fs.readFile('thongke.json', function (err, content) {
      if (err) throw err;
      var parseJson = JSON.parse(content);
      let listrecords = parseJson.records
      let guildId = message.guild.id
      if (listrecords.length == 0) {
        listrecords.push({
          guild_id: guildId,
          count: 1,
        })
      }
      else {
        let khongco = true
        listrecords.forEach(element => {
          if (guildId === element.guild_id) {
            khongco = false
            element.count += 1
          }
        });
        if (khongco == true) {
          listrecords.push({
            guild_id: guildId,
            count: 1,
          })
        }
      }
      fs.writeFile('thongke.json', JSON.stringify(parseJson), function (err) {
        if (err) throw err;
      })
      console.log(parseJson);
    })

  }
}
