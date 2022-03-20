const { tictactoe } = require('reconlx');
const {Util, MessageEmbed } = require('discord.js');
module.exports = {
    name: 'maytinh',
    category: 'Game',
    aliases:['maytinh'],
    timeout: "20000",
    run: async (client ,  message ,  args) => {
        const simplydis = require("simply-djs")
        simplydis.calculator(message, {
            embedColor: "#2ECC71"
        })
    }
}