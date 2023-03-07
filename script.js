//Задача 1

let str = 'js';
console.log(str.toUpperCase());

//Задача 2

function searchStart(array, search) {
    arrNew = [];
    array.forEach((element) => {
        if (element.toLowerCase().startsWith(search.toLowerCase())) {
            arrNew.push(element);
        }
    });
    return arrNew;
}

searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино');

//Задача 3

let a = 32.58884;

console.log(`Округлите число 32.58884 до меньшего целого: ${Math.floor(a)}`);
console.log(`Округлите число 32.58884 до большего целого: ${Math.ceil(a)}`);
console.log(`Округлите число 32.58884 до ближайшего целого: ${Math.round(a)}`);

//Задача 4

console.log(`${Math.min(52, 53, 49, 77, 21, 32)} наименьшее число из 52, 53, 49, 77, 21, 32`);
console.log(`${Math.max(52, 53, 49, 77, 21, 32)} наибольшее число из 52, 53, 49, 77, 21, 32`);

//Задача 5

function random() {
    return Math.round(Math.random() * 10);
}

//Задача 6

function getRandomArrNumbers(n) {
    length = Math.floor(n/2);
    let arr6 = [];
    for(let i = 0; i < length; i++) {
        let a = Math.floor(Math.random() * (n - 0) + 0);
        arr6.push(a);
    }
    return arr6;
}

//Задача 7

function randomInteger(a, b) {
    let min = Math.min(a, b);
    let max = Math.max(a,b);
    return Math.floor(Math.random() * (max - min) + min);
}

//Задание 8

let myDate = new Date();
console.log(myDate);

//Задание 9

let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

//Задание 10

const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

let myDate1 = new Date();
let fullDate = 'Дата: ' + myDate.getDate() + ' ' + months[myDate.getMonth()] + ' ' +myDate.getFullYear() + ' - это ' + days[myDate.getDay()];
let fullTime = 'Время: ' + myDate.getHours() + ':' + myDate.getMinutes() + ':' + myDate.getSeconds(); 

console.log(fullDate);
console.log(fullTime);