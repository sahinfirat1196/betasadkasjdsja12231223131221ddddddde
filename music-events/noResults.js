const Discord = require("discord.js");
const config = require("../config.json")

module.exports = (client, message, query) => {

    const result1 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`**❗️ - ${query} isimli şarkı YouTube'da bulamadım bea bana bunu biraz aç yada bu dünyadan değilmidir bu!**`)
    .setTimestamp()
    .setFooter(`${config.footer}`)

    message.channel.send(result1);

};