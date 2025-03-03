// задача 1
function getArrayParams(...arr) {
    // Инициализируем переменные min, max и sum
    let min = arr[0];
    let max = arr[0];
    let sum = 0;

    // Проходим по массиву
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        // Определяем новый максимум
        if (element > max) {
            max = element;
        }

        // Определяем новый минимум
        if (element < min) {
            min = element;
        }

        // Добавляем элемент к сумме
        sum += element;
    }

    // Вычисляем среднее значение
    const avg = (sum / arr.length).toFixed(2);

    // Возвращаем объект с результатами
    return { min: min, max: max, avg: Number(avg) };
}


// задача 2

function summElementsWorker(...arr) {
    // Проверка на наличие элементов
    if (arr.length === 0) {
        return 0;
    }
    // Суммируем элементы массива
    return arr.reduce((sum, current) => sum + current, 0);
}

function differenceMaxMinWorker(...arr) {
    // Проверка на наличие элементов
    if (arr.length === 0) {
        return 0;
    }
    // Находим максимальное и минимальное значения
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    // Возвращаем разницу
    return max - min;
}

function differenceEvenOddWorker(...arr) {
    // Проверка на наличие элементов
    if (arr.length === 0) {
        return 0;
    }
    let sumEvenElement = 0;
    let sumOddElement = 0;

    // Перебираем элементы массива
    for (let element of arr) {
        if (element % 2 === 0) {
            sumEvenElement += element; // Чётный элемент
        } else {
            sumOddElement += element; // Нечётный элемент
        }
    }
    // Возвращаем разницу
    return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
    // Проверка на наличие элементов
    if (arr.length === 0) {
        return 0;
    }
    let sumEvenElement = 0;
    let countEvenElement = 0;

    // Перебираем элементы массива
    for (let element of arr) {
        if (element % 2 === 0) {
            sumEvenElement += element; // Суммируем чётные элементы
            countEvenElement++; // Увеличиваем счётчик чётных элементов
        }
    }
    // Если нет чётных элементов, возвращаем 0
    if (countEvenElement === 0) {
        return 0;
    }
    // Возвращаем среднее значение
    return sumEvenElement / countEvenElement;
}


// задача 3

function makeWork(arrOfArr, func) {
    // Инициализируем переменную для хранения максимального результата
    let maxWorkerResult = -Infinity;

    // Перебираем все элементы массива arrOfArr
    for (let arr of arrOfArr) {
        // Вызываем функцию-насадку с использованием spread-оператора
        const result = func(...arr);

        // Проверяем, является ли полученное значение больше текущего максимума
        if (result > maxWorkerResult) {
            maxWorkerResult = result; // Обновляем максимум
        }
    }

    // Возвращаем максимальное значение
    return maxWorkerResult;
}

