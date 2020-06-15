'use stict';
//исходные переменные и их значения
let money, income, addExpenses, deposit, mission, period;
money = +prompt('Ваш месячный доход?', '75000');
console.log(typeof money);
income = 'фриланс';
console.log(typeof income);
deposit = confirm('Есть ли у вас депозит в банке?');
console.log(typeof deposit);
mission = 500000;
period = 12;
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
//определение количество символов
console.log(addExpenses.length);
//применение Конкатенации
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');
//приведение к нижнему регистру
console.log(addExpenses.toLowerCase());
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
//определение месячного бюджета
let budgetMonth = money - amount1 - amount2;
console.log('Бюджет на месяц: ' + budgetMonth);
//определение периода выполнения поставленной миссии
let missionMonth = Math.ceil(mission / budgetMonth);
if (missionMonth <= 12) {
  console.log('Цель будет достигнута за: ' + missionMonth + ' месяцев');
} else {
  alert('К сожилению ваш месячный бюджет мал, вы не достигните цели за 12 месяцев');
}
//корректировка ежедневного бюджета
budgetDay = Math.floor(budgetMonth / 30);
console.log('Бюджет на день ' + budgetDay);
if (budgetDay >= 1200) {
  console.log('У вас высокий уровень дохода');
} else if (budgetDay >= 600 && budgetDay < 1200) {
  console.log('У вас средний уровень дохода');
} else if (budgetDay < 600) {
  console.log('К сожалению у вас уровень дохода ниже среднего');
} else {
  console.log('Что то пошло не так');
}