const fs = require("fs");
module.exports = async() => {
    const files = fs.readdirSync("../commands").filter(f => f.endsWith(".js")).forEach( async file => {
            const command = require(`../commands/${file}.js`);
    });
}