/*const {checkSameRoom} = require ('../../utils');
module.exports = {
    name: 'skip',
    category: 'music',
    aliases: ['skip'],
    description: 'chơi nhạc từ youtube, soundcloud, spotify',
    run: async (client, message, args) => {
        if(checkSameRoom(message)) return;
        const ytdl = require('ytdl-core');
		const url = args[0];
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

		player.skip(resource);
		connection.subscribe(player);
		player.on(Discord.AudioPlayerStatus.Idle, () => {
			connection.destroy();
		});
    },
};*/