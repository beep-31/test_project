
'use strict';

function getNumber(num){
    num = parseInt(prompt("Write down a positive number"));
    let isCorrect = false;
    if(num<0 || !parseInt(num)){
        while(isCorrect==false){
            num = parseInt(prompt("Write down a number"));
            if(typeof(num)!='undefined' && num>=0){
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
    optioanlMoneyDay_ : optioanlMoneyDay,

};

let requieredExpenses = 0;
//requiered expenses
for (let i = 1; i<3;++i){
    let q1 = prompt("Describe your required expense this mouth: p.s it's not necessary");
    alert("How much will it cost?");
    let q2;
    q2 = getNumber(q2);
    console.log("required expense " + i +" is iqual to - " + q2);
    console.log(typeof(q2));
    appData.expenses[q1] = q2;
    requieredExpenses += q2;
   
}

let moneyOpt = money;
let optionalTotal = 0;
//optional expenses
function optional(){
    
    for (let i=1; i < 4; i++){
        let a1 = prompt("Any optional expenses? p.s it's not necessary(print 'none' if you don't have one)");
        if(a1 == 'none'){
            break;
        }
        alert('How much will it cost?');
        let a2;
        a2 = getNumber(a2);
        optionalTotal+=a2;
        appData.optionalExpenses[a1] = a2;
        }
}
optional();

//only requiered expenses
if (money <= 0){
    var moneyPerDay = 0;
    appData.moneyPerDay_ = moneyPerDay;
    alert("Sorry, you have nothing to spend");

} else { 
    var moneyPerDay = (money - requieredExpenses) / 30;
    appData.moneyPerDay_ = moneyPerDay;

    alert("You can spend " + parseInt(moneyPerDay) + " euros per day");
}

//optional too

if(optionalTotal==0){
    alert("You don't have any optioanl expenses");
} else{
    var optioanlMoneyDay = 0; 
    optioanlMoneyDay = (moneyOpt - optionalTotal - requieredExpenses) / 30;
    alert("You can spend " + parseInt(optioanlMoneyDay) + " euros per day(Your optional expenses)");
    appData.optioanlMoneyDay_ = optioanlMoneyDay;
}