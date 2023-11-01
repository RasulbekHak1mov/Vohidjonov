
const botUsername = 'HAKIMOV_TG';
const botPassword = 'legenda';

const serverIP = 'imuslimbeki.aternos.me';
const serverPort = 39779

//const serverIP = 'imuslimbeki.aternos.me';
//const serverPort = 39779;

const bot = mineflayer.createBot({
    host: serverIP,
    port: serverPort,
    username: botUsername,
    password: botPassword,
});

bot.once('spawn', () => {
    console.log(`SPAWN PASSED`);
    login(botUsername)
    register(botUsername);
});

bot.on('chat', (username, message) => {
    // Hammasi uchun buyruqlar:
    if (username == `HAKIMOV` && message == `tpame`) {
        if (bot.chat(`/tpa HAKIMOV`)) bot.chat(`Tpa yuborildi!`)
    }
    if (username == `HAKIMOV` && message == `test`) {
        bot.chat(`ishlayapti`)
    }


    if (username == `HAKIMOV` && message == `back`) {
        if (bot.chat(`/back`)) bot.chat(`Orqaga qaytdim!`)
    }
    if (username == `HAKIMOV` && message == `mine`) {
        if (dig()) console.log(`bot-1 qaziyapman!`);
    }
    // Shaxsiy buyruqlar
    if (username == `HAKIMOV` && message == `back1`) {
        if (bot.chat(`/back`)) bot.chat(`Orqaga qaytdim!`)
    }
    if (username == `HAKIMOV` && message == `tpame1`) {
        if (bot.chat(`/tpa HAKIMOV`)) bot.chat(`Tpa yuborildi!`)
    }
    if (username == `HAKIMOV` && message == `tpayou1`) {
        if (bot.chat(`/tpaccept HAKIMOV`)) bot.chat(`Tpa qabul qilindi!`)
    }
    if (username == `HAKIMOV` && message == `mine1`) {
        if (dig()) bot.chat(`qaziyapman!`)
    }
    if (username == `HAKIMOV` && message == `isgo1`) {
        if (bot.chat(`/is go`)) bot.chat(`isga qaytdim!`)
    }
    if (username == `HAKIMOV` && message == `drop1`) {
        if (drop()) bot.chat(`buyumlar tashlandi!`)
    }

});



function login(username) {
    bot.chat(`/login ${botPassword}`)
    console.log(`LOGIN PASSED`);
}

function register(username) {
    bot.chat(`/register ${botPassword} ${botPassword}`);
}
console.log(bot.chat);
async function dig() {
    if (!bot.heldItem || !bot.heldItem.name.includes('pickaxe')) {
        var pickaxe = bot.inventory.items().filter(i => i.name.includes('pickaxe'))[0];
        if (pickaxe) await bot.equip(pickaxe, 'hand')
        if (!pickaxe) bot.quit();
    }
    var block = bot.blockAtCursor(7);
    if (!block) return setTimeout(function () {
        dig();
    }, 100);
    await bot.dig(block, 'ignore', 'raycast')
    dig()
}

function drop() {
    const inventory = bot.inventory.items();
    inventory.forEach((item) => {
        // Check if the item is not armor and not a pickaxe, then toss it
        if (!item.name.includes('helmet') && !item.name.includes('chestplate') &&
            !item.name.includes('leggings') && !item.name.includes('boots') &&
            item.name.includes('pickaxe')) {
            bot.tossStack(item);
        }
    });
}

const sortItems = (a, b) => {
    if (a.value > b.value) return -1
    if (a.value < b.value) return 1
    return 1
}

module.exports = (bot) => {
    const ChatMessage = require('prismarine-chat')(bot.registry)

    class ScoreBoard {
        constructor(packet) {
            this.name = packet.name
            this.setTitle(packet.displayText)
            this.itemsMap = {}
        }

        setTitle(title) {
            try {
                this.title = JSON.parse(title).text // version>1.13
            } catch {
                this.title = title
            }
        }

        add(name, value) {
            this.itemsMap[name] = { name, value }
            this.itemsMap[name] = {
                name,
                value,
                get displayName() {
                    if (name in bot.teamMap) {
                        return bot.teamMap[name].displayName(name)
                    }
                    return new ChatMessage(name)
                }
            }
            return this.itemsMap[name]
        }

        remove(name) {
            const removed = this.itemsMap[name]
            delete this.itemsMap[name]
            return removed
        }

        get items() {
            return Object.values(this.itemsMap).sort(sortItems)
        }
    }

    ScoreBoard.positions = {
        get list() {
            return this[0]
        },

        get sidebar() {
            return this[1]
        },

        get belowName() {
            return this[2]
        }
    }
    return ScoreBoard
}