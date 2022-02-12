module.exports = {
    name: 'ping',
    description: 'Ping!',
    aliases: ['pong'],
    run: (client, message) => {
        const Time = Date.now()
        message.channel.send('Pong!').then(m => {
            m.edit(`Pong!\n\`${Date.now() - Time}ms\``)
        })
    }
};