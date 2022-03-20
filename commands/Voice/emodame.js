const voiceDiscord = require('@discordjs/voice');
const {Intents} = require ('discord.js');
module.exports = {
	name: 'soundboard',
	aliases: ['emo'],
	run: async (client, message, args) => {
		const channel = message.member.voice.channel;
		if(!channel) return message.channel.send('Bro join a voice channel smh :wink:');

		const player = voiceDiscord.createAudioPlayer();
		const resource = voiceDiscord.createAudioResource('../cayduabot/Voice/EMOTIONAL DAMAGE.mp3');
		const connection = voiceDiscord.joinVoiceChannel({
			channelId: channel.id,
			guildId: message.guild.id,
			adapterCreator: message.guild.voiceAdapterCreator,
		});
        connection.subscribe(player);
		player.play(resource);
		// checking for ending, leaving vc if yes
		player.on(voiceDiscord.AudioPlayerStatus.Idle, () => {
			connection.destroy();
		});
	},
}