const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Check commands list',
    execute: async (client, interaction) => {
        const commandList = client.slashCommands.cache.map(command => `\`${command.name}\``).join(', ');
        const embed = new EmbedBuilder()
            .setColor('Blurple')
            .setAuthor({ name: `${client.user.username} Help`, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
            .setDescription('This is my available commands list\n\n'+commandList);
        interaction.reply({ embeds: [embed] });
    }
};
