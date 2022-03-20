const weather = require('weather-js');
const discord = require('discord.js')
//TIME TO END STREAM
module.exports = {
    name: "weather",
    aliases: ['weather'],
    description: "Get the weather of anywhere",
    category: "user",
    usage: "weathet <>",
    run: async (client, message, args) => {
        weather.find({search: args.join(" "), degreeType: `C` }, function (error, result)
        {
            if (error) return message.channel.send(error);
            if (!args[0]) return message.channel.send('Vui lòng nhập quốc gia bạn muốn xem!')

            if (result === undefined || result.length === 0) return message.channel.send('**invlaid** location!!')
            var current = result[0].current;
            var location = result[0].location

            const embed = new discord.MessageEmbed()
                .setColor("#ff2050")
                .setAuthor(`Weather forecast for ${current.observationpoint}`)
                .setDescription("Temperature units can may be differ some time")
                .setThumbnail(current.imageUrl)
                .addField('TimeZone', `UTC ${location.timezone}`, true)
                .addField('Degree Type', 'Celcius', true)
                .addField('Temperature', `${current.temperature}°`, true)
                .addField('Wind', `${current.winddisplay}`, true)
                .addField('Feels Like', `${current.feelslike}°`, true)
                .addField('Humidity', `${current.humidity}%`, true)
                message.channel.send({ embeds: [embed] });
        })
    }
}