#! /usr/bin/env node
import inquirer from "inquirer";
let randomNum = Math.floor(Math.random() * 100);
let obj;
do {
    obj = await inquirer.prompt([
        {
            name: "guessedNumber",
            type: "number",
            message: "Enter a number",
        },
    ]);
    if (randomNum > obj.guessedNumber) {
        console.log("Number is Greater than your entered number");
    }
    else if (randomNum < obj.guessedNumber) {
        console.log("Number is Lesser than your entered number");
    }
    else {
        console.log("Yahoo! You guessed the right number...");
    }
} while (randomNum != obj.guessedNumber);
