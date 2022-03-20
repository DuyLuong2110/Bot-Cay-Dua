const { tictactoe } = require('reconlx');
const {Util, MessageEmbed } = require('discord.js');
module.exports = {
    name: 'tictactoe',
    category: 'Game',
    aliases:['ttt'],
    description: "nhấn @ tag 1 người bạn nữa để chơi cùng",
    run: (client ,  message ,  args) => {
        const simplydis = require("simply-djs")
        simplydis.tictactoe(message)
    }
}