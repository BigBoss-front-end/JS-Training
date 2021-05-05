a = Math.floor(Math.random() * 100 + 1);
alert('Я хочу сыграть с тобой в игру')
var result = 0;

for (;(a < result) || (a > result);) {
    result = prompt('Угадай число от 1 до 100');
    if ((a !== result) & (a > result)) {
    alert('Бери больше')
} else if ((a !== result) & (a < result)) {
    alert('Бери меньше');
} else if (a = result) {
    alert('Верно');
};
};

