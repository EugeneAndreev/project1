'use strict';
let money = prompt ("Ваш бюджет на месяц?");
let time = prompt ("Введите дату в формате YYYY-MM-DD");
let expenses = {};
let optionalExpences ={};
let income = [];

let budjetEntry1 = prompt ("Введите обязательную строку расходов в этом месяце");
let exp1 = prompt ("Во сколько обойдется?");
let budjetEntry2 = prompt ("Введите обязательную строку расходов в этом месяце");
let exp2 = prompt ("Во сколько обойдется?");

let appData = {
    budget: money,
    timeData: time,
    expenses : {
        budjetEntry1 : exp1,  //если нужно определить имя свойства - писать в квадратгых скобках вычисляемые свойства
        budjetEntry2 : exp2,  //https://learn.javascript.ru/object - взять имя свойства из перепменной 
    },
    optionalExpences,
    income,
    savings:false,
};





console.log (expenses.budjetEntry1);
