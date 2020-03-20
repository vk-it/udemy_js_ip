'use strict'
// Задание 1

// let money,
//     time;

// money = prompt('Ваш бюджет на месяц?', '50 000 рублей');

// time = prompt('Введите дату в формате YYYY-MM-DD', '2020-03-19');


// let budget,
//     timeData,
//     expenses,
//     optionalExpenses,
//     income,
//     savings;

// time = timeData;

// let a1 = prompt('Введите обязательную статью расходов в этом месяце', '10 000 рублей'),
//     a2 = prompt('Во сколько обойдется?', '10 000 рублей'),
//     a3 = prompt('Введите обязательную статью расходов в этом месяце', '10 000 рублей'),
//     a4 = prompt('Во сколько обойдется?', '10 000 рублей');

// let appData = {
//     budget: money,
//     timeData: time,

//     expenses: {
//         '10 000 рублей' : '10 000 рублей'
//     },
//     optionalExpenses: {},
//     income: [],
//     savings: false,
// };

// alert(appData.budget / 30);

// Задача на объяснение

let money = prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = prompt('Во сколько обойдётся?', '');

    appData.expenses[a] = b;
}

/* Вопросы:
Будьте добры, объясните, пожалуйста, новичку что и как, совсем не понятно
Вопросы:
1) Почему i(что она значит?)? i ни к чему не относится (ни к a ни к b, где связь?),
Почему тогда цикл выполняется?
2) i < 2, получается 1, почему повторяется 4 раза(Если я правильно понял, то сначала выполняется "let a и b, потом appData.expenses[a] = b;, но вот тут мой мозг не понимает, как выполняется appData.expenses[a] = b;, вроде бы присвоение, а выполняется цикл, как понять?"?
3) Что означает appData.expenses[a] = b, почему а в квадратных скобках? */