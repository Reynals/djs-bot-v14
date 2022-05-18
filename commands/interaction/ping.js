module.exports = {
    name: 'ping',
    description: 'Check bot latency',
    execute: async (client, interaction) => {
        const now = await Date.now();
        const wait = await interaction.reply({ content: 'Pinging...' });
        wait.edit({ content: `Pong!: **${now-interaction.createdTimestamp}** ms` });
    }
};
