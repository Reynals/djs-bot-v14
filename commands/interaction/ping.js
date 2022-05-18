module.exports = {
    name: 'ping',
    description: 'Check bot latency',
    execute: async (client, interaction) => {
        const now = await Date.now();

        interaction.reply({ content: `Pong!: **${now-interaction.createdTimestamp}** ms` });
    }
};
