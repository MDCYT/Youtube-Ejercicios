const discord = require('discord.js');
const client = new discord.Client();
const config = require('./config.js');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);

client.commands = new discord.Collection();
client.aliases = new discord.Collection();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity(`${config.prefix}help`, { type: 'PLAYING' });
});

const commands = [];
readdir('./commands/')
    .then(files => {
        files.forEach(file => {
            const command = require(`./commands/${file}`);
            commands.push(command);
            client.commands.set(command.name, command);
            command.aliases.forEach(alias => {
                client.aliases.set(alias, command.name);
            });
        });
    })
    .catch(console.error);

client.on('message', message => {
    client.commands.forEach(command => {
        if (message.content.toLowerCase().startsWith(config.prefix + command.name)) {
            command.run(client, message);
        } 
        for (let i = 0; i < command.aliases.length; i++) {
            if (message.content.toLowerCase().startsWith(config.prefix + command.aliases[i])) {
                command.run(client, message);
            }
        }
    });
});