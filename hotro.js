const { MessageEmbed } = require("discord.js"); 

module.exports = {
    paginationEmbed: async function(msg, pages, emojiList = ['⏪', '⏩', "⏹"], timeout = 120000) {
              if (!msg && !msg.channel) throw new Error('Kênh không thể truy cập được');
              if (!pages) throw new Error('Các trang không được cung cấp.');
              if (emojiList.length <= 2) throw new Error('Cần ít nhất hai biểu tượng cảm xúc.');
              let page = 0;
              let actualpages = [];
              let embed = false;
              if(!msg.guild.me.permissionsIn(msg.channel).has("MANAGE_MESSAGES")) msg.channel.send("**:x: Lưu ý rằng tôi cần Quyền để xóa REACTIONS**")
              if(msg.guild.me.permissionsIn(msg.channel).has("EMBED_LINKS")){
                embed = true;
                for(const page of pages) actualpages.push(new MessageEmbed().setDescription(page.msg).setTitle(page.title))
              }else{
                for(const page of pages) actualpages.push(page.msg)
              }
              var curPage;
              if(embed)
              curPage = await msg.channel.send(actualpages[page].setFooter(`Trang  |  ${page + 1} / ${actualpages.length}`, msg.client.user.displayAvatarURL()));
              else 
              curPage = await msg.channel.send(String(actualpages[page]).substr(0, 1950) + `**Trang  |  ${page + 1} / ${actualpages.length}**`);
              for (const emoji of emojiList) await curPage.react(emoji);
              const reactionCollector = curPage.createReactionCollector(
                (reaction, user) => emojiList.includes(reaction.emoji.name) && !user.bot && user.id == msg.author.id,
                { time: timeout }
              );
              reactionCollector.on('collect', reaction => {
                reaction.users.remove(msg.author);
                switch (reaction.emoji.name) {
                  case emojiList[0]:
                    page = page > 0 ? --page : actualpages.length - 1;
                    break;
                  case emojiList[1]:
                    page = page + 1 < actualpages.length ? ++page : 0;
                    break;
                  default:
                    curPage.reactions.removeAll().catch(error => console.error('Không xóa được phản ứng: '));
                    break;
                } 
                if(embed)
                curPage.edit(actualpages[page].setFooter(`Trang  |  ${page + 1} / ${actualpages.length}`, msg.client.user.displayAvatarURL()));
                else
                curPage.edit(String(actualpages[page]).substr(0, 1950) + `**Trang  |  ${page + 1} / ${actualpages.length}**`);
              });
              reactionCollector.on('end', () => {
                if (!curPage.deleted) {
                  curPage.reactions.removeAll()
                }
              });
              return curPage;
         },
    };    