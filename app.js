const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token , db } = require('./config.json');
//const mongoose = require('mongoose');

//const client = new Client({ intents: [GatewayIntentBits.Guilds] });
/*
const dbConnec = async () => {
    try {
        await mongoose.connect(db.mongodb.uri,{
            autoIndex: false,
            maxPoolSize: 10,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
            family: 4
        });
        console.log("Connexion à la DB : OK");
    }
    catch {
        console.error("Error de connexion à la DB");
    }
}



client.once(Events.ClientReady, async c =>  {
    console.log(`Ready! Logged in as ${c.user.tag}`);
    dbConnec();
});


// Log in to Discord with your client's token
client.login(token);

*/
