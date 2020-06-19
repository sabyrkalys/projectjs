'use stict';
let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
let money
start = function () {
  do {
    money = prompt('Ваш месячный доход?', '75000');
  }
  while (!isNumber(money))
}

start();


let appData = {
  budget: {},
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 500000,
  period: 12,
  expensesAmount: {},
  accumulatedMonth: {},
  budgetDay: {},
  targetMonth: {},
  asking: function () {
    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
    appData.addExpenses = addExpenses.toLowerCase().split(', ');
    appData.deposit = confirm('Есть ли у вас депозит в банке?');

    appData.getExpensesMonth = function () {
      let sum = 0;
      for (let i = 0; i < 4; i++) {
        let expenses1 = prompt('Введите одну обязательную статью расходов?');
        let expensesPoint = prompt('Во сколько это обойдется?');
        appData.expenses[expenses1] = expensesPoint;

        while (!isNumber(expensesPoint)) {
          expensesPoint = prompt('Во сколько это обойдется?');
        }

      }
      for (let key in appData.expenses) {
        sum += parseInt(appData.expenses[key])
        //определение месячного бюджета
        appData.getBudget = getBudget;

        function getBudget() {
          appData.accumulatedMonth = appData.budget - appData.expensesAmount;
          appData.budgetDay = Math.floor(appData.accumulatedMonth / 30);
          return;
        }

        appData.getTargetMonth = getTargetMonth;
        //Cрок достижения цели
        function getTargetMonth() {
          let target = Math.ceil(appData.mission / appData.accumulatedMonth);
          if (target <= 0) {
            return ('Цель не будет достигнута');
          } else {
            return ('Cрок достижения цели ' + target + ' месяцев');
          }
        };

        appData.getStatusIncome = getStatusIncome;
        //Уровень дохода
        function getStatusIncome() {
          if (appData.budgetDay >= 1200) {
            return ('У вас высокий уровень дохода');
          } else if (appData.budgetDay >= 600 && appData.budgetDay < 1200) {
            return ('У вас средний уровень дохода');
          } else if (appData.budgetDay < 600 && appData.budgetDay > 1) {
            return ('К сожалению у вас уровень дохода ниже среднего');
          } else if (appData.budgetDay <= 0) {
            return ('Вы живете в долг. Пора что-то менять');
          } else {
            return ('Что то пошло не так');
          }
        };
      }
      return sum;
    }
  }
};
appData.asking();
appData.budget = money;


appData.expensesAmount = appData.getExpensesMonth();
console.log('Расходы за месяц ' + appData.expensesAmount);





appData.getBudget();



appData.targetMonth = appData.getTargetMonth();
console.log(appData.targetMonth);



console.log(appData.getStatusIncome());


console.log('Наша программа включает в себя данные:');
for (let key in appData) {
  console.log('свойства: ' + key + ' значения: ' + appData[key]);
}