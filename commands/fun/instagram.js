const axios = require('axios');
const {MessageEmbed} =  require('discord.js');
const {stripIndent} = require('common-tags');
module.exports = { 
    name: 'instagram',
    category: 'fun',
    aliases: ['insta','instagram'],
    run: async (client, message, args) => {
        if(!args[0]) return message.channel.send('Vui lòng nhập tên con ghệ!');
        const instagram_id = args.join(' ');
        const url = `https://www.instagram.com/${instagram_id}/?__a=1`
        let res;
        try
        {
        res = await axios.get(url, { headers: { cookie:'ig_did=87EA9CC9-12BE-401E-B152-D4674BA286D6; ig_nrcb=1; mid=YMegiwALAAEDKxMjbYVj_sBu598A; fbm_124024574287414=base_domain=.instagram.com; csrftoken=LOxmR2nrnIgSmUPATKmjAbeidy5ZE97g; ds_user_id=6963903033; sessionid=6963903033%3A9JRzbOBvhUg7v8%3A27; shbid="2641\0546963903033\0541662723419:01f77ad46840c20bcc6fba5eb9cb84cd3f9a4037a931e8484edd39adf18c61ec55680c7a"; shbts="1631187419\0546963903033\0541662723419:01f77a45c1a4cbb8132b830538099852a3e6d75a2cfec4c4a8d24cd6770577758a4bd3ab"; fbsr_124024574287414=ZL_JAmOQqxmRmrIT0Sk3QRcwBgZ4h7fDM3rYUiSS8w4.eyJ1c2VyX2lkIjoiMTAwMDA2NjYwNDg3MDI2IiwiY29kZSI6IkFRQlI1Y2k1VWhQSU44ZE1BazlJTDhhamdGOENmeDIweHROSjdNRElOODU1OWs3Rkd4U05CaHZSWWw5VXdmR3cwR2RkUkQyZU9Ba0ZLbGluSlk2VlIxT3lXUWowSEVBQnhLcTg2NzN0S3drWGhXbzJBSzV4b0cxc29XNTB0VU1QZUNOLVdVUTFyUXJMLXA3VWpwQWJ2X0dsbFN2cDNpMkFGSlB4d2o2RC1IQmZqbVplaHhWbEpOeHhFOVVZNEYwNFFxQjRKX3F1QndZVjlLYW5nVW9kalZTMDZmUlNJckdfaW9LT294Um05SF95cE1EUWQxT2dSVkVEM2Z6WUlONndQT19QQTgyNEtIQ3kwQ2JxNVNkSkJ0T2xQV2NPV2tvc25QOENCV040VjZpVXNGdmVNYU1RVGJBV3lmcjZCZ0FSOXRnZkVub2VDTHpIazAtbzJhcE5oRkpqRVNrRW9XQmpjOEM0aHBySHVsRDdXdyIsIm9hdXRoX3Rva2VuIjoiRUFBQnd6TGl4bmpZQkFJbUVsVG13dWFaQzFuUmdVeDRzWkJjVlYxckg0b0pSQTJPWkFQOGxwTVZ5eDZRVjNqeWV2THJCMkh5Y0FKejY3bEdYOUEyYVpDak5zakthTXVrMGR0RDA4Q1AwanVtc1ROaUJsczRTckt2cWRSbmdqN0RrRWlFYXV0SGI0QTloU1dYSW9nRFlZempZdldFbnVIakJ1WWNMVXFKd0trMjBKUVFvMkpYZnRuenpxalRBd1E4WkQiLCJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImlzc3VlZF9hdCI6MTYzMTQ0NDc4Mn0; fbsr_124024574287414=ZL_JAmOQqxmRmrIT0Sk3QRcwBgZ4h7fDM3rYUiSS8w4.eyJ1c2VyX2lkIjoiMTAwMDA2NjYwNDg3MDI2IiwiY29kZSI6IkFRQlI1Y2k1VWhQSU44ZE1BazlJTDhhamdGOENmeDIweHROSjdNRElOODU1OWs3Rkd4U05CaHZSWWw5VXdmR3cwR2RkUkQyZU9Ba0ZLbGluSlk2VlIxT3lXUWowSEVBQnhLcTg2NzN0S3drWGhXbzJBSzV4b0cxc29XNTB0VU1QZUNOLVdVUTFyUXJMLXA3VWpwQWJ2X0dsbFN2cDNpMkFGSlB4d2o2RC1IQmZqbVplaHhWbEpOeHhFOVVZNEYwNFFxQjRKX3F1QndZVjlLYW5nVW9kalZTMDZmUlNJckdfaW9LT294Um05SF95cE1EUWQxT2dSVkVEM2Z6WUlONndQT19QQTgyNEtIQ3kwQ2JxNVNkSkJ0T2xQV2NPV2tvc25QOENCV040VjZpVXNGdmVNYU1RVGJBV3lmcjZCZ0FSOXRnZkVub2VDTHpIazAtbzJhcE5oRkpqRVNrRW9XQmpjOEM0aHBySHVsRDdXdyIsIm9hdXRoX3Rva2VuIjoiRUFBQnd6TGl4bmpZQkFJbUVsVG13dWFaQzFuUmdVeDRzWkJjVlYxckg0b0pSQTJPWkFQOGxwTVZ5eDZRVjNqeWV2THJCMkh5Y0FKejY3bEdYOUEyYVpDak5zakthTXVrMGR0RDA4Q1AwanVtc1ROaUJsczRTckt2cWRSbmdqN0RrRWlFYXV0SGI0QTloU1dYSW9nRFlZempZdldFbnVIakJ1WWNMVXFKd0trMjBKUVFvMkpYZnRuenpxalRBd1E4WkQiLCJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImlzc3VlZF9hdCI6MTYzMTQ0NDc4Mn0; rur="PRN\0546963903033\0541662981110:01f7c296bfcea3af4dffca586cf8bff0ce7313b556dfd439259cb3efbcbeca2f711f494e"'}});
        }catch(e) {
            return message.channel.send('Tên instagram của con ghệ không phê!');
        }
        const account = res.data.graphql.user;
        const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(account.full_name)
        .setURL(`https://www.instagram.com/${instagram_id}/`)
        .setThumbnail(account.profile_pic_url_hd)
        .addField("Thông tin check hàng!", stripIndent`**- Tên Con Ghệ:** ${account.username}
        **- Tên Đầy Đủ: ** ${account.full_name}
        **- Giới thiệu: ** ${account.biography.lenght == 0 ? "Không có thông tin"  : account.biography} 
        **- Số bài đăng: ** ${account.edge_owner_to_timeline_media.count}
        **- Người đang Theo dõi: ** ${account.edge_followed_by.count}
        **- Người bạn  theo dõi: ** ${account.edge_follow.count}
        **- Tài khoản Private?: ** ${account.is_private ? "có 🔐" :"KHÔNG 🔒"}`)

        message.channel.send({embeds: [embed]})    
    }
}