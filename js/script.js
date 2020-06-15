'use stict';
let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

//исходные переменные и их значения
let money, income, addExpenses, deposit, mission, period;
income = 'фриланс';
deposit = confirm('Есть ли у вас депозит в банке?');
mission = 500000;
period = 12;

let start = function () {
  do {
    money = prompt('Ваш месячный доход?', '75000');
  }
  while (!isNumber(money))
}

start();

let showTypeOf = function (data) {
  console.log(data, typeof (data));
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
//разделение объекта на составляющие массива
console.log(addExpenses.toLowerCase().split(', '));

//обязательные ежемесячные расходы
let expenses1, expenses2;
let getExpensesMonth = function () {
  let sum = 0;
  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      expenses1 = prompt('Введите одну обязательную статью расходов?', 'коммунальные услуги');
    } else if (i === 1) {
      expenses2 = prompt('Введите еще одну обязательную статью расходов?', 'продукты');
    }
    let sumOne = prompt('Во сколько это обойдется?', '10000');
    while (!isNumber(sumOne)) {
      sumOne = prompt('Во сколько это обойдется?', '10000');
    }
    sum += Number(sumOne)
  }
  return sum;
};

let expensesAmount = getExpensesMonth();
console.log('Расходы за месяц ' + expensesAmount);

//определение месячного бюджета
function getAccumulatedMonth() {
  return money - expensesAmount;
};
let accumulatedMonth = getAccumulatedMonth();

//Cрок достижения цели
function getTargetMonth() {
  let target = Math.ceil(mission / accumulatedMonth);
  if (target <= 0) {
    return ('Цель не будет достигнута');
  } else {
    return ('Cрок достижения цели ' + target + ' месяцев');
  }
};
let targetMonth = getTargetMonth();
console.log(targetMonth);

//корректировка ежедневного бюджета
let budgetDay = Math.floor(accumulatedMonth / 30);
console.log('Бюджет на день ' + budgetDay);

function getStatusIncome() {
  if (budgetDay >= 1200) {
    return ('У вас высокий уровень дохода');
  } else if (budgetDay >= 600 && budgetDay < 1200) {
    return ('У вас средний уровень дохода');
  } else if (budgetDay < 600 && budgetDay > 1) {
    return ('К сожалению у вас уровень дохода ниже среднего');
  } else if (budgetDay <= 0) {
    return ('Вы живете в долг. Пора что-то менять');
  } else {
    return ('Что то пошло не так');
  }
};
console.log(getStatusIncome());