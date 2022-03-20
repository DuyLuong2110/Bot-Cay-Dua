const { Util, MessageEmbed } = require('discord.js');
const fs = require('fs'); //Dùng thư viện json

module.exports = {
  name: 'report',
  category: 'fun',
  aliases: ['r'],
  run: (client, message, args) => {
    //Setup một cái embed chứa report
    const exampleEmbed = new MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Report')
      .setDescription('Người dùng gửi báo lỗi')
      .addFields(
        { name: 'Sever', value: message.guild.name, inline: true },
        { name: 'Sever ID', value: message.guild.id, inline: true },
        { name: 'Người Dùng', value: message.author.username, inline: true },
        { name: 'ID Người Dùng', value: message.author.id, inline: true },
        { name: 'ID channel', value: message.channel.id, inline: true },
        { name: 'Nội Dung', value: args.join(' ') },
      )
      .setTimestamp()
    //Gửi embed cho Duy
    duy = client.users.cache.get('591891859152830465').send({ embeds: [exampleEmbed] });
    //Thông báo
    if (message.deletable) message.delete()
    message.channel.send('Đã gửi lỗi cho chủ vườn dừa.')

    fs.readFile('loi.json', function (err, content) {
      if (err) throw err;
      var parseJson = JSON.parse(content);
      let listloi = parseJson.report
      let guildId = message.guild.id
      if (listloi.length == 0) {
        listloi.push({
          guild_id: guildId,
          count: 1,
        })
      }
      else {
        let khongco = true
        listloi.forEach(element => {
          if (guildId === element.guild_id) {
            khongco = false
            element.count += 1
          }
        });
        if (khongco == true) {
          listloi.push({
            guild_id: guildId,
            count: 1,
          })
        }
      }
      fs.writeFile('loi.json', JSON.stringify(parseJson), function (err) {
        if (err) throw err;
      })
      console.log(parseJson);
    })

  }



  //  lệnh update
  //  if message.author.id == id của m:
  //Mở json
  //Lấy danh sách channel
  // channels = dispatchEvent;
  //if channels.isEmpty:
  //    message.channel.send('Hong co channel de gui het')
  //for c in channels:
  //  let guild = get c['guild']
  //let channel = get(guild.channels, id= c['channel'])  
  //channel.send('')


  //Cấu trúc file json
  //Gồm 1 danh sách  
  // [{"guild":21753123731,
  //"channel":51237683123},
  //{"guild":21753123731,
  //"channel":51237683123},
  //{"guild":21753123731,
  //"channel":51237683123}]


  //trong lệnh link
  //Lay thong tin channel dang ky thong bao
  //guild_id = message.guild.id
  //channel_id = message.channel.id
  //Mở file json, luu thong tin vao file
  //Lưu vào file json
  //Gui thong bao da dang ky
  //

}