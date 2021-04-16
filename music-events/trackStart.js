const Discord = require("discord.js");
const config = require("../config.json")
module.exports = (client, message, track) => {

    const start1 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`✔️ - ${track.title} isimli şarkı başarıyla ${message.member.voice.channel.name} kanalında çalıyor bu şarkılar güzelde sen daha güzelsin bea!`)
    .setTimestamp()
    .setFooter(`${config.footer}`)

    message.channel.send(start1);

};