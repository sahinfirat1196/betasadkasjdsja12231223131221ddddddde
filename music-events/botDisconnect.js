const Discord = require("discord.js");
const { conf } = require("../commands/help");
const config = require("../config.json")

module.exports = (client, message, queue) => {

    const disc = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription("**❗️ - Müzik bitti bea ya müzik aç yada siktirip gideyim bea.**")
    .setTimestamp()
    .setFooter(`${config.footer}`)

    message.channel.send(disc);

};
