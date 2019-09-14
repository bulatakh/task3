let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses:{},
    optionalExpenses:{},
    income: [],
    savings: true
};

function chooseExpences() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце?", ''),
            b = prompt("Во сколько обойдется?", '');
        if ((typeof(a)==='string') && (a != null) && (b != null) && (a!= '') && (b != '') && (a.length < 50 )) {
        console.log("сделано");
        appData.expenses[a] = b;    
        } else {
            i--;
        }
    }
}
chooseExpences();

function detectDayBudget() {
    appData.moenyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moenyPerDay);
}

detectDayBudget();

function ChooseOptExpenses() {
    for (i = 1; i < 4; i++) {
    let c = prompt("Статья необязательных расходов", '');
    appData.optionalExpenses[i] = c;
    }
}

ChooseOptExpenses();

if (appData.moenyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moenyPerDay > 100 && appData.moenyPerDay < 2000) {
    console.log ("Средний уровень достатка");
} else if (appData.moenyPerDay > 2000) {
    console.log ("Высокий уровень достатка");
} else {
    console.log ("Произошла ошибка");
}

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений"),
            percent = +prompt("Под какой процент?");

            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();