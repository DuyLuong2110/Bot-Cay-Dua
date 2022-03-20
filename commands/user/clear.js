/*const {CommandInteraction , MessageEmbed} = required('discord.js')
module.exports = {
    name: 'clear',
    category: 'user',
    aliases:['clear'],
    description: 'remove message',
    userPermission:["MANAGE_MESSAGES"],
    Option:[{
        name: "amount",
        description:"Chọn số dòng mà bạn muốn xóa!",
        type: "INTEGER",
        required: true, 
    },
],
    run: (client , message, args) => {
        const amount = message.getInteger("amount");
        if(amount > 100)
        return message.send({
            content: 
            "Vuợt quá số dòng cho phép được xoát rồi , giới hạn 100 dòng thôi nhé",
        });
        const messages = await message.channel.fecth({
            limit: amount +1,
        });
        const filtered = messages.filter(
            (msg) => Date.now() - msg.createdTimestamp < ms("14 days")

        );
        await message.channel.bulkDelete(filtered);
         message.channel.send({
            content: `deletd ${filter.size - 1} messages`,
        }).then((msg) => {
            setTimeout(() => msg.delete(), ms('5 seconds'))
        })
    },
};*/
module.exports = {
    name: "clear",
    category: 'user',
    aliases: ['cl'],
    description: "xóa số lượng tin nhắn đã cho",
    run: async (client, message, args) => {
        const fetched = message.channel || message.mentions.members.first();
        let messageArray = message.content.split(" ");
        const amount = parseInt(args[0]) + 1;
        if (isNaN(amount)) {
            return message.channel.send(`${message.author.username}`, `bạn chỉ có thể xóa các tin nhắn từ 1-99`);
        } else if (amount <= 1 || amount > 100) {
            return message.channel.send(`${message.author.username}`, `bạn chỉ có thể xóa các tin nhắn từ 1-99`);
        }
        fetched.bulkDelete(amount, true);
        fetched.bulkDelete(amount);
    },
};