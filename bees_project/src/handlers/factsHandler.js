'use strict';

const FACTS = require('../data/facts');
const TEXTS = require('../data/texts');
const { factsInline } = require('../keyboards/inlineMenus');

/**
 * Returns a random fact from the FACTS array.
 * @returns {string}
 */
function getRandomFact() {
  const index = Math.floor(Math.random() * FACTS.length);
  return FACTS[index];
}

/**
 * Handles "Интересные факты" section.
 * Each press of "Ещё факт" shows a new random fact.
 * @param {import('telegraf').Telegraf} bot
 */
function registerFactsHandler(bot) {
  // Reply keyboard button
  bot.hears('⚡ Интересные факты', async (ctx) => {
    const fact = getRandomFact();
    await ctx.reply(`${TEXTS.factsIntro}\n\n${fact}`, {
      parse_mode: 'Markdown',
      ...factsInline(),
    });
  });

  // Inline: next_fact button
  bot.action('next_fact', async (ctx) => {
    await ctx.answerCbQuery('Вот ещё один! 🐝');
    const fact = getRandomFact();
    // Edit existing message so the chat doesn't flood with new messages
    try {
      await ctx.editMessageText(`${TEXTS.factsIntro}\n\n${fact}`, {
        parse_mode: 'Markdown',
        ...factsInline(),
      });
    } catch {
      // Message might have been deleted or identical — send a new one
      await ctx.reply(`${TEXTS.factsIntro}\n\n${fact}`, {
        parse_mode: 'Markdown',
        ...factsInline(),
      });
    }
  });
}

module.exports = { registerFactsHandler };
