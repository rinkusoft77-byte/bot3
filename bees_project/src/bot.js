'use strict';

const { Telegraf } = require('telegraf');
const logger = require('./utils/logger');

const { registerStartHandler }     = require('./handlers/startHandler');
const { registerAboutBeesHandler } = require('./handlers/aboutBeesHandler');
const { registerTypesHandler }     = require('./handlers/typesHandler');
const { registerHiveHandler }      = require('./handlers/hiveHandler');
const { registerBenefitsHandler }  = require('./handlers/benefitsHandler');
const { registerProductsHandler }  = require('./handlers/productsHandler');
const { registerFactsHandler }     = require('./handlers/factsHandler');
const { registerFaqHandler }       = require('./handlers/faqHandler');
const { registerHelpHandler }      = require('./handlers/helpHandler');
const { registerFallbackHandler }  = require('./handlers/fallbackHandler');

/**
 * Creates and configures the Telegraf bot instance.
 * Handlers are registered in deliberate order:
 *   1. Commands (/start, /help, /about, /menu)
 *   2. Specific hears listeners
 *   3. Inline action callbacks
 *   4. Fallback (catch-all) — must be LAST
 *
 * @param {string} token - Bot token from BotFather
 * @returns {import('telegraf').Telegraf}
 */
function createBot(token) {
  const bot = new Telegraf(token);

  // Global error handler — logs and silently ignores to avoid crashing
  bot.catch((err, ctx) => {
    logger.error(`Update ${ctx.updateType} caused an error:`, err.message);
  });

  // Register all handlers in the correct order
  registerStartHandler(bot);
  registerAboutBeesHandler(bot);
  registerTypesHandler(bot);
  registerHiveHandler(bot);
  registerBenefitsHandler(bot);
  registerProductsHandler(bot);
  registerFactsHandler(bot);
  registerFaqHandler(bot);
  registerHelpHandler(bot);

  // Fallback MUST be registered last
  registerFallbackHandler(bot);

  return bot;
}

module.exports = { createBot };
