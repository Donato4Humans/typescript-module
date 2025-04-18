// Створити функцію, яка робить запити на апі, та віддає результат свого запиту. Тип відповіді визначається дженеріком функції.
//
// Сигнатура функції під час виклику foobar<SomeType>(‘/url)
//
// SomeType – ваш тип відповіді
//
// url – ваш ендпоінт, з якого чекаємо відповідь

async function genericFetch<T>(url: URL) :Promise<T> {
    let promise:T = await fetch(url)
        .then((value:Response) => value.json());
    return promise;
}

interface IUser{
    id: number;
    name: string
}
let url: URL = new URL('https://jsonplaceholder.typicode.com/users');
let fetchResult: Promise<IUser[]> = genericFetch<IUser[]>(url);//.then(value => console.log(value) ); // test call

console.log(fetchResult);