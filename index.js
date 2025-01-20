// Import the Telegram Bot API library
const TelegramBot = require('node-telegram-bot-api');

require("dotenv").config();

// Your bot token from BotFather
const token = process.env.Telegram_Bot_API;  // <--- Replace with your actual token

// Create a new bot instance
const bot = new TelegramBot(token, { polling: true });

// When the bot receives a message, it will respond
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  
  // Send a message back to the user
  bot.sendMessage(chatId, 'Hello, I am your bot!');
});
