'use strict';

const FAQ = require('../data/faq');
const TEXTS = require('../data/texts');
const { faqInline, faqAnswerInline } = require('../keyboards/inlineMenus');

/**
 * Handles "Вопрос-ответ" section.
 * Users choose a question from an inline keyboard and get an answer.
 * @param {import('telegraf').Telegraf} bot
 */
function registerFaqHandler(bot) {
  // Reply button
  bot.hears('❓ Вопрос-ответ', async (ctx) => {
    await ctx.reply(TEXTS.faqIntro, {
      parse_mode: 'Markdown',
      ...faqInline(),
    });
  });

  // Each FAQ answer callback
  FAQ.forEach((item) => {
    bot.action(item.id, async (ctx) => {
      await ctx.answerCbQuery();
      await ctx.reply(item.answer, {
        parse_mode: 'Markdown',
        ...faqAnswerInline(),
      });
    });
  });

  // "Back to FAQ list" inline button
  bot.action('faq_back', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.reply(TEXTS.faqIntro, {
      parse_mode: 'Markdown',
      ...faqInline(),
    });
  });
}

module.exports = { registerFaqHandler };
