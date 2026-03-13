'use strict';

const TEXTS = require('../data/texts');
const { backInline } = require('../keyboards/inlineMenus');

/**
 * Handles "Польза пчёл" reply button.
 * @param {import('telegraf').Telegraf} bot
 */
function registerBenefitsHandler(bot) {
  bot.hears('🌿 Польза пчёл', async (ctx) => {
    await ctx.reply(TEXTS.benefits, {
      parse_mode: 'Markdown',
      ...backInline(),
    });
  });
}

module.exports = { registerBenefitsHandler };
