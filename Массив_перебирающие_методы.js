/*Метод REDUCE*/


 /*Дан массив с числами. Найдите сумму этих чисел. Показать решение.*/

/*let arr = [1, 2, 3, 0, 4, 5, 6];

let result = arr.reduce( (accum, item)=> {
    accum += item;
    return accum;
})
console.log(result)*/

 /*Дан массив с числами. Найдите сумму первых N элементов до первого нуля. Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем первые 3 
 элемента, так как дальше стоит элемент с числом 0. Показать решение.*/
/*var arr = [1, 2, 3, 0, 4, 5, 6];
var answer = 0;

var result = arr.reduce(function(sum, elem) {
  console.log(sum)
  console.log(elem)
  if (elem == 0) {
    answer = sum;
  } else {
    return sum + elem;
  }
});

if(answer == undefined){answer = result};
console.log(answer)*/




/* Дан массив с числами. Найдите сумму последних N элементов до первого нуля с конца. Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем
 последние 3 элемента, так как дальше стоит элемент с числом 0. Показать решение.*/
/*var arr = [2, 0, 1];
var answer = 0;

var result = arr.reduceRight(function(sum, elem) {
  console.log(sum)
  console.log(elem)
  if (elem == 0) {
    answer = sum;
  } else {
    return sum + elem;
  }
});

console.log(answer)
*/

/* Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти. 
Показать решение.*/
/*let num = 0;
let arr = [1, 2, 8, 0, 9, 37, 6];
function func(arr){
let col = 1;
if(num === 0 ){
arr.reduce(function(sum, elem) {
 if(sum > 10) {
  num = col;
  alert(num)
 } else{
  col++;
  return sum + elem; }
  });
}else {console.log(num)}
}
func(arr)
console.log(num)*/



/* Дан массив с числами. Узнайте сколько элементов с конца массива надо сложить, чтобы в сумме получилось больше 10-ти. 
Показать решение.*/

/*let num = 0;
let arr = [1, 2, 8, 0, 9, 37, 6];
function func(arr){
let col = 1;
if(num === 0 ){
arr.reduceRight(function(sum, elem) {
 if(sum > 10) {
  num = col;
  alert(num)
 } else{
  col++;
  return sum + elem; }
  });
}else {console.log(num)}
}
func(arr)
console.log(num)*/



/*На входе массив чисел, например: arr = [1,2,3,4,5].
Напишите функцию getSums(arr), которая возвращает массив его частичных сумм.
Иначе говоря, вызов getSums(arr) должен возвращать новый массив из такого же числа элементов, в котором на каждой позиции должна
 быть сумма элементов arr до этой позиции включительно.*/

/* let arr = [1,2,3,4,5];

 let getSums =(arr)=> {
  let result=[];

 let newArr = arr.reduce( (accum, elem)=> {
  result.push(accum + elem)
  return accum + elem
}, 0)
 
return result;
 }
console.log(getSums(arr))*/


/*Сглаживание массива массивов
Код решает задачу преобразования массива массивов в один плоский массив.*/

/*let nested = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let flat = nested.reduce((acc, it) => [...acc, ...it], []);
console.log(flat);*/

/*Создание объекта, который содержит частоту использования ключей
Cгрупируем и посчитаем свойство ‘age’ для каждого элемента в массиве:*/

/*let users = [
  { id: 11, name: 'Adam', age: 23, group: 'editor' },
  { id: 47, name: 'John', age: 28, group: 'admin' },
  { id: 85, name: 'William', age: 34, group: 'editor' },
  { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];
let groupByAge = users.reduce((acc, it) =>
  ({ ...acc, [it.age]: (acc[it.age] || 0) + 1 }),
{});
console.log(groupByAge)
*/


/*Индексирование массива объектов (таблица соответствий)
Вместо того, чтобы проходить через весь массив во время поиска пользователя по идентификатору, мы можем создать объект, в 
котором идентификатор пользователя представляет ключ (с постоянным временем поиска).*/

/*let users = [
  { id: 11, name: 'Adam', age: 23, group: 'editor' },
  { id: 47, name: 'John', age: 28, group: 'admin' },
  { id: 85, name: 'William', age: 34, group: 'editor' },
  { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];
let uTable = users.reduce((acc, it) => ({...acc, [it.name]: it }), {})
console.log(uTable)*/




/*МЕТОД MAP*/

