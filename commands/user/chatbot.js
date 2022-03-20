const simplydis = require("simply-djs")
module.exports = {
    name: 'chatbot',
    category: 'user',
    aliases:['chatbot'],
    description: "nhấn @ tag 1 người bạn nữa để chơi cùng",
    run: (client ,  message ,  args) => {
        simplydis.chatbot(client, message, {
            chid: '908255549026627584',
            name: 'Thầy Bé' 
        })
    }
}