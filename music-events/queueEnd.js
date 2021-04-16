const Discord = require("discord.js");
const config = require("../config.json")

module.exports = (client, message, queue) => {

    const end1 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`**❗️ - Oynatma listesinde şarkı olmadığı için müziği durdurduk bea.**`)
    .setTimestamp()
    .setFooter(`${config.footer}`)

    message.channel.send(end1);

};