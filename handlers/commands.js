const fs = require('fs');
const slash_commands = [];

function commands(client) {
    // Load slash commands (interaction)
    fs.readdirSync('./commands/interaction').forEach(file => {
        const command = require(`../commands/interaction/${file}`);
        if(!command) throw new Error(`cannot set commands ${file} is invalid!`);
        if(!command.name) command.name = file.split('.')[0];
        client.slashCommands.set(command.name, command);
        slash_commands.push({
            name: command.name,
            description: command.description,
            options: command.options ? command.options : []
        });
    });
    client.application.commands.set(slash_commands, config.slashRegister.guildId);
    console.log('Slash Commands: Loaded...');

    // Load commands (message)
    fs.readdirSync('./commands/message').forEach(file => {
        const command = require(`../commands/message/${file}`);
        if (!command) throw new Error(`cannot set commands ${file} is invalid!`);
        if (!command.name) command.name = file.split('.')[0];
        client.commands.set(command.name, command);
    });
    console.log('Message Commands: Loaded...');
};

const { Routes } = require("discord-api-types/v10");
const { REST } = require('@discordjs/rest');

/**
 * { Routes } from discord-api-types/v10
 * { REST } from @discordjs/rest
 * This is handlers for registering Slash Commands
 * */

async function slashCommands(client) {
    const rest = new REST({ version: '10' })
        .setToken(client.config.token);
    try {
        await rest.put(
            Routes.applicationGuildCommands(
                client.config.slashRegister.clientId,
                client.config.slashRegister.guildId
            ), { body: slash_commands }
        );
    }
    catch(error) {
        console.error('Slash Command Register:', error);
    }
    console.log('Slash Commands: Registered!');
};

module.exports = {
    load: commands,
    register: slashCommands
};
