'use strict';


var money = parseInt(prompt("How much money do you have for this mouth?"));
var date = prompt("Write down the date in YYYY-MM-DD format");

var q1 = prompt("Write your required expense this mouth:");
var q2 = parseInt(prompt("How much will it cost?"));


var appData = {
    money_ : money,
    date_ : date,
    income : [],
    optionalExpenses : {},
    savings : false,
    expenses : {},

};

for (let i = 0; i<2;i++){
    var q1 = prompt("Write your required expense this mouth:"),
        q2 = parseInt(prompt("How much will it cost?"));
    if ((typeof(q1))==='string' && (typeof(q1) != null) && (typeof(q2)) != null && q1!='' && q2 !=''){
        appData.expenses[q1] = q2;
    } else {
        
    }   
   
}

console.log(appData.expenses);

var moneyPerDay = (money - q2) / 30;
appData.moneyPerDay = moneyPerDay;
alert("You can spend " + parseInt(moneyPerDay) +" euros at day");


