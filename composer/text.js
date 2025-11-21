// composer/text.js
const { Composer } = require('telegraf');

const composer = new Composer();

const forwardChatId = '-1003410007438'; // ваш чат для пересылки

composer.on('message', async (ctx) => {
    const messageText = ctx.message.text || '';

    // Проверка, если сообщение - команда /start, то ответить приветствием
    if (messageText.startsWith('/start')) {
        await ctx.reply('Привет! Я бот который будет пересылать сообщения в канал @nagpz анонимно');
        return; // Не пересылаем /start
    }

    try {
        await ctx.telegram.sendMessage(forwardChatId, messageText);
        // После успешной пересылки отправляем подтверждение пользователю
        await ctx.reply('Ваше сообщение было отправлено успешно.');
    } catch (err) {
        console.error('Ошибка пересылки:', err);
        await ctx.reply('Произошла ошибка при отправке сообщения. Попробуйте позже.');
    }
});

module.exports = composer;
