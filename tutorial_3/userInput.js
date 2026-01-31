const fs = require('fs');
const readline = require('readline');

function askQuestion(inputMessage, rl) {
    return new Promise((resolve) => {
        rl.question(inputMessage, (answer) => {
            resolve(answer);
        });
    });
}

async function userInputFunc(message, cb) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    let userInputValue = await askQuestion(message, rl);
    rl.close();
    cb(userInputValue)
}

module.exports = userInputFunc

// userInputFunc("Enter your name: ", function(userInput){

//     console.log(`user input is ${userInput}`)
// });