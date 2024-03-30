#! usr/bin/env node
import inquirer from "inquirer";
let myBalance = 12000;
let myPin = 7575;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select One Option",
            choices: ["Withdraw", "Check Balance", "Fast Cash", "Exit"],
        },
    ]);
    // withdraw code
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter you amount",
            },
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Infsufficient Balance");
        }
        else if ((myBalance -= amountAns.amount)) {
            console.log(`your remaining balance is ${myBalance}`);
        }
        // fastCash code
    }
    if (operationAns.operation === "Fast Cash") {
        let cash = await inquirer.prompt([
            {
                name: "options",
                type: "list",
                message: "Select any amount",
                choices: [500, 1000, 2000, 5000, 10000],
            },
        ]);
        myBalance -= cash.options;
        console.log(`your remaining balance is ${myBalance}`);
        console.log(`Thank you for using ATM`);
    }
    if (operationAns.operation === "Check Balance") {
        console.log(`Your account balance is ${myBalance}`);
    }
    else if (operationAns.operation === "Exit") {
        console.log(`OK by duaon me yad rakhna Allah Hafiz`);
    }
}
else if (!pinAnswer.pin) {
    console.log("Invalid Credential");
}
else {
    console.log("Incorrect pin code");
}
