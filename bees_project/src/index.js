'use strict';

require('dotenv').config();
const { createBot } = require('./bot');
const logger = require('./utils/logger');

const token = process.env.BOT_TOKEN;

if (!token) {
  logger.error('BOT_TOKEN is not set. Please check your .env file.');
  process.exit(1);
}

const bot = createBot(token);

// Graceful stop on SIGINT / SIGTERM (Ctrl+C or Docker stop)
process.once('SIGINT', () => {
  logger.info('Received SIGINT — stopping bot...');
  bot.stop('SIGINT');
});
process.once('SIGTERM', () => {
  logger.info('Received SIGTERM — stopping bot...');
  bot.stop('SIGTERM');
});

// Launch with long polling (default)
// To switch to webhooks later: replace bot.launch() with bot.launch({ webhook: { ... } })
bot
  .launch()
  .then(() => {
    logger.info('🐝 Bee bot started successfully in polling mode!');
    logger.info(`Bot username: @${bot.botInfo?.username ?? 'unknown'}`);
  })
  .catch((err) => {
    logger.error('Failed to start bot:', err.message);
    process.exit(1);
  });
