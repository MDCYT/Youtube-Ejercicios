module.exports = {
    name: 'hello',
    description: 'Ping!',
    aliases: ['hella'],
    run: (client, message) => {
        message.channel.send('Hello!')
    }
};