const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'corona',
	category: 'user',
    aliases: ['covid19'],
	run: async (client, message, args) => {
		const baseUrl = 'https://corona.lmao.ninja/v2';

		let url; let response; let
			corona;

		try {
			url = args[0] ? `${baseUrl}/countries/${args[0]}` : `${baseUrl}/all`;
			response = await axios.get(url);
			corona = response.data;
		} catch (error) {
			return message.channel.send(`***${args[0]}*** doesn't exist, or data isn't being collected`);
		}

		const embed = new MessageEmbed()
			.setTitle(args[0] ? `${args[0].toUpperCase()} Stats` : 'Tình hình Covid-19 trên toàn thế giới')
			.setColor('#fb644c')
			.setThumbnail(args[0] ? corona.countryInfo.flag : 'https://i.giphy.com/YPbrUhP9Ryhgi2psz3.gif')
			.addFields(
				{
					name: 'Tổng số ca nhiễm:',
					value: corona.cases.toLocaleString(),
					inline: true,
				},
				{
					name: 'Số ca tử vong:',
					value: corona.deaths.toLocaleString(),
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
};