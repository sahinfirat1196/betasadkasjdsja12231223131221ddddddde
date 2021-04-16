const Discord = require("discord.js");
const config = require("../config.json")

module.exports = (client, error, message) => {

    const error1 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription("**❗ - Amina koydumun admini bea yetkim olmasa nasıl çalam bakem!**")
    .setTimestamp()
    .setFooter(`${config.footer}`)

    const error2 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription("**❗ - De gadasını siktime bak hele seste yok beni çarıyor bea!**")
    .setTimestamp()
    .setFooter(`${config.footer}`)

    const error3 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription("**❗️ - Bulunduğunuz kanala giremeyom bea girmem için çirkef admine soyle yetki versin bea, gerekli izinleri verdikten sonra beni rahatsız edin bea.**")
    .setTimestamp()
    .setFooter(`${config.footer}`)

    const error4 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`**❗️ - Bir şeyler ters gitti, **__Lütfen +help__** yazarak botun sahibiyle iletişime geçin... Hata: ${error}.**`)
    .setTimestamp()
    .setFooter(`${config.footer}`)

    switch (error) {
        case 'NotPlaying':
            message.channel.send(error1);
            break;
        case 'NotConnected':
            message.channel.send(error2);
            break;
        case 'UnableToJoin':
            message.channel.send(error3);
            break;
        default:
            message.channel.send(error4);
    };

};
