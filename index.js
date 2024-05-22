import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';
import * as cron from 'node-cron';

// Load environment variables
dotenv.config();
console.log("Environment variables loaded.");

// Database connection
var con = database.DatabaseConnect();

// Create an instance of the Discord bot.
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});
client.on('ready', (c) => {
    console.log(`${c.user.tag} is online`);
});

// Bot message commands
client.on('messageCreate', async (message) => {
    // Exit on self message.
    if (message.author.bot || message.channel.id != '1042890374626168923') return;

    
    // Bot commands. See botcommands.js for logic
    switch (message.content) {
        case '/timer':
            break;
        default:
            message.reply('Unknown command.');
            break;
    };
});

// Bot interactions
client.on("interactionCreate", async (interaction) => {
    if (!interaction.isButton()) {
        return;
    }
    // Check if the interacction and message user are the same
    const userKeys = interaction.message.mentions.users.keys();
    const key = userKeys.next().value;
    if (interaction.member.user.id !== key)return;

    // Switch on shop commands
    switch (interaction.customId) {
        default:
            break;
    }
});

// Log the bot into Discord.
client.login(process.env.DISCORD_TOKEN);
