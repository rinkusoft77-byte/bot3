'use strict';

const TEXTS = require('../data/texts');
const { backInline } = require('../keyboards/inlineMenus');

/**
 * Handles /help command and "Помощь" reply button.
 * @param {import('telegraf').Telegraf} bot
 */
function registerHelpHandler(bot) {
  bot.command('help', async (ctx) => {
    await ctx.reply(TEXTS.help, {
      parse_mode: 'Markdown',
      ...backInline(),
    });
  });

  bot.hears('💬 Помощь', async (ctx) => {
    await ctx.reply(TEXTS.help, {
      parse_mode: 'Markdown',
      ...backInline(),
    });
  });

  bot.command('about', async (ctx) => {
    await ctx.reply(TEXTS.about, {
      parse_mode: 'Markdown',
      ...backInline(),
    });
  });
}

module.exports = { registerHelpHandler };
