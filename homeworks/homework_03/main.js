"use strict";
// Створити функцію, яка робить запити на апі, та віддає результат свого запиту. Тип відповіді визначається дженеріком функції.
//
// Сигнатура функції під час виклику foobar<SomeType>(‘/url)
//
// SomeType – ваш тип відповіді
//
// url – ваш ендпоінт, з якого чекаємо відповідь
async function genericFetch(url) {
    let promise = await fetch(url)
        .then((value) => value.json());
    return promise;
}
let url = new URL('https://jsonplaceholder.typicode.com/users');
let fetchResult = genericFetch(url); //.then(value => console.log(value) ); // test call
console.log(fetchResult);
