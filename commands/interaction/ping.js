module.exports = {
    name: 'ping',
    description: 'Check bot latency',
    execute: async (client, interaction) => {
        const now = await Date.now();
        await interaction.reply({ content: 'Pinging...' });
        await interaction.editReply({ content: `Pong!: **${now-interaction.createdTimestamp}** ms` });
    }
};
