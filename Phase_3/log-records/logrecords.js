let fs = require("fs");
let readline = require("readline-sync");

let firstname = readline.question("Enter your first name: ");
let lastname = readline.question("Enter your last name: ");
let gender = readline.question("Enter your gender: ");
let email = readline.question("Enter your email: ");

let time = new Date();
let userInfo = [];

let rawText = fs.readFileSync("data.json");
if(rawText != ""){
    let jsonData = JSON.parse(rawText);
    userInfo = jsonData;
}


let data = {fname:firstname,lname:lastname,gender:gender,email:email,date:time};
userInfo.push(data);

let dataString = JSON.stringify(userInfo);
fs.writeFileSync("data.json", dataString);
console.log("Data stored successfully.");