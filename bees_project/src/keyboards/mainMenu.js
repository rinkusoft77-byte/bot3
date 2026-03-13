'use strict';

const { Markup } = require('telegraf');

/**
 * Main reply keyboard — shown at the root level of the bot.
 */
function mainMenuKeyboard() {
  return Markup.keyboard([
    ['🐝 О пчёлах', '🔬 Виды пчёл'],
    ['🏠 Как живёт улей', '🌿 Польза пчёл'],
    ['🍯 Продукты пчеловодства', '⚡ Интересные факты'],
    ['❓ Вопрос-ответ', '💬 Помощь'],
  ])
    .resize()
    .persistent();
}

/**
 * Just a "back to main menu" row keyboard (lightweight).
 */
function backToMenuKeyboard() {
  return Markup.keyboard([['↩️ Назад в меню']])
    .resize()
    .oneTime();
}

module.exports = { mainMenuKeyboard, backToMenuKeyboard };
