const voiceDiscord = require ('@discordjs/voice')
const {Intents} = require ('discord.js');
module.exports = {
    name: '70tuoi',
    category: 'Voice',
    aliases:['hd'],
    description: "\`Tôi năm nay hơn 70  tuổi...`",
    run: async (client ,  message ,  args) => {
        const channel = message.member.voice.channel;
        if(!channel) return message.channel.send('\`Tham gia kênh voice mới sử dụng được nhé\`');
        const player = voiceDiscord.createAudioPlayer();
        const resource = voiceDiscord.createAudioResource('../cayduabot/Voice/huuda.mp3');
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