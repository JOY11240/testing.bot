require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json()); // body-parser is not necessary; express.json() is built-in

const { TOKEN, SERVER_URL } = process.env;
const TELEGRAM_API = `https://api.telegram.org/bot${TOKEN}`;
const URI = `/webhook/${TOKEN}`;
const WEBHOOK_URL = `${SERVER_URL}${URI}`;

// Set webhook initialization
const initWebhook = async () => {
  try {
    const res = await axios.get(`${TELEGRAM_API}/setWebhook?url=${WEBHOOK_URL}`);
    console.log('Webhook set:', res.data);
  } catch (error) {
    console.error('Error setting webhook:', error.message);
  }
};

// Define the webhook route
app.post(URI, async (req, res) => {
  try {
    const chatId = req.body.message.chat.id;
    const text = req.body.message.text;

    await axios.post(`${TELEGRAM_API}/sendMessage`, {
      chat_id: chatId,
      text: `You said: ${text}`, // Echoing message with additional text
    });
    res.status(200).send();
  } catch (error) {
    console.error('Error processing message:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

// Vercel-compatible export
module.exports = app;

// Set webhook on deployment
initWebhook();
