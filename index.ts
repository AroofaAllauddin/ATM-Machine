import inquirer from "inquirer";

// Initialize user balance and pin code //
let myBalance = 50000;
let myPin = 1234;

// Print Welcome message //
console.log("Welcome to Aroofa Allauddin - ATM Machine");

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code:"
    }
])
if (pinAnswer.pin === myPin){
console.log("Pin is Correct, Login Successfully!");
// console.log('Current Account balance is ${myBalance}')

let operationAnswer = await inquirer.prompt([
    {
        name: "operation",
        type: "list",
        message: "Select an option:",
        choices: ["Withdraw Amount","Check Balance"]
    }
])
if(operationAnswer.operation === "Withdraw Amount"){
    let withdrawAnswer = await inquirer.prompt([
        {
            name: "withdrawMethod",
            type: "list",
            message: "Select a Withdrawal Method:",
            choices: ["Fast Cash","Enter Amount"]
        }
    ])
    if(withdrawAnswer.withdrawMethod === "Fast Cash"){
        let fastCashAnswer = await inquirer.prompt([
            {
                name:"fastCash",
                type:"list",
                message:"Select Amount:",
                choices: [1000, 5000, 10000,50000]
            }
        ])
        if(fastCashAnswer.astCash > myBalance){
            console.log("Insufficient Balance");
            

        }
        else{
            myBalance -= fastCashAnswer.fastCash
            console.log(`${fastCashAnswer.fastCash} Withdraw Successfully`);
            console.log(`Your Remainning Balance is:${myBalance}`);
            
            
        }

    }

    if(withdrawAnswer.withdrawMethod === "Enter Amount"){
        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withdraw:"
            }
        ])
        if(amountAnswer.amount > myBalance){
            console.log("Insufficient Balance");
            
        }
    else{
        myBalance -= amountAnswer.amount;
        console.log(`${amountAnswer.amount} Withdraw Successfully`);
        console.log(`Your Remainning Balance is: ${myBalance}`);
        
    }
    }
    
}
else if(operationAnswer.operation === "Check Balance"){
console.log(`Your Current Balance is ${myBalance}`);
}

}
else{
    console.log('Pin is Incorrect, Try Again!');
    
}