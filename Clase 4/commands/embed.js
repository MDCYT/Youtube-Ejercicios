module.exports = {
    name: 'embed',
    aliases: ['embedsay'],
    run: (client, message) => {
        const { MessageEmbed } = require('discord.js')
        const embed = new MessageEmbed()
            .setTitle('Welcome to the server!')
            .setColor("Random")
            .setDescription('Thanks for joining!')
            .setImage('https://media.discordapp.net/attachments/724240982709824073/724240982709824073/image0.jpg')
        
        message.channel.send(embed)
    }
}
