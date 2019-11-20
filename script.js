'use strict';
function checkNumber(num){
    if(num<0 || typeof(num)!='number'){
    while (!parseInt(num) || num < 0){
        if(num == 0){
            return num;
        }
        alert("Write down a number");
        num = parseInt(prompt("How much money do you have for this mouth?"));
        if(parseInt(num) && num>=0){
            return num;
        } else if(num<0){
            num = parseInt(prompt("Write down a positive number(your money for this mouth)"));
        }
      }
    } else {
        return num;
    } 

}

var money = parseInt(prompt("How much money do you have for this mouth?"));
money = checkNumber(money);
console.log(money);

var date = prompt("Write down the date in YYYY-MM-DD format");

var appData = {
    money_ : money,
    date_ : date,
    income : [],
    optionalExpenses : {},
    savings : false,
    expenses : {},
    moneyPerDay_ : moneyPerDay,

};

for (let i = 0; i<2;++i){
    var q1 = prompt("Describe your required expense this mouth: p.s it's not necessary"),
        q2 = parseInt(prompt("How much will it cost?"));
        money = money - q2;
    appData.expenses[q1] = q2;
   
}

if (money <= 0){
    var moneyPerDay = 0;
    appData.moneyPerDay_ = moneyPerDay;
    alert("Sorry, you have nothing to spend");

} else { 

    var moneyPerDay = money / 30;
    appData.moneyPerDay = moneyPerDay;

    alert("You can spend " + parseInt(moneyPerDay) + " euros per day");


}