/*const friends = [
 { passport: '03005988', name: 'Joseph Francis Tribbiani Jr', age: 32, sex: 'm' },
 { passport: '03005989', name: 'Chandler Muriel Bing', age: 33, sex: 'm' },
 { passport: '03005990', name: 'Ross Eustace Geller', age: 33, sex: 'm' },
 { passport: '03005991', name: 'Rachel Karen Green', age: 31, sex: 'f' },
 { passport: '03005992', name: 'Monica Geller', age: 31, sex: 'f' },
 { passport: '03005993', name: 'Phoebe Buffay', age: 34, sex: 'f' },
]

const passports = friends.map(friend => friend.passport);

console.log(passports)*/


/*Извлечение уникальных значений для определенного ключа для каждого элемента в массиве.*/

/*let users = [
  { id: 11, name: 'Adam', age: 23, group: 'editor' },
  { id: 47, name: 'John', age: 28, group: 'admin' },
  { id: 85, name: 'William', age: 34, group: 'editor' },
  { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];

let listOfUserGroups = [...new Set(users.map(it => it.group))];
console.log(listOfUserGroups)*/


/*Создание массива значений Фаренгейта из массива значений Цельсия*/

/*let celsius = [-15, -5, 0, 10, 16, 20, 24, 32]
let fahrenheit = celsius.map(t => t * 1.8 + 32);
console.log(fahrenheit)*/


/*Кодировать объекта в строку запроса*/

/*let params = {lat: 45, lng: 6, alt: 1000};
let queryString = Object.entries(params).map(p => encodeURIComponent(p[0]) + '=' + encodeURIComponent(p[1])).join('&')
console.log(queryString)*/


/*Отображение таблицы пользователей в виде читаемой строки только с указанными ключами*/

/*let users = [
  { id: 11, name: 'Adam', age: 23, group: 'editor' },
  { id: 47, name: 'John', age: 28, group: 'admin' },
  { id: 85, name: 'William', age: 34, group: 'editor' },
  { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];
let us = users.map(({id, age, group}) => `\n${id} ${age} ${group}`).join('')
console.log(us)*/


/*Поиск и замена пары ключ-значение в массиве объектов*/
/*let users = [
  { id: 11, name: 'Adam', age: 23, group: 'editor' },
  { id: 47, name: 'John', age: 28, group: 'admin' },
  { id: 85, name: 'William', age: 34, group: 'editor' },
  { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];
let updatedUsers = users.map(
  p => p.id !== 47 ? p : {...p, age: p.age + 1}
);
console.log(updatedUsers)*/





/*МЕТОД FILTER*/

/*Простой поиск (чувствительный к регистру)*/

/*let users = [
  { id: 11, name: 'Adam', age: 23, group: 'editor' },
  { id: 47, name: 'John', age: 28, group: 'admin' },
  { id: 85, name: 'William', age: 34, group: 'editor' },
  { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];
let res = users.filter(it => it.name.includes('li'));

console.log(res)*/


/*Простой поиск (не чувствительный к регистру)*/

/*let users = [
  { id: 11, name: 'Adam', age: 23, group: 'editor' },
  { id: 47, name: 'John', age: 28, group: 'admin' },
  { id: 85, name: 'William', age: 34, group: 'editor' },
  { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];
let res = users.filter(it => new RegExp('I', "i").test(it.name));

console.log(res)*/


/* Проверка есть ли у пользователей права администратора*/
/*let users = [
  { id: 11, name: 'Adam', age: 23, group: 'editor' },
  { id: 47, name: 'John', age: 28, group: 'admin' },
  { id: 85, name: 'William', age: 34, group: 'editor' },
  { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];

let hasAdmin = users.some(user => user.group === 'admin');*/



/*Поиск пересечений в массивах (A и B)*/
/*let arrA = [1, 4, 3, 2];
let arrB = [5, 2, 6, 7, 1];
let newArr = arrA.filter(it => arrB.includes(it));
console.log(newArr);*/

/*Поиск разницы в массивах (A и B)*/
/*let arrA = [1, 4, 3, 2];
let arrB = [5, 2, 6, 7, 1];
let newArrA = arrA.filter(it => !arrB.includes(it))
let newArrB = arrB.filter(it => !arrA.includes(it))

console.log(newArrA);
console.log(newArrB);*/


/*Объединение (A и B) массивов c уникальными значениями*/

/*let arrA = [1, 4, 3, 2];
let arrB = [5, 2, 6, 7, 1];
let newArr = [...new Set([...arrA, ...arrB])];

console.log(newArr)*/