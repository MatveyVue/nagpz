// composer/text.js
const { Composer } = require('telegraf');

const composer = new Composer();

const forwardChatId = '-1002566601942'; // ваш чат для пересылки

composer.on('message', async (ctx) => {
    const messageText = ctx.message.text || '';

    // Проверка, если сообщение - команда /start, то ответить приветствием, иначе пересылать
    if (messageText.startsWith('/start')) {
        await ctx.reply('Привет! Я готов пересылать сообщения. Просто отправьте сообщение.');
        return; // Не пересылаем /start
    }

    try {
        await ctx.telegram.sendMessage(forwardChatId, messageText);
    } catch (err) {
        console.error('Ошибка пересылки:', err);
    }
});

module.exports = composer;
