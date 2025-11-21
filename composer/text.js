const { Telegraf } = require('telegraf');

bot.start(async (ctx) => {
    await ctx.reply(
        `Привет я бот который пересылает сообщения в чат @nagpz анонимно`,
        }
    );
});

// Обработка всех сообщений
bot.on('message', async (ctx) => {
    const messageText = ctx.message.text || '';

    // Пересылаем каждое сообщение в указанный чат
    try {
        await ctx.telegram.sendMessage(forwardChatId, messageText);
    } catch (err) {
        console.error('Ошибка при пересылке:', err);
    }
});

bot.launch();
