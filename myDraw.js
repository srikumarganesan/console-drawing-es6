/**
 * Created by GSrikumar on 12/11/2016.
 * This is the entry point of the application and it receives the commands from the user to draw the appropriate shapes
 */
'use strict';

const drawOperations = require('./modules/drawOperations');
const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const prompt = "Enter Command : ";
let command = "";

/**
 * method to get the input from the user.
 * User will be prompted to enter the commands until he types the letter Q
 */
let getUserInput = function() {
    r1.question ('Enter command: ', (answer) => {
        let inputArray = answer.split(" ");
        command = inputArray.shift();
        if (command === "Q") {
            return r1.close();
        } else {
            drawOperations[command](...inputArray)
                .then(success => {
                    getUserInput();
                })
                .catch(err => {
                    console.log(err);
                    getUserInput();
                });

        }
    });
};

getUserInput();
