'use strict';


var money = parseInt(prompt("How much money do you have for this mouth?"));
var date = prompt("Write down the date in YYYY-MM-DD format");

var q1 = prompt("Write your required expense this mouth:");
var q2 = parseInt(prompt("How much will it cost?"));


var appData = {
    money_ : money,
    date_ : date,
    income : [0,0,0,0],
    optionalExpenses : 0,
    savings : false,
    expenses : {q1,q2},

};

console.log(appData.expenses);
console.log(appData.date_);

var moneyDay = (money - q2) / 30;
alert("You can spend " + parseInt(moneyDay) +" euros at day");


