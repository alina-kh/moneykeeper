var startBtn = document.getElementById("start"),
	budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
	monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
	yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
	
	expensesItem = document.getElementsByClassName('expenses-item'),
	expensesBtn = document.getElementsByTagName('button')[0],
	optionalExpensesBtn = document.getElementsByTagName('button')[1],
	countBtn = document.getElementsByTagName('button')[2],
	optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	
	chooseIncome = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
	percentValue = document.querySelector('.choose-percent'),
	
	yearValue = document.querySelector('.year-value'),
	monthValue = document.querySelector('.month-value'),
	dayValue = document.querySelector('.day-value'),

	btn = document.querySelectorAll('button');

var money, time;

startBtn.addEventListener('click', function() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
	appData.budget =  money;
	appData.timeData = time;
	budgetValue.textContent = money.toFixed();
	yearValue.value = new Date(Date.parse(time)).getFullYear();
	monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
	dayValue.value = new Date(Date.parse(time)).getDate();

	expensesBtn.addEventListener('click', function() {
		var sum = 0;
		
		for (var i = 0; i < expensesItem.length; i++) {
			var a = expensesItem[i].value,
				b = expensesItem[++i].value;
	
			if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
				console.log("Все верно");
				appData.expenses[a] = b;
				sum += +b;
			} else {
				i = i - 1;
			}
	
		}
		expensesValue.textContent = +sum;
		appData.exp = +sum;
	});
	
	optionalExpensesBtn.addEventListener('click', function() {
		for (var i = 1; i < optionalExpensesItem.length; i++) {
			var opt = optionalExpensesItem[i].value;
			appData.optionalExpenses[i] = opt;
			optionalExpensesValue.textContent += appData.optionalExpenses[i] + '';
		}
	});
		
	countBtn.addEventListener('click', function() {
		if (appData.budget !=  undefined) {
			appData.moneyPerDay = ((appData.budget - appData.exp) / 30).toFixed();
			dayBudgetValue.textContent = appData.moneyPerDay;
	
			if (appData.moneyPerDay < 100) {
				levelValue.textContent = "Минимальный уровень достатка";
			} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
				levelValue.textContent = "Средний уровень достатка";
			} else if (appData.moneyPerDay > 2000) {
				levelValue.textContent = "Высокий уровень достатка";
			} else {
				levelValue.textContent = "Произошла ошибка";
			}   
		}
		else {
			dayBudgetValue.textContent = "Произошла ошибка";
		}
	});
	
	chooseIncome.addEventListener('input', function() {
		var items = chooseIncome.value;
		appData.income = items.split(', ');
		incomeValue.textContent = appData.income;
	});
	
	checkSavings.addEventListener('click', function() {
		if (appData.savings == true) {
			appData.savings = false;
		}
		else {
			appData.savings = true;
		}
	});
	
	sumValue.addEventListener('input', function() {
		if (appData.savings == true){
			var sum = +sumValue.value,
				percent = +percentValue.value;
				
			appData.monthIncome = sum/100/12*percent;
			appData.monthIncome = sum/100*percent;
			monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
			yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
		}
	});
	
	percentValue.addEventListener('input', function() {
		if (appData.savings == true){
			var sum = +sumValue.value,
				percent = +percentValue.value;
				
			appData.monthIncome = sum/100/12*percent;
			appData.monthIncome = sum/100*percent;
			monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
			yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
		}
	});
});



var appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false        
};