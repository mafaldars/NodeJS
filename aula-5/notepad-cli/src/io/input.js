const { createInterface } = require('readline');

const userInput = async (message, defaultText = null) => {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    if (defaultText) {
        rl.write(defaultText);
    }

    return new Promise((resolve) => {
        rl.question(message, answer => {
            resolve(answer);
            rl.close();
        })
    });
}

const alert = async (message, cb) => {
    const input = await userInput(`${message} (y/n)`);

    if (input.toLowerCase() === 'y') {
        cb();
    }
}

module.exports = { userInput, alert };