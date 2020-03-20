'use strict'
// Задание 1

let money,
    time;

money = prompt('Ваш бюджет на месяц?', '50 000 рублей');

time = prompt('Введите дату в формате YYYY-MM-DD', '2020-03-19');


let budget,
    timeData,
    expenses,
    optionalExpenses,
    income,
    savings;

time = timeData;

let a1 = prompt('Введите обязательную статью расходов в этом месяце', '10 000 рублей'),
    a2 = prompt('Во сколько обойдется?', '10 000 рублей'),
    a3 = prompt('Введите обязательную статью расходов в этом месяце', '10 000 рублей'),
    a4 = prompt('Во сколько обойдется?', '10 000 рублей');

let appData = {
    budget: money,
    timeData: time,

    expenses: {
        '10 000 рублей' : '10 000 рублей'
    },
    optionalExpenses: {},
    income: [],
    savings: false,
};

// alert('Ваш бюджет на один день 1 500 рублей');
alert(appData.budget / 30);
