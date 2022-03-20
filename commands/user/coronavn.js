/*const axios = require('axios');
const { MessageEmbed } = require('discord.js');
const fetch = require ('node-fetch');
module.exports = {
	name: 'coronavn',
	category: 'user',
    aliases: ['covidvn'],
	run: async (client, message, args) => {
		const baseUrl = await fetch('https://static.pipezero.com/covid/data.json');

		let url; let response; let
			corona;

		try {
			url = args[0] ? `${baseUrl}/cities/${args[0]}` : `${baseUrl}/all`;
			response = await axios.get(url);
			corona = response.data;
		} catch (error) {
			return message.channel.send(`***${args[0]}*** doesn't exist, or data isn't being collected`);
		}

		const embed = new MessageEmbed()
			.setTitle(args[0] ? `${args[0].toUpperCase()} Stats` : 'Tình hình Covid-19 trên toàn thế giới')
			.setColor('#fb644c')
			.addFields(
				{
					name: 'Tổng số ca nhiễm:',
					value: corona.total.toLocaleString(),
					inline: true,
				},
				{
					name: 'Số ca tử vong:',
					value: corona.today.toLocaleString(),
					inline: true,
				},
				{
					name: 'Số ca khỏi:',
					value: corona.recovered.toLocaleString(),
					inline: true,
				},
				{
					name: 'Số ca còn lại:',
					value: corona.active.toLocaleString(),
					inline: true,
				},
				{
					name: '\u200b',
					value: '\u200b',
					inline: true,
				},
				{
					name: 'Trường hợp nguy kịch:',
					value: corona.critical.toLocaleString(),
					inline: true,
				},
				{
					name: 'Số ca nhiễm trong ngày:',
					value: corona.todayRecovered.toLocaleString().replace('-', ''),
					inline: true,
				},
				{
					name: 'Số ca tử vong trong ngày:',
					value: corona.todayDeaths.toLocaleString(),
					inline: true,
				},
			);

		return message.channel.send({ embeds: [embed] });
	},
};*/