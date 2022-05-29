const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Check commands list',
    execute: async (client, message) => {
        const commandList = client.commands.cache.map(command => `\`${command.name}\``).join(', ');
        const embed = new EmbedBuilder()
            .setColor('Blurple')
            .setAuthor({ name: `${client.user.username} Help`, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
            .setDescription('This is my available commands list\n\n'+commandList);
        message.reply({ embeds: [embed] });
    }
};
