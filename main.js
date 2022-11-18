const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
const bot = new Client({ intents: [GatewayIntentBits.Guilds] });

bot.login(token);

bot.on("ready", async() => {
   console.log(`${bot.user.tag} est en ligne !` );
});