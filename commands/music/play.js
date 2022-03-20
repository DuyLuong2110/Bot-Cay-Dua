const { checkSameRoom } = require('../../utils');
const { createAudioPlayer, NoSubscriberBehavior } = require('@discordjs/voice');
module.exports = {
	name: 'play',
	category: 'music',
	aliases: ['play'],
	description: 'chơi nhạc từ youtube, soundcloud, spotify',
	run: async (client, message, args) => {
		if (checkSameRoom(message)) return;
		const ytdl = require('ytdl-core');
		const url = args[0];
		const Discord = require('@discordjs/voice');
		const stream = ytdl(url, { filter: 'audioonly' });

		const channel = message.member.voice.channel;

		const player = Discord.createAudioPlayer({
			behaviors: {
				noSubscriber: NoSubscriberBehavior.Pause,
			},
		});
		const resource = Discord.createAudioResource(stream);

		const connection = Discord.joinVoiceChannel({
			channelId: channel.id,
			guildId: message.guild.id,
			adapterCreator: message.guild.voiceAdapterCreator,
		});

		player.play(resource);
		connection.subscribe(player);
		player.pause();

		// Unpause after 5 seconds
		setTimeout(() => player.unpause(), 5_000);
		player.on(Discord.AudioPlayerStatus.Idle, () => {
			connection.destroy();
		});

	}
}