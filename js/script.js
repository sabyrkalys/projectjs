'use stict';
//исходные переменные и их значения
let money, income, addExpenses, deposit, mission, period;
money = +prompt('Ваш месячный доход?', '75000');
income = 'фриланс';
deposit = confirm('Есть ли у вас депозит в банке?');
mission = 500000;
period = 12;

let showTypeOf = function (data) {
  console.log(data, typeof (data));
}
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);


addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
//разделение объекта на составляющие массива
console.log(addExpenses.split(', '));
//определение дневного бюджета
let budgetDay;
//обязательные ежемесячные расходы
let expenses1, expenses2, amount1, amount2;
expenses1 = prompt('Введите одну обязательную статью расходов?', 'коммунальные услуги');
amount1 = +prompt('Во сколько это обойдется?', '5000');
expenses2 = prompt('Введите еще одну обязательную статью расходов?', 'продукты');
amount2 = +prompt('Во сколько это обойдется?', '20000');

function getExpensesMonth() {
  return amount1 + amount2;
}
console.log('Расходы за месяц ' + getExpensesMonth());
//определение месячного бюджета
function getAccumulatedMonth() {
  return money - getExpensesMonth();
}
let accumulatedMonth = getAccumulatedMonth();
//Cрок достижения цели
function getTargetMonth() {
  return Math.ceil(mission / accumulatedMonth);
}
console.log('Cрок достижения цели ' + getTargetMonth() + ' месяцев');
//корректировка ежедневного бюджета
budgetDay = Math.floor(accumulatedMonth / 30);
console.log('Бюджет на день ' + budgetDay);

function getStatusIncome() {
  if (budgetDay >= 1200) {
    return ('У вас высокий уровень дохода');
  } else if (budgetDay >= 600 && budgetDay < 1200) {
    return ('У вас средний уровень дохода');
  } else if (budgetDay < 600) {
    return ('К сожалению у вас уровень дохода ниже среднего');
  } else {
    return ('Что то пошло не так');
  }
}
console.log(getStatusIncome());