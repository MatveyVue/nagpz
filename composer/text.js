// composer/text.js
const { Composer } = require('telegraf');

const composer = new Composer();

const forwardChatId = '-1002566601942'; // ваш чат для пересылки

composer.on('message', async (ctx) => {
    const messageText = ctx.message.text || '';

    try {
        await ctx.telegram.sendMessage(forwardChatId, messageText);
    } catch (err) {
        console.error('Ошибка пересылки:', err);
    }
});

module.exports = composer;
