'use strict'
// Задание 1

let money,
    time;

money = prompt('Ваш бюджет на месяц?', '50 000 рублей');

time = prompt('Введите дату в формате YYYY-MM-DD', '2020-03-19');


let budget,
    timeData,
    expenses,
    spending,
    howMany,
    optionalExpenses,
    income,
    savings;

time = timeData;

spending = prompt('Введите обязательную статью расходов в этом месяце', '10 000 рублей');
howMany = prompt('Во сколько обойдется?', '10 000 рублей');
spending = prompt('Введите обязательную статью расходов в этом месяце', '10 000 рублей');
howMany = prompt('Во сколько обойдется?', '10 000 рублей');

let appData = {
    money,
    timeData,

    expenses: {
        '10 000 рублей' : '10 000 рублей'
    },
    optionalExpenses: {},
    income: [],
    savings: false,
};

alert('Ваш бюджет на один день 1 500 рублей');
