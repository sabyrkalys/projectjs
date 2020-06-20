'use stict';
let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
let isString = function (a) {
  return !isNaN(a) && isFinite(a);
}
let money
start = function () {
  do {
    money = prompt('Ваш месячный доход?', '75000');
  }
  while (!isNumber(money));
}

start();

let appData = {
  budget: {},
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  mission: 500000,
  period: 12,
  expensesAmount: {},
  accumulatedMonth: {},
  budgetDay: {},
  targetMonth: {},
  asking: function () {

    if (confirm('Если у вас дополнительный источник заработка?')) {
      let itomIncome,
        cashIncome;
      do {
        itomIncome = prompt('Какой у вас дополнительный заработок?', 'Таксую');
      }
      while (isString(itomIncome));
      do {
        cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', '10000');
      }
      while (!isNumber(cashIncome));
      appData.income[itomIncome] = cashIncome;
    }

    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'продукты, кино, такси');
    appData.addExpenses = addExpenses.toLowerCase().split(', ');
    appData.deposit = confirm('Есть ли у вас депозит в банке?');

    appData.getExpensesMonth = function () {
      let sum = 0;
      let expenses1, expensesPoint;
      for (let i = 0; i < 4; i++) {
        do {
          expenses1 = prompt('Введите одну обязательную статью расходов?', 'продукты');
        }
        while (isString(expenses1));

        do {
          expensesPoint = prompt('Во сколько это обойдется?');
        }
        while (!isNumber(expensesPoint));
        appData.expenses[expenses1] = expensesPoint;
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
  },
  getInfoDeposit: function () {
    if (appData.deposit) {
      do {
        appData.percentDeposit = prompt('Какой годовой процент?', '10');
      }
      while (!isNumber(appData.percentDeposit));
      do {
        appData.moneyDeposit = prompt('Какая сумма заложена?', '10000');
      }
      while (!isNumber(appData.moneyDeposit));

    }
  },
  calcSavedMoney: function () {
    return appData.accumulatedMonth * appData.period;
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
appData.getInfoDeposit();
console.log(appData.calcSavedMoney(), appData.percentDeposit, appData.moneyDeposit);
console.log('appData.income: ', appData.income);


let lower, firstLetter, capitalized, result;
for (let i = 0; i < appData.addExpenses.length; i++) {
  lower = appData.addExpenses[i];
  firstLetter = lower.slice(0, 1);
  capitalized = lower.replace(firstLetter, firstLetter.toUpperCase());
  result = capitalized;
  console.log('result: ', result);
}