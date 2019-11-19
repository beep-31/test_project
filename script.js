'use strict';


var money = parseInt(prompt("How much money do you have for this mouth?"));
var date = prompt("Write down the date in YYYY-MM-DD format");


var appData = {
    money_ : money,
    date_ : date,
    income : [],
    optionalExpenses : {},
    savings : false,
    expenses : {},

};

for (let i = 0; i<2;++i){
    var q1 = prompt("Describe your required expense this mouth: p.s it's not necessary"),
        q2 = parseInt(prompt("How much will it cost?"));
        money = money - q2;
    appData.expenses[q1] = q2;
   
}

console.log(appData.expenses);

var moneyPerDay = money / 30;
appData.moneyPerDay = moneyPerDay;
alert("You can spend " + parseInt(moneyPerDay) +" euros at day");
alert("Try one more time!");



