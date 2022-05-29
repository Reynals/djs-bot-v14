module.exports = {
    name: 'ping',
    description: 'Check bot latency',
    execute: async (client, message) => {
        const loadMsg = await message.reply({ content: 'Pinging...' });
        loadMsg.edit({ content: `Pong!: **${wait.createdTimestamp-message.createdTimestamp}** ms` });
    }
};
