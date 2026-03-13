'use strict';

const TEXTS = require('../data/texts');
const { productsInline, backInline } = require('../keyboards/inlineMenus');

/**
 * Handles "Продукты пчеловодства" section with inline sub-pages per product.
 * @param {import('telegraf').Telegraf} bot
 */
function registerProductsHandler(bot) {
  // Main products menu
  bot.hears('🍯 Продукты пчеловодства', async (ctx) => {
    await ctx.reply(TEXTS.productsIntro, {
      parse_mode: 'Markdown',
      ...productsInline(),
    });
  });

  // Honey
  bot.action('product_honey', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.reply(TEXTS.productHoney, {
      parse_mode: 'Markdown',
      ...backInline(),
    });
  });

  // Wax
  bot.action('product_wax', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.reply(TEXTS.productWax, {
      parse_mode: 'Markdown',
      ...backInline(),
    });
  });

  // Propolis
  bot.action('product_propolis', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.reply(TEXTS.productPropolis, {
      parse_mode: 'Markdown',
      ...backInline(),
    });
  });

  // Perga
  bot.action('product_perga', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.reply(TEXTS.productPerga, {
      parse_mode: 'Markdown',
      ...backInline(),
    });
  });

  // Royal jelly
  bot.action('product_royal_jelly', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.reply(TEXTS.productRoyalJelly, {
      parse_mode: 'Markdown',
      ...backInline(),
    });
  });
}

module.exports = { registerProductsHandler };
