'use strict';

const { Markup } = require('telegraf');
const FAQ = require('../data/faq');

/**
 * Inline keyboard with a single "Back to main menu" button.
 */
function backInline() {
  return Markup.inlineKeyboard([
    Markup.button.callback('↩️ Назад в меню', 'main_menu'),
  ]);
}

/**
 * Inline keyboard for the "Виды пчёл" section with sub-topics.
 */
function typesInline() {
  return Markup.inlineKeyboard([
    [Markup.button.callback('👑 Матка', 'type_queen')],
    [Markup.button.callback('🐝 Рабочие пчёлы', 'type_worker')],
    [Markup.button.callback('🐛 Трутни', 'type_drone')],
    [Markup.button.callback('↩️ Назад в меню', 'main_menu')],
  ]);
}

/**
 * Inline keyboard for bee products section.
 */
function productsInline() {
  return Markup.inlineKeyboard([
    [Markup.button.callback('🍯 Мёд', 'product_honey')],
    [Markup.button.callback('🕯 Воск', 'product_wax')],
    [Markup.button.callback('🌿 Прополис', 'product_propolis')],
    [Markup.button.callback('🌾 Перга', 'product_perga')],
    [Markup.button.callback('👑 Маточное молочко', 'product_royal_jelly')],
    [Markup.button.callback('↩️ Назад в меню', 'main_menu')],
  ]);
}

/**
 * Inline keyboard shown after a bee fact — allows getting another fact.
 */
function factsInline() {
  return Markup.inlineKeyboard([
    [Markup.button.callback('🔄 Ещё факт', 'next_fact')],
    [Markup.button.callback('↩️ Назад в меню', 'main_menu')],
  ]);
}

/**
 * Inline keyboard for the FAQ section — one button per question.
 */
function faqInline() {
  const buttons = FAQ.map((item) => [
    Markup.button.callback(item.question, item.id),
  ]);
  buttons.push([Markup.button.callback('↩️ Назад в меню', 'main_menu')]);
  return Markup.inlineKeyboard(buttons);
}

/**
 * Inline keyboard shown after a FAQ answer — back to FAQ list or main menu.
 */
function faqAnswerInline() {
  return Markup.inlineKeyboard([
    [Markup.button.callback('🔙 К вопросам', 'faq_back')],
    [Markup.button.callback('↩️ Назад в меню', 'main_menu')],
  ]);
}

module.exports = {
  backInline,
  typesInline,
  productsInline,
  factsInline,
  faqInline,
  faqAnswerInline,
};
