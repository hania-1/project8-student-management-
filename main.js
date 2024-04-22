#! /usr/bin/env node
import inquirer from "inquirer";
let studentInformation = [];
let condition = true;
while (condition) {
    let nameofstd = await inquirer.prompt([
        {
            //your name
            name: "Name",
            message: "Enter student name",
            type: "input"
        }
    ]);
    //student 5 digit ID
    const studentID = Math.floor(10000 + Math.random() * 90000);
    console.log(`student "${nameofstd.Name}" added with ID ${studentID}`);
    //your choosen course
    let courses = await inquirer.prompt([
        {
            name: "course",
            message: "Enter course",
            type: "list",
            choices: [
                "Phython Programming",
                "Web Development",
                "Data Science",
                "Cybersecurity",
                "Mobil App Development",
                "Colud Computing",
                "Artificial Intelligence"
            ]
        }
    ]);
    //if you want to add more course of your choice
    let addmorecourse = await inquirer.prompt([
        {
            name: "morecourse",
            message: "Want to add any other course?",
            type: "list",
            choices: ["Yes", "No"]
        }
    ]);
    let morecourse;
    //if yes..
    if (addmorecourse.morecourse === "Yes") {
        morecourse = await inquirer.prompt([
            {
                name: "newcourse",
                message: "Enter course you like",
                type: "input",
            }
        ]);
        console.log("You added new course!");
        //if no..
    }
    else {
        console.log(` no new course added! `);
    }
    //your balance
    let yourBalance = 15000;
    let balance = await inquirer.prompt({
        //what you want, view balance or payment
        name: "Balance",
        message: "Enter what you want",
        type: "list",
        choices: ["ViewBalance", "PayFee"]
    });
    let viewbalance;
    let paymentAmount;
    //if view balance..
    if (balance.Balance === "ViewBalance") {
        viewbalance = yourBalance;
        console.log(`Your Balance is "${yourBalance}"`);
        //if pay fee.. 
    }
    else if (balance.Balance === "PayFee") {
        let amountans = await inquirer.prompt({
            name: "amount",
            message: "Enter your amount",
            type: "number",
        });
        //payment process..
        paymentAmount = amountans.amount;
        if (paymentAmount < yourBalance) {
            yourBalance -= paymentAmount;
            console.log("Your current balance " + yourBalance);
        }
        else if (amountans.amount > yourBalance) {
            console.log("Your payment is unable because your current balance is $ " + yourBalance);
        }
    }
    //if you want to add new stds..
    let addmorestd = await inquirer.prompt({
        name: "newstd",
        message: "Want to add new student?",
        type: "confirm",
        default: false
    });
    condition = addmorestd.newstd;
    //condition that if you want it,or not...
    if (!condition) {
        console.log("Completed!");
    }
    //your overall status...
    console.log("\n Your status! ");
    console.log("*  Name:", nameofstd.Name);
    console.log("*  ID:", studentID);
    console.log("*  Course:", courses.course);
    if (morecourse) {
        console.log("*  Additional course:", morecourse.newcourse);
        if (viewbalance) {
            console.log("*  Your Balance:", viewbalance);
        }
        ;
        if (paymentAmount) {
            console.log("*  Payment Amount:", paymentAmount);
        }
    }
}
//code ends...
