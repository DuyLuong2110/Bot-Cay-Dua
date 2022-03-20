const {getAudioUrl } = require('google-tts-api');
const {Intents} = require ('discord.js');
module.exports = {
    name: 'speak',
    category:'fun',
    aliases:['sp', 'speak'],
    run: async (client, message, args) => {
        if(!args[0]) return message.channel.send('Vui lòng nhập đề bot nói!');
        const string = args.join(' ');
        if(string.length > 200) return message.channel.send('Vui lòng nhập dưới 200 từ!');
        const channel = message.member.voice.channel;
        if(!channel) return message.reply('Bạn phải vào room voice để sử dụng bot!');
        const Discord = require('@discordjs/voice');
        const player = Discord.createAudioPlayer();
        const audioUrl = await  getAudioUrl(string,{
            lang: 'vi',
            slow: false,
            host: 'https://translate.google.com',
            timeout: 10000,
        });
        const resource = Discord.createAudioResource(audioUrl);
        const connection = Discord.joinVoiceChannel({
            channelId: channel.id,
            guildId: channel.guild.id,
            adapterCreator: channel.guild.voiceAdapterCreator,
        });
        player.play(resource);
		connection.subscribe(player);

		player.on(Discord.AudioPlayerStatus.Idle, () => {
			connection.destroy();
		});

}
}