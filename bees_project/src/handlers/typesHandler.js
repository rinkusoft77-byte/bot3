'use strict';

const TEXTS = require('../data/texts');
const { typesInline, backInline } = require('../keyboards/inlineMenus');

/**
 * Handles "Виды пчёл" section with inline sub-navigation for queen, worker, drone.
 * @param {import('telegraf').Telegraf} bot
 */
function registerTypesHandler(bot) {
  // Reply button opens list of types
  bot.hears('🔬 Виды пчёл', async (ctx) => {
    await ctx.reply(TEXTS.types, {
      parse_mode: 'Markdown',
      ...typesInline(),
    });
  });

  // Inline: Матка
  bot.action('type_queen', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.reply(TEXTS.typesMatkaPart, {
      parse_mode: 'Markdown',
      ...backInline(),
    });
  });

  // Inline: Рабочие пчёлы
  bot.action('type_worker', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.reply(TEXTS.typesWorkerPart, {
      parse_mode: 'Markdown',
      ...backInline(),
    });
  });

  // Inline: Трутни
  bot.action('type_drone', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.reply(TEXTS.typesDronePart, {
      parse_mode: 'Markdown',
      ...backInline(),
    });
  });
}

module.exports = { registerTypesHandler };
