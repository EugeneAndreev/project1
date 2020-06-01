'use strict';
let money = +prompt ("Ваш бюджет на месяц?"); //добавить ''
let time = prompt ("Введите дату в формате YYYY-MM-DD"); //добавить ''
//let expenses = {}; // не надо тут достаточно в обекте
// let optionalExpences ={}; // не надо тут достаточно в объекте
// let income = [];// не надо тут достаточно в объекте

// let budgetEntry1 = prompt ("Введите обязательную строку расходов в этом месяце", "");
// let exp1 = prompt ("Во сколько обойдется?", "");
// let budgetEntry2 = prompt ("Введите обязательную строку расходов в этом месяце", "");
// let exp2 = prompt ("Во сколько обойдется?", "");

let appData = {
    budget: money,
    timeData: time,
    // expenses : {
    //     budgetEntry1 : exp1,  //если нужно определить имя свойства - писать в квадратгых скобках вычисляемые свойства
    //     budgetEntry2 : exp2,  //https://learn.javascript.ru/object - взять имя свойства из перепменной 
    // },
    expenses: {},
    optionalExpences: {},
    income : [],
    savings:false,
};


// for (let i=0; i<2; i++) {
//     let budgetEntry = prompt ("Введите обязательную строку расходов в этом месяце");
//     let exp = prompt ("Во сколько обойдется?", "");
    
//     if (typeof(budgetEntry) === "string" && typeof(budgetEntry) != "null"  && typeof(exp) != "null" 
//     && budgetEntry != "" & exp != "" && budgetEntry.length > 5 ) {
//     console.log("Done");
//     appData.expenses[budgetEntry] = exp;
//     }
//     else {
//         alert ("Строка бюджета должа быть не менее 5 символов!")
//     console.log('i=' + --i);
// }
// // else // если проверка не срабатывает - тио теряем статью, сделать возврат на цикл обратно - готово
// };

// еще 2 типа цикла
// let i=0;
// while (i<2) {
//         i++;            
//     // console.log("цикл while");
//         let budgetEntry = prompt ("Введите обязательную строку расходов в этом месяце");
//         let exp = prompt ("Во сколько обойдется?", "");
        
//         if (typeof(budgetEntry) === "string" && typeof(budgetEntry) != "null"  && typeof(exp) != "null" 
//         && budgetEntry != "" & exp != "" && budgetEntry.length > 5 ) {
//         console.log("Done");
//         appData.expenses[budgetEntry] = exp;
//         }
//         else {
//             alert ("Строка бюджета должа быть не менее 5 символов!")
//         console.log('i=' + --i);
//     }
//     };

let i=0;
do {
        i++;            
    // console.log("цикл do while");
        let budgetEntry = prompt ("Введите обязательную строку расходов в этом месяце");
        let exp = prompt ("Во сколько обойдется?", "");
        
        if (typeof(budgetEntry) === "string" && typeof(budgetEntry) != "null"  && typeof(exp) != "null" 
        && budgetEntry != "" & exp != "" && budgetEntry.length > 5 ) {
        console.log("Done");
        appData.expenses[budgetEntry] = exp;
        }
        else {
            alert ("Строка бюджета должа быть не менее 5 символов!")
        console.log('i=' + --i);
    }
}
while (i<2);{
    console.log(i + "- finish");
}





// console.log (appData);
// console.log (appData.expenses);
// let testOut1 = appData.expenses.budjetEntry1;
//console.log (testOut1);
// let consumption  = (money - appData.expenses.budjetEntry1 - appData.expenses.budjetEntry2) / 30;
// alert (consumption);

appData.moneyPerDay = appData.budget / 30;
console.log ("Ежедневный бюджет: " + appData.moneyPerDay);
alert ("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log ("Минимальный достаток");
}
else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log ("Средний достаток");
}
else if (appData.moneyPerDay > 2000) {
    console.log ("Средний достаток");
}
else {
    console.log ("Ошибка.");
} 