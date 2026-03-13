You are a senior Telegram bot engineer and product-minded backend developer.

Build a complete, production-ready Telegram bot about bees, with all bot texts in Russian. The bot must be useful, cleanly structured, scalable, and easy to maintain.

## Main goal
Create a Telegram bot that provides Russian-language educational information about bees. The bot should help users learn about bees in a simple, structured, and interactive way through buttons and short well-formatted messages.

## Core requirements
1. The bot language must be Russian.
2. The bot must use inline keyboards and/or reply keyboards where appropriate.
3. The bot must have a clear menu structure.
4. The bot must be beginner-friendly and intuitive.
5. The bot should provide factual, educational, general information about bees.
6. The code must be clean, modular, and production-style.
7. The solution must be complete, not a demo sketch.

## Tech requirements
- Use Node.js
- Use Telegraf
- Use dotenv for environment variables
- Use a modular folder structure
- Use async/await
- Add basic error handling
- Add clear comments only where useful
- Include package.json
- Include a README with setup and run instructions
- Use long polling by default
- Make architecture ready for later migration to webhook if needed

## Functional requirements
When the user starts the bot, show a friendly Russian welcome message and display a main menu with buttons.

## Suggested main menu buttons
Use logical buttons like these:
1. "О пчёлах"
2. "Виды пчёл"
3. "Как живёт улей"
4. "Чем полезны пчёлы"
5. "Продукты пчеловодства"
6. "Интересные факты"
7. "Вопрос-ответ"
8. "Помощь"
9. "Назад в меню"

You may improve button names slightly if needed, but keep the idea and Russian language.

## What each section should do

### 1. "О пчёлах"
Give a short and clear introduction:
- what bees are
- why they are important
- where they live
- what role they play in nature

### 2. "Виды пчёл"
Explain in simple Russian:
- матка
- рабочие пчёлы
- трутни
Also explain their differences and roles.

### 3. "Как живёт улей"
Explain:
- structure of a hive
- division of roles
- how bees communicate
- how they collect nectar
- how honey is produced in general terms

### 4. "Чем полезны пчёлы"
Explain:
- pollination
- importance for agriculture
- importance for biodiversity
- ecological value

### 5. "Продукты пчеловодства"
Include short sections about:
- мёд
- воск
- прополис
- перга
- маточное молочко
Use concise, informative text.

### 6. "Интересные факты"
Return random facts about bees.
Prepare at least 15 interesting facts in Russian.
Each click can show a new random fact with buttons:
- "Ещё факт"
- "Назад в меню"

### 7. "Вопрос-ответ"
Create a simple FAQ with buttons for common questions such as:
- Почему пчёлы жалят?
- Как пчёлы делают мёд?
- Сколько живёт пчела?
- Чем отличается оса от пчелы?
- Что делать, если ужалила пчела?
Answers must be general educational information, short and clear.

### 8. "Помощь"
Explain how to use the bot.

### 9. "Назад в меню"
Always return the user to the main menu.

## UX requirements
- Messages should not be too long
- Split very large content into readable chunks
- Use emojis carefully and moderately
- Keep text readable and pleasant
- Avoid clutter
- Every section should have navigation buttons
- The bot should feel like a polished educational assistant

## Content style
- Russian language only for user-facing bot content
- Tone: friendly, informative, respectful
- Explanations should be understandable for ordinary users, including children or beginners
- Avoid overly scientific language unless briefly explained
- No unsupported medical or dangerous advice
- If mentioning bee stings, keep it general and safe:
  say that serious reactions require contacting a medical professional

## Architecture requirements
Generate a clean project structure, for example:
- src/
  - bot.js
  - commands/
  - handlers/
  - keyboards/
  - data/
  - utils/
- .env
- .env.example
- package.json
- README.md

## Code requirements
- Separate content/data from handlers if possible
- Keep Russian informational texts in separate constants/data files
- Reuse menu-building functions
- Avoid duplicated code
- Provide robust start command
- Handle unknown text input gracefully:
  respond with a Russian message and suggest using menu buttons

## Extra features to include
Add these useful features too:
1. Random bee fact
2. FAQ section
3. Back button navigation
4. Main menu command
5. /help command
6. /about command
7. graceful fallback for unsupported user input

## Commands
Implement at least:
- /start
- /help
- /menu
- /about

## Deliverables
I want the final answer to include:
1. Full project structure
2. Full code for all files
3. package.json
4. .env.example
5. README with installation and run instructions
6. Clear explanation of how to launch the bot

## Important
- Do not give only explanations
- Write the full working code
- Make the code complete and runnable
- Use best practices
- Assume I want to copy the project and run it immediately after adding BOT_TOKEN

## Additional implementation expectations:
- Prefer CommonJS unless there is a strong reason to use ESM
- Keep all Russian texts centralized in data files
- Use Telegraf Scenes only if really needed; otherwise keep it simpler
- Make navigation stable and predictable
- Ensure every button works correctly
- Validate that the bot does not break when users press buttons repeatedly
- Add a simple logger with console output for errors and startup events
- Keep the code junior-friendly to read, but senior-level in structure

Now generate the entire project.


8124978812:AAFj7yaC0heiNyYYAYauTfnM_Vs7k0352jM - this is bot token
