'use strict';
let money, time;

function start() {
    money = +prompt ("Ваш бюджет на месяц?", ""); //добавить ''
    time = prompt ("Введите дату в формате YYYY-MM-DD", ""); //добавить ''
    while (isNaN(money) || money == "" || money == null) {
        alert ('Введите корректную сумму бюджета!');
        money = +prompt ("Ваш бюджет на месяц?", "");
    }

}

start();



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
    // savings:save,
};

function chooseExpences() {
for (let i=0; i<2; i++) {
    let budgetEntry = prompt ("Введите обязательную строку расходов в этом месяце");
    let exp = prompt ("Во сколько обойдется?", "");
    
    if (typeof(budgetEntry) === "string" && typeof(budgetEntry) != "null"  && typeof(exp) != "null" 
    && budgetEntry != "" & exp != "" && budgetEntry.length > 5 ) {
    console.log("Done");
    appData.expenses[budgetEntry] = exp;
    }
    else {
        alert ("Строка бюджета должа быть не менее 5 символов!")
    console.log('i=' + --i); // уменьшение счетчика тут
}
// else // если проверка не срабатывает - тио теряем статью, сделать возврат на цикл обратно - готово
}
}
chooseExpences();

function chooseOptExpenses() {
    for (let i=0; i<3; i++) {
        let budgetEntry = prompt ("Введите необязательную строку расходов в этом месяце");
        let exp = prompt ("Во сколько обойдется?", "");
        
        if (typeof(budgetEntry) === "string" && typeof(budgetEntry) != "null"  && typeof(exp) != "null" 
        && budgetEntry != "" & exp != "" && budgetEntry.length > 5 ) {
        console.log("Done");
        appData.optionalExpences[budgetEntry] = exp;
        }
        else {
            alert ("Строка бюджета должа быть не менее 5 символов!")
        console.log('i=' + --i); // уменьшение счетчика тут
    }
    // else // если проверка не срабатывает - тио теряем статью, сделать возврат на цикл обратно - готово
    }
    }

let isOptExpenses = confirm ("Есть дополнитнльные расходы?");
if (isOptExpenses == true ) {
    chooseOptExpenses();
}


// // еще 2 типа цикла
// // let i=0;
// // while (i<2) {
// //         i++;            
// //     // console.log("цикл while");
// //         let budgetEntry = prompt ("Введите обязательную строку расходов в этом месяце");
// //         let exp = prompt ("Во сколько обойдется?", "");
        
// //         if (typeof(budgetEntry) === "string" && typeof(budgetEntry) != "null"  && typeof(exp) != "null" 
// //         && budgetEntry != "" & exp != "" && budgetEntry.length > 5 ) {
// //         console.log("Done");
// //         appData.expenses[budgetEntry] = exp;
// //         }
// //         else {
// //             alert ("Строка бюджета должа быть не менее 5 символов!")
// //         console.log('i=' + --i);
// //     }
// //     };

// let i=0;
// do {
//         i++;            
//     // console.log("цикл do while");
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
// }
// while (i<2);{
//     console.log(i + "- finish");
// }


// console.log (appData);
// console.log (appData.expenses);
// let testOut1 = appData.expenses.budjetEntry1;
//console.log (testOut1);
// let consumption  = (money - appData.expenses.budjetEntry1 - appData.expenses.budjetEntry2) / 30;
// alert (consumption);

function detectDayBudjet () {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    console.log ("Ежедневный бюджет: " + appData.moneyPerDay);
    alert ("Ежедневный бюджет: " + appData.moneyPerDay);
}
function detectLevel() {
    if (appData.moneyPerDay < 100) {
    console.log ("Минимальный достаток");
    }
    else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log ("Средний достаток");
    }
    else if (appData.moneyPerDay > 2000) {
    console.log ("Высокий достаток");
    }
    else {
    console.log ("Ошибка.");
} 
}

detectDayBudjet();
detectLevel();


function checkSaveQuestion() {
    appData.savings = confirm ('Есть сбережения?');
}

// checkSaveQuestion ();

function checkSavings() {
    if (appData.savings == true) {
        let depo = +prompt ("Введите сумм сбережений", "");
        let percent = +prompt ("Под какой процент?");
        appData.monthIncome = (depo/100*percent/12).toFixed();
        alert ("Месячный доход " + appData.monthIncome);
    }
    
}
checkSavings();

/*    задание 4
+сделать функции для вопросов
+проверку для непустого ввода числа и строки в мани,
+ту фиксед (-и еще ппроверку ту фиксед - какой типа данных выводит, приведдение к числу)
+проверку моней - сделать как число    
+функция про деподит - сколько, проывент в месяц, записать в апп дата. проверка - вопрос - есть ли накопления
+добавить вопрос есть ли накопления 
+ задание в файле
*/