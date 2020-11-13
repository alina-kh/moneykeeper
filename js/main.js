'use srtict';

let money, time;
/*function start(){
    money = +prompt("ваш бюджет на месяц?", '');
    time = prompt("введите дату в формате YYYY-MM-DD", '');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("ваш бюджет на месяц?", '');
    }

    //todo: селать проверку на корректность введённой даты
}
start();


let appData = {
    money: money,
    time: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() 
    {
        for (let i = 0; i < 2; i++)
        {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько обойдется?" , '' );
            if((typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50 )
                {
                    console.log("done");
                    appData.expenses[a] = b;
                }
            else 
            {
                i = i - 1;
            }   
        }
    },

    detectDayBudget: function() 
    {
        appData.moneyPerDay = (appData.money/30).toFixed();
        alert("Ежедневный бюджет " + appData.moneyPerDay);
    },

    detectLevel: function() 
    {
        if(detectDayBudget() < 100)
        {
            console.log("Минимальный уровень достатка");
        } 
        else if (detectDayBudget() > 100 && detectDayBudget() < 2000)
        {
            console.log("Средний уровень достатка");
        } 
        else if (detectDayBudget() > 2000){
            console.log("Высокий уровень достатка");
        } 
        else 
        {
            console.log("Произошла ошибка");
        }
    },

    checkSavings: function() 
    {
        if (appData.savings == true) 
        {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент");
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },

    chooseOptExpenses: function() 
    {
        let a = prompt("Статья необязательных расходов?"),
        b = prompt("Статья необязательных расходов?"),
        c = prompt("Статья необязательных расходов?");

        let  optionalExpenses = {
            1: a,
            2: b,
            3: c
        };
		console.log(optionalExpenses);
    },

    chooseIncome: function() {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        let arr = items.split(',');

        if ((typeof(items) === 'string') && (typeof(items) != null) && (items != null)) {
            appData.income.push(prompt('Может что-то еще?'));
            arr.forEach(function(item, i, arr) {
                console.log('Способы доп заработка: ' + i + ': ' + items + ' (массив: ' + arr + ')');
            });
            appData.income.sort();
        }
        else {
            console.log('Повторите еще раз');
            items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        }
    }
};

for(let key in appData) 
{
	console.log('Наша программа включает в себя данные: ' + key + appData[key]);
}
console.log(appData); // JavaScript метод keys() позволяет вернуть массив, содержащий имена всех собственных (неунаследованных) перечислимых свойств и методов указанного объекта.

*/
//Получить кнопку "Начать расчет" через id
let buttonStart = document.getElementById('start');


//Получить все блоки в правой части программы через классы (которые имеют класс название-value, начиная с )
let resultTable = document.querySelectorAll('.result-table'),
	budgetValue = document.querySelector('.budget-value'),
	dayBudgetValue = document.querySelector('.daybudget-value'),
	levelValue = document.querySelector('.-value'),
	expensesValue = document.querySelector('.expenses-value'),
	optionalValue = document.querySelector('.optionalexpenses-value'),
	incomeValue = document.querySelector('.income-value'),
	monthSavingsValue = document.querySelector('.monthsavings-value'),
	yearsavingsValue = document.querySelector('.yearsavings-value');
	
budgetValue = '';
dayBudgetValue = '';
levelValue = '';
expensesValue = chooseExpenses();
optionalValue = '';
incomeValue = '';

//Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)
let expensesItem = document.querySelectorAll('.expenses-item'),
	name1 = document.getElementById('expenses_1'),
	price1 = document.getElementById('expenses_2'),
	name2 = document.getElementById('expenses_3'),
	price2 = document.getElementById('expenses_4');

function chooseExpenses(){
	if((typeof(name1))=== 'string' && (typeof(name1)) != null && (typeof(price1)) != null && name1 != '' && price1 != '' && name1.length < 50  && (typeof(name2))=== 'string' && (typeof(name2)) != null && (typeof(price2)) != null && name2 != '' && price2 != '' && name2.length < 50){
		expensesValue = price1 + price2;
		return expensesValue;
	}
}


//Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной.
let exItBtn = document.querySelector('.expenses-item-btn'),
	exBtn = document.getElementsByTagName('button'),
	
	
	opItBtn = document.querySelector('.optionalexpenses-item-btn'),
	opBtn = document.getElementsByTagName('button'),
	
	coBuBtn = document.querySelector('.count-budget-btn'),
	coBuB = document.getElementsByTagName('button');
	
exBtn = chooseExpenses();


//Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
	optionalexpenses = document.querySelectorAll('.optionalexpenses'),
	opEx1 = document.getElementById('optionalexpenses_1'),
	opEx2 = document.getElementById('optionalexpenses_2'),
	opEx3 = document.getElementById('optionalexpenses_3');
//Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)
