
'use strict';

function getNumber(num){
    num = parseInt(prompt("Write down a positive number"));
    let isCorrect = false;
    if(num<0 || !parseInt(num)){
        while(isCorrect==false){
            num = parseInt(prompt("Write down a number"));
            if(typeof(num)!='undefined' && num>0){
                isCorrect = true;
                return num;
            } else{
                continue;
            }
        }
    } else {
        return num;
    }
}

let money;
alert("Write down the amount of money you have for this mouth");
money = getNumber(money);
//money = checkNumber(money);
console.log(money);
console.log(typeof(money));

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
    let q1 = prompt("Describe your required expense this mouth: p.s it's not necessary");
    alert("How much will it cost?");
    let q2;
    q2 = getNumber(q2);
    console.log("required expense " + i +" is iqual to - " + q2);
    console.log(typeof(q2));
    appData.expenses[q1] = q2;
    money -= q2;
   
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