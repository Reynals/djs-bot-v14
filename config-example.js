module.exports = {
    developerId: process.env.DEVELOPER_ID || '',
    prefix: process.env.BOT_PREFIX || '',
    slashRegister: {
        clientId: process.env.CLIENT_ID || '',
        guildId: process.env.GUILD_ID || ''
    },
    token: process.env.BOT_TOKEN || ''
};
