const {Util, MessageEmbed } = require('discord.js');
const { Message } = require('discord.js');
const fs = require('fs'); //Dùng thư viện json
module.exports = {
    name: 'channel',
    category: 'fun',
    aliases:['c'],
    run: (client ,  message ,  args) => {
      fs.readFile('group.json',function(err,content){
        if(err) throw err;
          var parseJson = JSON.parse(content);
         parseJson.channels.push({
              guilid: '55544466625',
              channelid: '1616516511896',
          })
          fs.writeFile('group.json',JSON.stringify(parseJson),function(err){
              if(err) throw err;
            })
       console.log(parseJson);
      })
    }
  }
