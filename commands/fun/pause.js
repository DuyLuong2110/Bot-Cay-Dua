
const { Intents } = require('discord.js');
module.exports = {
	name: 'pause',
	aliases: ['pause'],
	run: async (client, message, args) => {
		const ytdl = require('ytdl-core');
		const url = args[0];

		if (!url) return message.channel.send('No url provided');

		const Discord = require('@discordjs/voice');
		const stream = ytdl(url, { filter: 'audioonly' });

		const channel = message.member.voice.channel;

		const player = Discord.createAudioPlayer();
		const resource = Discord.createAudioResource(stream);

		const connection = Discord.joinVoiceChannel({
			channelId: channel.id,
			guildId: message.guild.id,
			adapterCreator: message.guild.voiceAdapterCreator,
		});

		player.pause(resource);
		connection.subscribe(player);
// Unpause after 5 seconds
setTimeout(() => player.unpause(resource), 5_000);
		player.on(Discord.AudioPlayerStatus.Idle, () => {
			connection.destroy();
		});
	},
};