const slashCommands = require('../handlers/commands');

module.exports = async(client) => {
    // Registering slash commands
    await slashCommands.register(client);

    // Bot presence
    client.user.setPresence({
        activities: [{
            type: 0, // Playing
            name: `Made by Devin#3583 with ❤`
        }],
        status: 'online'
    });

    // This is log when your Bot is ready and have login to Discord
    console.log(`Ready: Connected to ${client.user.tag}!`);
};
