const Discord = require("discord.js");
const config = require("../config.json")

module.exports = (client, message, queue) => {

    const emp = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`✔️ - Sesde kimsecikler kalmadı bea.`)
    .setTimestamp()
    .setFooter(`${config.footer}`)

    message.channel.send(emp);

};