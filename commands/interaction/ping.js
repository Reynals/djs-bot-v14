module.exports = {
    name: 'ping',
    description: 'Check bot latency',
    execute: async (client, interaction) => {
        const now = await Date.now();
        await interaction.deferReply();

        interaction.editReply({ content: `Pong!: **${now-interaction.createdTimestamp}** ms` });
    }
};
