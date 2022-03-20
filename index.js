const { Client, Intents, Collection, Guild, DiscordAPIError, MessageEmbed, Discord, Permissions } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES] });
const { token } = require('./config.json');
const fs = require('fs');
const { channel } = require("diagnostics_channel");
/*const { Player} = require ('discord-player');
const player = new Player(client,{
    ytldDownloadOptions: {filter: "audioonly" }, 
});

client.player = player;
client.on("ready", () => {
    console.log(`${client.user.username}  đã sẵn sàng hoạt động!`);

    client.user.setPresence({
        activities: {
            name: "Đang đi qua thung lũng!",
            type: 'PLAYING'
        },
        status: 'online'
    })
})

client.player.on('strackStart', (message, track) => message.channel.send(`🎶 Đang chơi bài \`${track.title}\`...`));
client.player.on('trackAdd', (message, queue, track) => message.channel.send(`✅ Đã thêm \`${track.name}\` vào danh sách chờ`));
client.player.on('playlistAdd',(message , queue, playlist) => message.channel.send(`📃 Dẫ thêm \`${playlist.tracks.length}\`bài hát vào danh sách chờ`));
*/
client.commands = new Collection();
client.aliase = new Collection();


["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on("messageCreate", async message => {
    if (message.author.bot) return;
    const prefix = ','
    if (!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if (cmd.length === 0) return;
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliase.get(cmd));
    if (command) {
        if (command.category === 'music' && !message.member.voice.channel) return message.channel.send('Vui lòng vào room voice để có thể sử dụng lệnh!');
        command.run(client, message, args);
    }

})

client.on('guildCreate', guild => {
    guild.systemChannel.send(`Hello! Cảm ơn bạn đã mời Con Ghệ Sexy này vào ${guild.name}!,
    \nSử dụng lệnh ,help để xem tính năng và lệnh, \nLiên hệ qua [facebook Dev] (https://www.facebook.com/ken.luong.3132021)!`)
});
/*client.on('guildCreate', guild => {
    const channel = guild.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
    channel.send({embed: [new MessageEmbed() 
        .setColor("WHITE")
        .setAuthor(`Hello! Cảm ơn bạn đã mời Con Ghệ Sexy này vào ${guild.name}!`)
        .setDescription("Prefix is `.` btw!")
        .addField("Sử dụng lệnh ,help để xem tính năng và lệnh", "Liên hệ qua [facebook Dev] (https://www.facebook.com/ken.luong.3132021)!")
    ]});
})*/
/*client.on("guildCreate", (guild) => { // This event triggers when the bot joins a guild. 
    let rawdata = fs.readFileSync('group.json');
    let guilds = JSON.parse(rawdata);
    console.log(`Joined new guild: ${guild.name}`);
    var chx = guild.channels.cache.filter(chx => chx.type === "text").find(x => x.position === 0);
    client.newGuild [chx.guild.id] = {
        MemberAdd: chx.id,
        MemberRemove: chx.id
    }
    fs.writeFile("./guilds.json", JSON.stringify (client.newGuild, null, 4), err => {
        if (err) throw err;
        console.log('Server succefull add')
    })
});*/

client.on("ready", () => {
    const Guilds = client.guilds.cache.map(guild => guild.id);
    console.log(Guilds);
});
client.login(token)
