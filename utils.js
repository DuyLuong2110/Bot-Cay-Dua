const checkSameRoom = (message) => {
    if(!message.member.voice.channel) return message.reply('Bạn phải vào room voice để có thể sử dụng lệnh này!');
    if(!message.member.voice.channelID || message.guild.me.voice.channelID == message.member.voice.channelID) return;
    return message.reply('Bạn phải chung phòng với bot để có thể sử dụng lệnh này!');

}

module.exports = {
    checkSameRoom,
}