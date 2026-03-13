'use strict';

const TEXTS = require('../data/texts');
const { backInline } = require('../keyboards/inlineMenus');

/**
 * Handles "Как живёт улей" reply button.
 * @param {import('telegraf').Telegraf} bot
 */
function registerHiveHandler(bot) {
  bot.hears('🏠 Как живёт улей', async (ctx) => {
    await ctx.reply(TEXTS.hive, {
      parse_mode: 'Markdown',
      ...backInline(),
    });
  });
}

module.exports = { registerHiveHandler };
