const { Telegraf } = require('telegraf');

const token = '6632695365:AAH234LsLWIcoCL5EzKy_kGyj18skhd5xCU'; // вставьте сюда ваш токен
const forwardChatId = '-1002647773080'; // ID чата для пересылки

const bot = new Telegraf(token);

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
