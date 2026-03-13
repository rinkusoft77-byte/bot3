'use strict';

const TEXTS = require('../data/texts');
const { backInline } = require('../keyboards/inlineMenus');

/**
 * Handles "О пчёлах" reply keyboard button.
 * @param {import('telegraf').Telegraf} bot
 */
function registerAboutBeesHandler(bot) {
  bot.hears('🐝 О пчёлах', async (ctx) => {
    await ctx.reply(TEXTS.aboutBees, {
      parse_mode: 'Markdown',
      ...backInline(),
    });
  });
}

module.exports = { registerAboutBeesHandler };
