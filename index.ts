#! /usr/bin/env node

import inquirer from "inquirer";

let randomNum: number = Math.floor(Math.random() * 100);

console.log("\n\t Number Guessing Game \t\n");

let obj;
do {
  obj = await inquirer.prompt([
    {
      name: "guessedNumber",
      type: "number",
      message: "Guess number between 1 - 100 : ",
    },
  ]);

  if (randomNum > obj.guessedNumber) {
    console.log("Number is Greater than " + obj.guessedNumber);
  } else if (randomNum < obj.guessedNumber) {
    console.log("Number is Lesser than " + obj.guessedNumber);
  } else {
    console.log("Yahoo! You guessed the right number...");
  }
} while (randomNum != obj.guessedNumber);
