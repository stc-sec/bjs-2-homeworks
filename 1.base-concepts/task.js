"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  const discriminant = b ** 2 - 4 * a * c; // Вычисляем дискриминант

  if (discriminant < 0) {
    // Если дискриминант меньше нуля, корней нет
    return arr;
  } else if (discriminant === 0) {
    // Если дискриминант равен нулю, один корень
    const root = -b / (2 * a);
    arr.push(root);
    return arr;
  } else {
    // Если дискриминант больше нуля, два корня
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(root1, root2);
    return arr;
  }
}

// Пример использования
console.log(solveEquation(1, -3, 2)); // [2, 1]
console.log(solveEquation(1, 2, 1));  // [-1]
console.log(solveEquation(1, 0, 1));  // []




function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    // Преобразуем процентную ставку из диапазона от 0 до 100 в диапазон от 0 до 1 и из годовой ставки — в месячную
    let monthlyPercent = (percent / 100) / 12;

    // Рассчитываем тело кредита
    let principal = amount - contribution;

    // Проверяем, что тело кредита больше 0
    if (principal <= 0) {
        return 0;
    }

    // Рассчитываем ежемесячный платеж по формуле
    let monthlyPayment = principal * (monthlyPercent + (monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) - 1)));

    // Рассчитываем общую сумму, которую придется заплатить клиенту
    let totalPayment = monthlyPayment * countMonths;

    // Округляем результат до двух значений после запятой
    return Math.round(totalPayment * 100) / 100;
}
