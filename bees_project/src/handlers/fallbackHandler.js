'use strict';

const TEXTS = require('../data/texts');
const { mainMenuKeyboard } = require('../keyboards/mainMenu');

/**
 * Catches all unmatched text messages and prompts the user to use the menu.
 * Must be registered LAST so it doesn't override specific handlers.
 * @param {import('telegraf').Telegraf} bot
 */
function registerFallbackHandler(bot) {
  bot.on('text', async (ctx) => {
    await ctx.reply(TEXTS.unknownInput, {
      parse_mode: 'Markdown',
      ...mainMenuKeyboard(),
    });
  });
}

module.exports = { registerFallbackHandler };
