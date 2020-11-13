//Получить кнопку "Начать расчет" через id
let startBTN = document.getElementById('start'),

//Получить все блоки в правой части программы через классы (которые имеют класс название-value, начиная с )
	
	budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalValue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
	monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
	yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
	
//Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)
	expensesItem = document.getElementsByClassName('expenses-item'),
	
	
//Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной.
	exBTN = document.getElementsByTagName('button')[0],
	opBTN = document.getElementsByTagName('button')[1],
	countBTN = document.getElementsByTagName('button')[2],
	
//Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
	optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	
	
//Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)
	chooseInc = document.querySelector('.choose-income'), //возможный доход
	checkSav = document.querySelector('.checksavings'), //чекбокс
	chooseSum = document.querySelector('.choose-sum'),	//сумма
	choosePer = document.querySelector('.choose-percent'),	//процент
	year = document.querySelector('.year-value'), //год
	month = document.querySelector('.month-value'),	//месяц
	day = document.querySelector('.day-value');	//день
	
	
let money, time;

//при нажатии на кнопку старт записываем введенный бюджет и дату


startBTN.addEventListener('click', function() 
{
	time = prompt("введите дату в формате YYYY-MM-DD", '');
	money = +prompt("ваш бюджет на месяц?", '');
	
    while(isNaN(money) || money == "" || money == null) 
	{
        money = +prompt("ваш бюджет на месяц?", '');
    }
	appData.budget = money;
	appData.timeData = time;
	budgetValue.textContent = money.toFixed();
	year.value = new Date(Date.parse(time)).getFullYear();
	month.value = new Date(Date.parse(time)).getMonth() + 1;
	day.value = new Date(Date.parse(time)).getDate();
    //todo: сделать проверку на корректность введённой даты


//обязательные расходы
exBTN.addEventListener('click', function()
{
	let sum = 0;

	for (let i = 0; i < expensesItem.length; i++)
		{
			let a = expensesItem[i].value,
				b = expensesItem[++i].value;
			if ((typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50 )
				{
					console.log("done");
					appData.expenses[a] = b;
					sum += +b;
				}
			else 
			{
				i = i - 1;
			}   
		}
	expensesValue.textContent = sum;
	appData.exps = sum;
});

//необязательные расходы
opBTN.addEventListener('click', function()
{
	for (let i = 0; i < optionalExpensesItem.length; i++)
	{
		let opt = optionalExpensesItem[i].value;
		appData.optionalExpenses[i] = opt;
		optionalValue.textContent += appData.optionalExpenses[i] + ' ';
	}
});

//ежедневный бюджет и уровень дохода
countBTN.addEventListener('click', function()
{
	let exp = appData.expenses;
	if(appData.budget != undefined)
	{
		appData.moneyPerDay = ((appData.budget - appData.exps)/30).toFixed();
		dayBudgetValue.textContent = appData.moneyPerDay;
		
		if(appData.moneyPerDay < 100)
		{
			levelValue.textContent = "Минимальный уровень достатка";
		} 
		else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000)
		{
			levelValue.textContent = "Средний уровень достатка";
		} 
		else if (appData.moneyPerDay > 2000){
			levelValue.textContent = "Высокий уровень достатка";
		} 
		else 
		{
			levelValue.textContent = "Произошла ошибка";
		}
	}
	else
	{
		dayBudgetValue.textContent = "Произошла ошибка";
	}
});

chooseInc.addEventListener('input', function()
{
	let items = chooseInc.value;
	appData.income = items.split(', ');
	incomeValue.textContent = appData.income;
});

checkSav.addEventListener('click', function()
{
	if(appData.savings == true){
		appData.savings = false;
	}
	else{
		appData.savings = true;
	}
});
chooseSum.addEventListener('input', function(){
	if(appData.savings == true){
		let sum = +chooseSum.value,
			percent = +choosePer.value;
		
		appData.monthIncome = sum/100/12*percent;
		appData.yearIncome = sum/100*percent;
		
		monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});
choosePer.addEventListener('input', function(){
	if(appData.savings == true){
	let sum = +chooseSum.value,
			percent = +choosePer.value;
		
		appData.monthIncome = sum/100/12*percent;
		appData.yearIncome = sum/100*percent;
		
		monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});
});
let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
	timeData: time,
    savings: false

    /*chooseExpenses:{},
    detectDayBudget:{},
    detectLevel:{},
    checkSavings: {},
    chooseOptExpenses: {},  
    chooseIncome: {},
	monthIncome: {},
	yearIncome: {}*/
};
