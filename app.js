alert('Потому что оператор ++ перед переменной увеличивает её на один и возвращает новое значение, а если после переменной, то увеличивает её на один, но возвращает старое значение');
alert('а = 1 + (а = 2 * 2) = 5');


a = -45;
b = -69;
c = null;

if (a > 0 & b > 0) {
    c = a - b;
    alert('a = '+a+' и b = '+b+', оба больше нуля. Их разность = '+c)
} else if (a < 0 & b < 0) {
    c = a * b;
    alert('a = '+a+' и b = '+b+', оба меньше нуля. Их произведение = '+c)
} else if ((a >= 0 & b < 0) || (b >= 0 & a < 0)) {
    c = a + b;
    alert('a = '+a+' и b = '+b+', оба разных знаков. Их сумма = '+c)
};

// Тут начинается 4 задание (запрашивается значение переменной, и выводится с помощью свитч от y до 15)

y = +prompt("Введите число от 1 до 15");

switch(y) {
    case 0: alert('1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
        break;
    case 1: alert('2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
        break;
    case 2: alert('3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
        break;
    case 3: alert('4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
        break;
    case 4: alert('5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
        break;
    case 5: alert('6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
        break;
    case 6: alert('7, 8, 9, 10, 11, 12, 13, 14, 15');
        break;
    case 7: alert('8, 9, 10, 11, 12, 13, 14, 15');
        break;
    case 8: alert('9, 10, 11, 12, 13, 14, 15');
        break;
    case 9: alert('10, 11, 12, 13, 14, 15');
        break;
    case 10: alert('11, 12, 13, 14, 15');
        break;
    case 11: alert('12, 13, 14, 15');
        break;
    case 12: alert('13, 14, 15');
        break;
    case 13: alert('14, 15');
        break;
    case 14: alert('15');
        break;
    case 15: alert('15');
        break;
    default: alert('Что-то пошло не так')
}


// Тут начинается 6 задание 

function mathOperation (number1, number2, operation) {
    number1 = +prompt('Введите первую переменную');
    number2 = +prompt('Введите вторую переменную');
    arg1 = number1;
    arg2 = number2;
    return operation = +prompt('Выберите операцию: 1- сложение, 2- вычитание, 3- умножение, 4- деление (введите цифру)')
}



function Summ(per1, per2) {
    per1 = arg1;
    per2 = arg2;
    return per1 + per2;
}

function Razn(per1, per2) {
    per1 = arg1;
    per2 = arg2;
    return per1 - per2;
}

function Proizv(per1, per2) {
    per1 = arg1;
    per2 = arg2;
    return per1 * per2;
}

function Chast(per1, per2) {
    per1 = arg1;
    per2 = arg2;
    return per1 / per2;
}

switch(mathOperation()) {
    case 1: alert(arg1+' + '+arg2+' = '+Summ(arg1, arg2))
        break;
    case 2: alert(arg1+' - '+arg2+' = '+Razn(arg1, arg2))
        break;
    case 3: alert(arg1+' * '+arg2+' = '+Proizv(arg1, arg2))
        break;
    case 4: alert(arg1+' / '+arg2+' = '+Chast(arg1, arg2))
        break;
    default: alert('Что-то пошло не так')
}  


// Тут начинается 7 задание

alert (null === 0);
alert (' потому что null - это ничего, а 0 - это уже что-то')