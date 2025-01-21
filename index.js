const TelegramBot = require('node-telegram-bot-api');

// List of Admin user IDs (replace with actual admin IDs)
const ADMIN_USER_IDS = [6583408221, 5285593056, 7008758181]; // Add more admin IDs here as needed

// Create a new Telegram bot instance
const bot = new TelegramBot('7401101102:AAHiApO0qgSqhd4IgcOa4rxSAsBZVK0W_tI', { polling: true });

// Command handler function for /br
bot.onText(/\/br (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;
    const args = match[1].split(' ');

    // Check if the user is an authorized admin
    if (!ADMIN_USER_IDS.includes(userId)) {
        bot.sendMessage(chatId, "You are not authorized to use this command.");
        return;
    }

    // Check if there are enough arguments (at least 3 per transaction)
    if (args.length % 3 !== 0) {
        bot.sendMessage(chatId, "Usage: /br <gameid> <serverid> <amount> ...");
        return;
    }

    // Initialize arrays to collect the gameid, serverid, and amount values
    const gameids = [];
    const serverids = [];
    const amounts = [];

    // Iterate over the arguments in chunks of 3 (gameid, serverid, amount)
    for (let i = 0; i < args.length; i += 3) {
        const gameid = args[i];
        const serverid = args[i + 1];
        const amount = args[i + 2];

        gameids.push(gameid);
        serverids.push(serverid);
        amounts.push(amount);
    }

    // Check the admin ID to set the store name
    const storeName = (userId === 6583408221) ? "Joy Game Store" : "Hannary Game Store";

    // Create the transaction report string
    let transactionReport = "=== 𝐓𝐫𝐚𝐧𝐬𝐚𝐜𝐭𝐢𝐨𝐧 𝐑𝐞𝐩𝐨𝐫𝐭 ===\n\n";

    // Loop to format each transaction in the report with no extra blank lines between them
    gameids.forEach((gameid, index) => {
        if (index > 0) transactionReport += "\n"; // Add a blank line between transactions
        transactionReport += `Order Status : SUCCESS ✅\nGame ID : ${gameid}\nGame Server : ${serverids[index]}\nItem : ${amounts[index]} 💎\n`;
    });

    // Add the final line after the reports
    transactionReport += `\n=================== \nThank you for your purchase from ${storeName}.`;

    // Send the customized "Transaction Report" message to the user
    bot.sendMessage(chatId, transactionReport);
});

// Command handler function for /ph
bot.onText(/\/ph (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;
    const args = match[1].split(' ');

    // Check if the user is an authorized admin
    if (!ADMIN_USER_IDS.includes(userId)) {
        bot.sendMessage(chatId, "You are not authorized to use this command.");
        return;
    }

    // Check if there are enough arguments (at least 3 per transaction)
    if (args.length % 3 !== 0) {
        bot.sendMessage(chatId, "Usage: /ph <gameid> <serverid> <amount> ...");
        return;
    }

    // Initialize arrays to collect the gameid, serverid, and amount values
    const gameids = [];
    const serverids = [];
    const amounts = [];

    // Iterate over the arguments in chunks of 3 (gameid, serverid, amount)
    for (let i = 0; i < args.length; i += 3) {
        const gameid = args[i];
        const serverid = args[i + 1];
        const amount = args[i + 2];

        gameids.push(gameid);
        serverids.push(serverid);
        amounts.push(amount);
    }

    // Check the admin ID to set the store name
    const storeName = (userId === 6583408221) ? "Joy Game Store" : "Hannary Game Store";

    // Create the transaction report string
    let transactionReport = "=== 𝐓𝐫𝐚𝐧𝐬𝐚𝐜𝐭𝐢𝐨𝐧 𝐑𝐞𝐩𝐨𝐫𝐭 ===\n\n";

    // Loop to format each transaction in the report with no extra blank lines between them
    gameids.forEach((gameid, index) => {
        if (index > 0) transactionReport += "\n"; // Add a blank line between transactions
        transactionReport += `Order Status : SUCCESS ✅\nGame ID : ${gameid}\nGame Server : ${serverids[index]}\nItem : ${amounts[index]}💎\n`;
    });

    // Add the final line after the reports
    transactionReport += `\n=================== \nThank you for your purchase from ${storeName}.`;

    // Send the customized "Transaction Report" message to the user
    bot.sendMessage(chatId, transactionReport);
});
