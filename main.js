console.clear();
const config = require('./config.json')
const mineflayer = require('mineflayer');
const whitelist = require('./whitelist.json');
const message = require('./messages.json');

const bot = mineflayer.createBot({
    host: config.SERVER.IP,
    username: config.BOT_NAME,
    port: config.SERVER.PORT,
})

console.log(message.LOGIN.CONSOLE.CONNECTING.split('%IP%').join(config.SERVER.IP).split('%PORT%').join(config.SERVER.PORT))

bot.on('login', () => {
    console.log(message.LOGIN.CONSOLE.CONNECTED)
    if (config.IN_GAME.SEND_ON_CONNECT) {
        bot.chat(message.LOGIN.IN_GAME)
    }
})

bot.on('playerJoined', (player) => {
    if (player.username != bot.username) {
        if (!whitelist[player.username]) {
            if (config.IN_GAME.SEND_ON_KICK_ANOTHER_PLAYER) {
                console.log(message.WHITELIST.IN_GAME.split('%NAME%').join(player.username))
            }
            if (config.IN_GAME.SEND_ON_KICK_ANOTHER_PLAYER) {
                bot.chat(message.WHITELIST.IN_GAME.split('%NAME%').join(player.username))
            }
            bot.chat('/kick ' + player.username + ' ' + message.WHITELIST.KICK_REASON)
        }
    }
})

bot.on('kicked', console.log)
bot.on('error', console.log)