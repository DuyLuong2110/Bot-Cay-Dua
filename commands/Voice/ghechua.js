const voiceDiscord = require ('@discordjs/voice')
const {Intents} = require ('discord.js');
module.exports = {
    name: 'ghechua',
    category: 'Voice',
    aliases:['gc'],
    run: async (client ,  message ,  args) => {
        const channel = message.member.voice.channel;
        if(!channel) return message.channel.send('\`Tham gia kênh voice mới sử dụng được nhé\`');
        const player = voiceDiscord.createAudioPlayer();
        const resource = voiceDiscord.createAudioResource('../cayduabot/Voice/ghechua.mp3');
        const connection = voiceDiscord.joinVoiceChannel({
            channelId: channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
        });
        player.play(resource);
        connection.subscribe(player);
        player.on(voiceDiscord.AudioPlayerStatus.Idle, () => {
            connection.destroy();
        });

    },
};