const Discord = require('discord.js');
const config = require("../config.json")
exports.run = function(client, message) {
 
 const help = new Discord.MessageEmbed()
  .setAuthor(`${message.client.user.username}`, message.client.user.avatarURL)
  .setColor('RANDOM')
  .addField('Pante Bot | Müzik Komutları ',`

  **${config.prefix}oynat <müzikismi>**: İstenilen şarkıyı çalar.
  **${config.prefix}durdur**: Şarkıyı durdurur.
  **${config.prefix}devamet**: Durdurulan şarkıyı devam ettirir.
  **${config.prefix}döngü**: Şarkıyı tekrardan oynatır.
  **${config.prefix}geç**: Varsa listedeki diğer şarkılara geçer.
  **${config.prefix}durdur**: Şarkıyı durdurur. 
  **${config.prefix}müzikbilgi**: Çalan şarkıyı gösterir.
  **${config.prefix}liste**: Şarkıları gösterir.
  **${config.prefix}karıştır**: Şarkıları karıştırır.
  **${config.prefix}ping**: Botun gecikme süresini gösterir.
  **Andı ne la :-Şeymi Dostum Yine Yangınlar Yine Ben.
       `)
  .setFooter(`${message.author.tag} Dostum Beni hatırladın.`, message.author.avatarURL)
  .setThumbnail("https://media.discordapp.net/attachments/792585215612551208/823516689438081024/image0_-_Kopya.gif")
  .setImage("https://media.discordapp.net/attachments/697501509016879104/815827666682773544/itachi.gif") 
   return message.channel.send(help).catch(console.error);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım','help','yardim'],
 permLevel: 0
};
 
exports.help = {
 name: 'yardım',
 description: 'botun gecikme süresini gösterir',
 usage: 'prefix+ping'
};
//pantela siker siker çoğaltır