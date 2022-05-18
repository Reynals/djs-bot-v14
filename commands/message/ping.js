module.exports = {
    name: 'ping',
    description: 'Check bot latency',
    execute: async (client, message) => {
        const wait = await message.reply({ content: 'Pinging...' });
        wait.edit({ content: `Pong!: **${wait.createdTimestamp-message.createdTimestamp}** ms` });
    }
};
