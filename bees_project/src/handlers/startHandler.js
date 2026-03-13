'use strict';

const TEXTS = require('../data/texts');
const { mainMenuKeyboard } = require('../keyboards/mainMenu');

/**
 * Registers /start and /menu commands + "Назад в меню" reply button.
 * @param {import('telegraf').Telegraf} bot
 */
function registerStartHandler(bot) {
  // /start command
  bot.start(async (ctx) => {
    await ctx.reply(TEXTS.welcome, {
      parse_mode: 'Markdown',
      ...mainMenuKeyboard(),
    });
  });

  // /menu command
  bot.command('menu', async (ctx) => {
    await ctx.reply(TEXTS.welcome, {
      parse_mode: 'Markdown',
      ...mainMenuKeyboard(),
    });
  });

  // "Назад в меню" reply button
  bot.hears('↩️ Назад в меню', async (ctx) => {
    await ctx.reply(TEXTS.welcome, {
      parse_mode: 'Markdown',
      ...mainMenuKeyboard(),
    });
  });

  // Inline callback: main_menu
  bot.action('main_menu', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.reply(TEXTS.welcome, {
      parse_mode: 'Markdown',
      ...mainMenuKeyboard(),
    });
  });
}

module.exports = { registerStartHandler };
