module.exports = {
    name: 'say',
    aliases: ['repeat'],
    run: (client, message) => {
        const args = message.content.split(' ').slice(1);
        if(!args[0]) return message.channel.send("Tenes que decir una frase Bobby");
        message.channel.send(args.join(' '));
    }
}