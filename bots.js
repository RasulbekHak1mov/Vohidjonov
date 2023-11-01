const mineflayer = require('mineflayer');

const botUsername2 = 'Eleven_Prod';
const botPassword2 = '12345678gg'
const bot2 = mineflayer.createBot({
    host: 'hypixel.uz',
    port: 25565,
    username: `Eleven_Prod`,
    password: `12345678gg`,
});

bot2.once('spawn', () => {
    console.log(`SPAWN PASSED`);
    login(botUsername2);
    register(botUsername2);
});

bot2.on('chat', (username, message) => {
    // All commands:
    if (username == `Vohidjonov` && message == `tpame`) {
        if (bot2.chat(`/tpa Vohidjonov`)) bot2.chat(`Tpa yuborildi!`);
    }
    if (username == `Vohidjonov` && message == `test`) {
        bot2.chat(`ishlayapti`);
    }

    if (username == `Vohidjonov` && message == `back`) {
        if (bot2.chat(`/back`)) bot2.chat(`Orqaga qaytdim!`);
    }
    if (username == `Vohidjonov` && message == `mine`) {
        if (dig()) console.log(`bot-1 qaziyapman!`);
    }

    // Personal commands
    if (username == `Vohidjonov` && message == `back1`) {
        if (bot2.chat(`/back`)) bot2.chat(`Orqaga qaytdim!`);
    }
    if (username == `Vohidjonov` && message == `tpame1`) {
        if (bot2.chat(`/tpa Vohidjonov`)) bot2.chat(`Tpa yuborildi!`);
    }
    if (username == `Vohidjonov` && message == `tpayou1`) {
    if (bot2.chat(`/tpaccept Vohidjonov`)) bot2.chat(`Tpa qabul qilindi!`);
}
if (username == `Vohidjonov` && message == `mine1`) {
    if (dig()) bot2.chat(`qaziyapman!`);
}
if (username == `Vohidjonov` && message == `isgo1`) {
    if (bot2.chat(`/is go`)) bot2.chat(`isga qaytdim!`);
}
if (username == `Vohidjonov` && message == `drop1`) {
    if (drop()) bot2.chat(`buyumlar tashlandi!`);
}
});

function login(username) {
    bot2.chat(`/login ${botPassword2}`);
    console.log(`LOGIN PASSED`);
}

function register(username) {
    bot2.chat(`/register ${botPassword2} ${botPassword2}`);
}

async function dig() {
    if (!bot2.heldItem || !bot2.heldItem.name.includes('pickaxe')) {
        var pickaxe = bot2.inventory.items().filter(i => i.name.includes('pickaxe'))[0];
        if (pickaxe) await bot2.equip(pickaxe, 'hand');
        if (!pickaxe) bot2.quit();
    }
    var block = bot2.blockAtCursor(7);
    if (!block) return setTimeout(function () {
        dig();
    }, 100);
    await bot2.dig(block, 'ignore', 'raycast');
    dig();
}

function drop() {
    const inventory = bot2.inventory.items();
    inventory.forEach((item) => {
        // Check if the item is not armor and not a pickaxe, then toss it
        if (!item.name.includes('helmet') && !item.name.includes('chestplate') &&
            !item.name.includes('leggings') && !item.name.includes('boots') &&
            item.name.includes('pickaxe')) {
            bot2.tossStack(item);
        }
    });
}

const botUsername = 'HAKIMOV_TG';
const botPassword = 'legenda';

const serverIP = 'hypixel.uz';
const serverPort = 25565

//const serverIP = 'hypixel.uz';
//const serverPort = 25565;

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