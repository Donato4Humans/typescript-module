// HW1
{
    let str1: string = 'hello';
    console.log(str1);
    let str2: string = 'owu';
    console.log(str2);
    let str3: string = 'com';
    console.log(str3);
    let str4: string = 'ua';
    console.log(str4);
    let int1: number = 1;
    console.log(int1);
    let int2: number = 10;
    console.log(int2);
    let int3: number = -999;
    console.log(int3);
    let int4: number = 123;
    console.log(int4);
    const PI: number = 3.14;
    console.log(PI);
    let d: number = 2.7;
    console.log(d);
    let int5: number = 16;
    console.log(int5);
    let b1: boolean = true;
    console.log(b1);
    let b2: boolean = false;
    console.log(b2);
}
{
    let firstName: string = 'Bogdan';
    let middleName: string = 'Volodymyrovich';
    let lastName: string = 'Ishchenko';
    let person: string = `${firstName} ${middleName} ${lastName}`;
    console.log(person);
}

{
    let a: number = 100;
    console.log(typeof a, a);
    let b: string = '100';
    console.log(typeof b, b);
    let c: boolean = true;
    console.log(typeof c, c);
}

{
    let firstName: string | null = prompt('What is your first name?', 'Bogdan');
    console.log(firstName);
    let middleName: string | null = prompt('What is your middle name?', 'Volodymyrovich');
    console.log(middleName);
    let age:string | null = prompt('What is your age?', '26');
    console.log(age);
}

//----------------------------- HW2 ---------------------------------------

// Масиви та об'єкти

// #67kfznmiMl
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
{
    let arr:any = [1, 2, 3, 4, 5, 'hello', 'world', true, false, 3.14];
    console.log(arr[0]);
    console.log(arr[1]);
    console.log(arr[2]);
    console.log(arr[3]);
    console.log(arr[4]);
    console.log(arr[5]);
    console.log(arr[6]);
    console.log(arr[7]);
    console.log(arr[8]);
    console.log(arr[9]);
}
// #LARqoUj5I

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
{
    type BookType = {
        title: string;
        pageCount: number;
        genre: string
    }
    let book1:BookType = {
        title: 'title1',
        pageCount: 123,
        genre: 'genre1'
    }
    let book2:BookType = {
        title: 'title2',
        pageCount: 1234,
        genre: 'genre2'
    }
    let book3:BookType = {
        title: 'title3',
        pageCount: 12345,
        genre: 'genre3'
    }
}
//#sA3Gg1sCp

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.Поле "автори"-являється масивом.
// Кожен автор має поля name та age.
{
    type Author = {
        name: string;
        age: number
    }
    type BookType = {
        title: string;
        pageCount: number;
        genre: string;
        authors: Author[]
    }
    let book1:BookType = {
        title: 'title1',
        pageCount: 123,
        genre: 'genre1',
        authors : [
            { name : 'name1', age : 23},
            { name : 'name2', age : 23}
        ]
    }
    let book2:BookType = {
        title: 'title2',
        pageCount: 1234,
        genre: 'genre2',
        authors : [
            { name : 'name1', age : 23},
            { name : 'name2', age : 23}
        ]
    }
    let book3:BookType = {
        title: 'title3',
        pageCount: 12345,
        genre: 'genre3',
        authors : [
            { name : 'name1', age : 23},
            { name : 'name2', age : 23}
        ]
    }
}
//#jCHFnEbdmFd

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача
{
    type UserType = {
        name:string;
        username: string;
        password: string
    }
    let users:UserType[] = [
        {name: 'name1', username: 'username1', password: 'password1'},
        {name: 'name2', username: 'username2', password: 'password2'},
        {name: 'name3', username: 'username3', password: 'password3'},
        {name: 'name4', username: 'username4', password: 'password4'},
        {name: 'name5', username: 'username5', password: 'password5'},
        {name: 'name6', username: 'username6', password: 'password6'},
        {name: 'name7', username: 'username7', password: 'password7'},
        {name: 'name8', username: 'username8', password: 'password8'},
        {name: 'name9', username: 'username9', password: 'password9'},
        {name: 'name10', username: 'username10', password: 'password10'}
    ]
    for (const user of users) {
        console.log(user);
    }
}
//#coYydZuaeEB

// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2.
// Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
{
    interface ITemps {
        morning: number;
        day: number;
        evening: number
    }
    interface IDay {
        dayName: string;
        temps: ITemps
    }
    type DaysType = IDay[];

    let weekTemps:DaysType = [
        { dayName : 'Monday', temps: {morning: 0, day: 5, evening: 2}},
        { dayName : 'Tuesday', temps: {morning: 0, day: 5, evening: 2}},
        { dayName : 'Wednesday', temps: {morning: 0, day: 5, evening: 2}},
        { dayName : 'Thursday', temps: {morning: 0, day: 5, evening: 2}},
        { dayName : 'Friday', temps: {morning: 0, day: 5, evening: 2}},
        { dayName : 'Saturday', temps: {morning: 0, day: 5, evening: 2}},
        { dayName : 'Sunday', temps: {morning: 0, day: 5, evening: 2}}
    ]
}
//#bAUsaq6LI

// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3
{
    // @ts-ignore
    let x:number = +prompt('enter number');
    if(x !== 0){
        console.log('Вірно');
    }else{
        console.log('Невірно');
    }
}
//#3ckURgvs

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
{
    // @ts-ignore
    let time:number = +prompt('Enter minute from 0 to 59!');
    if(time >= 0 && time < 15){
        console.log('Перша чверть');
    }else if(time > 15 && time <= 30){
        console.log('Друга чверть');
    }else if(time > 30 && time <= 45){
        console.log('Третя чверть');
    }else if(time > 45 && time <= 59){
        console.log('Четверта чверть');
    }
}
//#UMoNq4biWGe

// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
{
    // @ts-ignore
    let day:number = +prompt('Enter day from 1 to 31!');
    if(day >= 1 && day <= 10){
        console.log('Перша декада');
    }else if(day >= 11 && day <= 20){
        console.log('Друга декада');
    }else if(day >= 21 && day <= 31) {
        console.log('Третя декада');
    }
}
//#KzrtqyQ

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня
// і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
{
    // @ts-ignore
    let dayNumber:number = +prompt('Enter week day number: from 1 to 7!');
    switch(dayNumber){
        case 1:
            console.log('Monday');
            break;
        case 2:
            console.log('Tuesday');
            break;
        case 3:
            console.log('Wednesday');
            break;
        case 4:
            console.log('Thursday');
            break;
        case 5:
            console.log('Friday');
            break;
        case 6:
            console.log('Saturday');
            break;
        case 7:
            console.log('Sunday');
            break;
        default:
            console.log('You entered wrong week day number! Try again!');
            break;
    }
}
//#uwsz1RnTQJ1

// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
{
    // @ts-ignore
    let number1:number = +prompt('Enter first number!');
    // @ts-ignore
    let number2:number = +prompt('Enter second number!');
    if(number1 > number2){
        console.log(`${number1} is max number!`);
    }else if(number2 > number1){
        console.log(`${number2} is max number!`);
    }else{
        console.log('Numbers are equal!');
    }
}
//#iBvqtjEm

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код який,буде присвоювати змінній х значення "default"
// якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
{
    let x:string = '';
    if(!!x === false){
        x = 'default';
    }else if(+x === 0){
        x = 'default';
    }
}
//#awLXL6TBzg

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
{
    interface ICourse {
        title: string;
        monthDuration: number
    }
    type CoursesType = ICourse[];

    let coursesAndDurationArray:CoursesType = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];
    for (const course of coursesAndDurationArray) {
        if(course.monthDuration > 5){
            console.log('Супер');
        }
    }
}
//-------------------------------- HW3 -------------------------------------

// #y7crMeFwHcS
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for(let i = 0; i < 10; i++){
    document.write(`<div>div</div>`);
}
// #TYj7ncx

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for(let i = 0; i < 10; i++){
    document.write(`<div>div - ${i}</div>`);
}
// #uzkt71dp

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
{
    let i:number = 0;
    const blockCount:number = 20;
    while(i < blockCount){
        document.write(`<h1>h1</h1>`);
        i++;
    }
}
// #OeT7t3uUMFi

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
{
    let i:number = 0;
    const blockCount:number = 20;
    while(i < blockCount){
        document.write(`<h1>h1 - ${i}</h1>`);
        i++;
    }
}
//#vLSZKMlO

// - Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону
// ШАБЛОН:
//  <ul>
//     <li>ITEM OF ARRAY</li>
//     <!--
//         і тд інші об'єкти масиву
//          ...
//          ...
//          ...
//     -->
// </ul>
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
{
    let listOfItems:string[] = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
    document.write(`<ul>`);
    for (const key in listOfItems) {
        document.write(`<li>${listOfItems[key]}</li>`);
    }
    document.write(`</ul>`);
}
// #Hdjws7E

// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//ШАБЛОН
//  <div class="product-card">
//         <h3 class="product-title">TITLE. Price - PRICE</h3>
//         <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
{
    interface IProduct {
        title: string;
        price: number;
        image: string
    }
    type ProductsType = IProduct[];
    let products: ProductsType = [
        {
            title: 'milk',
            price: 22,
            image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
        },
        {
            title: 'juice',
            price: 27,
            image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
        },
        {
            title: 'tomato',
            price: 47,
            image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
        },
        {
            title: 'tea',
            price: 15,
            image: 'https://m.media-amazon.com/images/I/513VDg+ageL._SL500_.jpg'
        },
    ];
    for (const product in products) {
        document.write(`<div class="product-card">`);
        document.write(`<h3 class="product-title">${products[product].title}. Price - ${products[product].price}</h3>
        <img src="${products[product].image}" alt="" class="product-image">`)
        document.write(`</div>`);
    }
}
// #4WrHwFTEop0 є масив users

//  за допомоги циклу вивести:
//  - користувачів зі статусом true
//  - користувачів зі статусом false
//  - користувачів які старші за 30 років
{
    interface IUser {
        name: string;
        age: number;
        status: boolean
    }
    type UsersType = IUser[];
    let users:UsersType = [
        {name: 'vasya', age: 31, status: false},
        {name: 'petya', age: 30, status: true},
        {name: 'kolya', age: 29, status: true},
        {name: 'olya', age: 28, status: false},
        {name: 'max', age: 30, status: true},
        {name: 'anya', age: 31, status: false},
        {name: 'oleg', age: 28, status: false},
        {name: 'andrey', age: 29, status: true},
        {name: 'masha', age: 30, status: true},
        {name: 'olya', age: 31, status: false},
        {name: 'max', age: 31, status: true}
    ];
    for (const user in users) {
        if(users[user].status){ // print if true
            console.log(users[user]);
        }
    }
    console.log('----------');
    for (const user in users) {
        if(!users[user].status){ // print if false
            console.log(users[user]);
        }
    }
    console.log('----------');
    for (const user in users) {
        if(users[user].age > 30){
            console.log(users[user]);
        }
    }
}
//-------------------------------------------- HW4 ----------------------------

// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
{
    // @ts-ignore
    let a:number = +prompt('Enter length of first rectangle side!');
    // @ts-ignore
    let b:number = +prompt('Enter length of second rectangle side!');

    function sRectangle(a:number, b:number) :number {
        return a * b;
    }
    console.log(`${sRectangle(a, b)} = area of square`);
}
//#ETGAxbEn8l

// - створити функцію яка обчислює та повертає площу кола з радіусом r
{
    const PI:number = 3.14;
    // @ts-ignore
    let r:number = +prompt("Enter circle radius!");

    function sCircle(r:number) :number {
        return PI * (r * r);
    }
    console.log(`${sCircle(r)} = area of circle`);
}
//#Mbiz5K4yFe7

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
{
    const PI:number = 3.14;
    // @ts-ignore
    let r:number = +prompt("Enter cylinder radius!");
    // @ts-ignore
    let h:number = +prompt("Enter cylinder height!");

    function sCylinder(r:number, h:number) :number {
        return (2 * PI * r * h) + 2 * (PI * (r * r));
    }
    console.log(`${sCylinder(r,h)} = area of cylinder`);
}
//#SIdMd0hQ

// - створити функцію яка приймає масив та виводить кожен його елемент
{
    let arr:any[] = [1, 2, 3, 4, 5, 'asdf', true];
    function arrayPrint(arr:any[]) :void {
        for (const item of arr) {
            console.log(arr[item]);
        }
    }
    arrayPrint(arr);
}
//#59g0IsA

// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
{
    let text :string | null = prompt('Enter text!');
    function pPrint(text:string | null) :void {
        document.write(`<p>${text}</p>`);
    }
    pPrint(text);
}
//#hOL6126

// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
// Текст li задати через аргумент всім однаковий
{
    let text:string | null = prompt('Enter text!');
    function listPrint(text:string | null) :void {
        document.write(`<ul>`);
        for(let i = 0; i < 3; i++){
            document.write(`<li>${text}</li>`);
        }
        document.write(`</ul>`);
    }
    listPrint(text);
}
//#0Kxco1edSN

// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
{
    let text:string | null = prompt('Enter text!');
    // @ts-ignore
    let liCount:number = +prompt('Enter number of li!');
    function listArgPrint(text:string | null, liCount:number) :void {
        document.write(`<ul>`);
        for(let i = 0; i < liCount; i++){
            document.write(`<li>${text}</li>`);
        }
        document.write(`</ul>`);
    }
    listArgPrint(text, liCount);
}
//#gEFoxMMO

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить його через document.write
{
    let arr:any[] = [123, 456, 789, 'asd', 'qwe', 'zxc', true, false];
    function arrPrint(arr:any[]) :void {
        document.write(`<ul>`);
        for (const item of arr) {
            document.write(`<li>${item}</li>`);
        }
        document.write(`</ul>`);
    }
    arrPrint(arr);
}
//#bovDJDTIjt

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
{
    interface IUser {
        id: number;
        name: string;
        age: number
    }
    type UsersType = IUser[];
    let users:UsersType = [
        {id: 1, name: 'name1', age: 18},
        {id: 2, name: 'name2', age: 19},
        {id: 3, name: 'name3', age: 20}
    ]
    function objArrPrint(users:UsersType) {
        for (const user of users) {
            document.write(`<ul>`);
            document.write(`<li>${user.id}</li>`);
            document.write(`<li>${user.name}</li>`);
            document.write(`<li>${user.age}</li>`);
            document.write(`</ul>`);
        }
    }
    objArrPrint(users);
}
//#pghbnSB

// - створити функцію яка повертає найменьше число з масиву
{
    let arr:number[] = [1, 5, 3, 9, 0, -1, -5];
    function findMin(arr:number[]){
        let min:number = arr[0];
        for (const number of arr) {
            if(arr[number] < min){
                min = arr[number];
            }
        }
        return min;
    }
    console.log(`${findMin(arr)} - minimal number from array`);
}
//#EKRNVPM

// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
{
    let arr:number[] = [1, 5, 3, 9, 0, -1, -3];
    function sumArr(arr:number[]){
        let result:number = 0;
        for (const number of arr) {
            result += arr[number];
        }
        return result;
    }
    console.log(`${sumArr(arr)} - sum of array`);
}
//#kpsbSQCt2Lf

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
{
    let arr:number[] = [1, 5, 3, 9, 0, -1, -6];
    let index1:number = 0;
    let index2:number = arr.length - 1;
    function swap(arr:number[], index1:number, index2:number):void{
        let temp:number = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }
    swap(arr, index1, index2)
    console.log(`${arr} - swapped array`);
}
//#mkGDenYnNjn

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
{
    interface ICurrency {
        currency: string;
        value: number
    }
    type CurrenciesType = ICurrency[];
    let currencyValues:CurrenciesType = [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}];
    function exchange(sumUAH:number, currencyValues:CurrenciesType, exchangeCurrency:string):number {
        for (const item of currencyValues) {
            if(item.currency === exchangeCurrency){
                return sumUAH / item.value;
            }
        }
        return 0;
    }
    let result:number = exchange(10000, currencyValues,'USD');
    console.log(result);
}
//----------------------------------------- HW5 ---------------------------------------

// Тут ті самі завдання, що і в занятті про базові функції, але зробити їх потрібно за допомоги стрілочних функцій
// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
{
    // @ts-ignore
    let a:number = +prompt('Enter length of first rectangle side!');
    // @ts-ignore
    let b:number = +prompt('Enter length of second rectangle side!');

    let sRectangle = (a:number, b:number) :number => a * b;
    console.log(`${sRectangle(a, b)} = area of square`);
}
//#ETGAxbEn8l

// - створити функцію яка обчислює та повертає площу кола з радіусом r
{
    const PI:number = 3.14;
    // @ts-ignore
    let r:number = +prompt("Enter circle radius!");

    let sCircle = (r:number) :number => PI * (r * r);
    console.log(`${sCircle(r)} = area of circle`);
}
//#Mbiz5K4yFe7

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
{
    const PI:number = 3.14;
    // @ts-ignore
    let r:number = +prompt("Enter cylinder radius!");
    // @ts-ignore
    let h:number = +prompt("Enter cylinder height!");

    let sCylinder = (r:number, h:number) :number => (2 * PI * r * h) + 2 * (PI * (r * r));
    console.log(`${sCylinder(r,h)} = area of cylinder`);
}
//#SIdMd0hQ

// - створити функцію яка приймає масив та виводить кожен його елемент
{
    let arr:any[] = [1, 2, 3, 4, 5, 'asdf', true];
    let arrayPrint = (arr:any[]) :void => {
        for (const item of arr) {
            console.log(arr[item]);
        }
    }
    arrayPrint(arr);
}
//#59g0IsA

// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
{
    let text:string | null = prompt('Enter text!');
    let pPrint = (text:string | null) :void =>  document.write(`<p>${text}</p>`);
    pPrint(text);
}
//#hOL6126

// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
// Текст li задати через аргумент всім однаковий
{
    let text:string | null = prompt('Enter text!');
    let listPrint = (text:string | null) :void => {
        document.write(`<ul>`);
        for(let i = 0; i < 3; i++){
            document.write(`<li>${text}</li>`);
        }
        document.write(`</ul>`);
    }
    listPrint(text);
}
//#0Kxco1edSN

// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
{
    let text:string | null = prompt('Enter text!');
    // @ts-ignore
    let liCount:number = +prompt('Enter number of li!');
    let listArgPrint = (text:string | null, liCount:number) :void => {
        document.write(`<ul>`);
        for(let i = 0; i < liCount; i++){
            document.write(`<li>${text}</li>`);
        }
        document.write(`</ul>`);
    }
    listArgPrint(text, liCount);
}
//#gEFoxMMO

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить його через document.write
{
    let arrPrint = (...arr:any[]) :void => {
        document.write(`<ul>`);
        for (const item of arr) {
            document.write(`<li>${item}</li>`);
        }
        document.write(`</ul>`);
    }
    arrPrint(123, 456, 789, 'asd', 'qwe', 'zxc', true, false);
}
//#bovDJDTIjt

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
{
    interface IUser {
        id: number;
        name: string;
        age: number
    }
    type UsersType = IUser[];
    let users:UsersType = [
        {id: 1, name: 'name1', age: 18},
        {id: 2, name: 'name2', age: 19},
        {id: 3, name: 'name3', age: 20}
    ]
    let objArrPrint = (users:UsersType) :void => {
        for (const user of users) {
            document.write(`<ul>`);
            for (const fieldName in user) {
                // @ts-ignore
                document.write(`<li>${user[fieldName]}</li>`);
            }
            document.write(`</ul>`);
        }
    }
    objArrPrint(users);
}
//#pghbnSB

// - створити функцію яка повертає найменьше число з масиву
{
    let findMin = (...arr:number[]) :number => {
        let min:number = arr[0];
        for (const number of arr) {
            if(arr[number] < min){
                min = arr[number];
            }
        }
        return min;
    }
    console.log(`${findMin(1, 5, 3, 9, 0, -1, -5)} - minimal number from array`);
}
//#EKRNVPM

// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
{
    let sumArr = (...arr:number[]) :number => {
        let result:number = 0;
        for (const number of arr) {
            result += arr[number];
        }
        return result;
    }
    console.log(`${sumArr(1, 5, 3, 9, 0, -1, -3)} - sum of array`);
}
//#kpsbSQCt2Lf

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
{
    let arr:number[] = [1, 5, 3, 9, 0, -1, -6];

    let swap = (arr:number[], index1:number, index2:number) :void => {
        let temp:number = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }
    swap(arr, 0, arr.length - 1)
    console.log(`${arr} - swapped array`);
}
//#mkGDenYnNjn

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
{
    interface ICurrency {
        currency: string;
        value: number
    }
    type CurrenciesType = ICurrency[];
    let currencyValues:CurrenciesType = [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}];
    let exchange = (sumUAH:number, currencyValues:CurrenciesType, exchangeCurrency:string):number => {
        for (const item of currencyValues) {
            if(item.currency === exchangeCurrency){
                return sumUAH / item.value;
            }
        }
        return 0;
    }
    let result:number = exchange(10000, currencyValues,'USD');
    console.log(result);
}
//--------------------------------------- HW6 -----------------------------------

// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
{
    let strLength = (...strArr:string[]) :void => {
        for (const str of strArr) {
            console.log(`Length of ${str} = ${str.length} symbols`);
        }
    }
    strLength('hello world', 'lorem ipsum', 'javascript is cool');
}
//#8lld9HMxXWB

// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
{
    let strLength = (...strArr:string[]) :void => {
        for (const str of strArr) {
            console.log(`${str} -> ${str.toUpperCase()}`);
        }
    }
    strLength('hello world', 'lorem ipsum', 'javascript is cool');
}
//#ClDsAm7xba7

// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
{
    let strLength = (...strArr:string[]) :void => {
        for (const str of strArr) {
            console.log(`${str} -> ${str.toLowerCase()}`);
        }
    }
    strLength('HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL');
}
//#0b89BkYZwu

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
{
    let dirtyString:string = ' dirty string   ';
    let newStr:string;
    newStr = dirtyString.replaceAll(' ', '');
    let index:number = newStr.indexOf('s', 1) - 1;

    let replace = (str:string, index:number, char:string):string => str.substring(0, index + 1) + char + str.substring(index + 1);
    console.log(replace(newStr, index, ' '));
}
//#bfoJuse4ZzP

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
{
    let str:string = 'Ревуть воли як ясла повні';
    let stringToArray = (str:string) :string[] => str.split(' ');
    let arr:string[] = stringToArray(str);
    console.log(arr);
}
//#Rbr5kEQ

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
{
    let arr:number[] = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
    let mappedArray:string[] = arr.map(function (value:number) :string{
        return value.toString();
    });
    console.log(mappedArray);
}
//#5hqyKTfmc

// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
{
    let nums:number[] = [11,21,3];
    let sortNums = (array:number[], direction:string):number[] | undefined => {
        if(direction === 'ascending'){
            return array.sort((n1:number, n2:number) :number => n1 - n2);
        }
        if(direction === 'descending'){
            return array.sort((n1:number, n2:number) :number => n2 - n1);
        }
    };
    console.log(sortNums(nums, 'ascending'));
    console.log(sortNums(nums, 'descending'));
}
//#yo06d74c1C

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
{
    interface ICourse {
        title: string;
        monthDuration: number
    }
    type CoursesType = ICourse[];
    let coursesAndDurationArray:CoursesType = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];

    let sortedArray:CoursesType = coursesAndDurationArray.sort((course1:ICourse, course2:ICourse) :number => {
        return course2.monthDuration - course1.monthDuration;
    });
    console.log(sortedArray);

    let filteredArray:CoursesType = coursesAndDurationArray.filter(value => {
        return value.monthDuration > 5;
    });
    console.log(filteredArray);

    let mappedArray:{ id: number; title:string; monthDuration: number; }[] = coursesAndDurationArray.map((value:ICourse, index:number):{ id: number; title:string; monthDuration: number; }  => {
        return {id: index + 1, ...value};
    });
    console.log(mappedArray);
}
//#bolvdlhP

//  описати колоду карт (від 6 до туза без джокерів)
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
interface ICard {
    cardSuit: string;
    value: string;
    color: string
}
type CardsType = ICard[];
let deck:CardsType = [
    {cardSuit: 'spade', value: '6',     color: 'black'},
    {cardSuit: 'spade', value: '7',     color: 'black'},
    {cardSuit: 'spade', value: '8',     color: 'black'},
    {cardSuit: 'spade', value: '9',     color: 'black'},
    {cardSuit: 'spade', value: '10',    color: 'black'},
    {cardSuit: 'spade', value: 'jack',  color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king',  color: 'black'},
    {cardSuit: 'spade', value: 'ace',   color: 'black'},
    {cardSuit: 'clubs', value: '6',      color: 'black'},
    {cardSuit: 'clubs', value: '7',      color: 'black'},
    {cardSuit: 'clubs', value: '8',      color: 'black'},
    {cardSuit: 'clubs', value: '9',      color: 'black'},
    {cardSuit: 'clubs', value: '10',     color: 'black'},
    {cardSuit: 'clubs', value: 'jack',   color: 'black'},
    {cardSuit: 'clubs', value: 'queen',  color: 'black'},
    {cardSuit: 'clubs', value: 'king',   color: 'black'},
    {cardSuit: 'clubs', value: 'ace',    color: 'black'},
    {cardSuit: 'heart', value: '6',     color: 'red'},
    {cardSuit: 'heart', value: '7',     color: 'red'},
    {cardSuit: 'heart', value: '8',     color: 'red'},
    {cardSuit: 'heart', value: '9',     color: 'red'},
    {cardSuit: 'heart', value: '10',    color: 'red'},
    {cardSuit: 'heart', value: 'jack',  color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king',  color: 'red'},
    {cardSuit: 'heart', value: 'ace',   color: 'red'},
    {cardSuit: 'diamond', value: '6',      color: 'red'},
    {cardSuit: 'diamond', value: '7',      color: 'red'},
    {cardSuit: 'diamond', value: '8',      color: 'red'},
    {cardSuit: 'diamond', value: '9',      color: 'red'},
    {cardSuit: 'diamond', value: '10',     color: 'red'},
    {cardSuit: 'diamond', value: 'jack',   color: 'red'},
    {cardSuit: 'diamond', value: 'queen',  color: 'red'},
    {cardSuit: 'diamond', value: 'king',   color: 'red'},
    {cardSuit: 'diamond', value: 'ace',    color: 'red'},
]
{
    let foundSpadeAce:ICard | undefined = deck.find(card => card.cardSuit === 'spade' && card.value === 'ace');
    console.log(foundSpadeAce);

    let foundSixes:CardsType = deck.filter(card => card.value === '6');
    console.log(foundSixes);

    let foundRed:CardsType = deck.filter(card => card.color === 'red');
    console.log(foundRed);

    let foundDiamond:CardsType = deck.filter(card => card.cardSuit === 'diamond');
    console.log(foundDiamond);

    let foundClubs:CardsType = deck.filter(card => card.cardSuit === 'clubs' && (card.value !== '6' && card.value !== '7'
        && card.value !== '8'));
    console.log(foundClubs);
}
//#EP5I1UUzAX

// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
{
    type ReducedDeckType = {
        spades: CardsType, diamonds: CardsType, hearts: CardsType, clubs: CardsType
    }
    let reducedDeck:ReducedDeckType = deck.reduce((accumulator:ReducedDeckType, card:ICard) :ReducedDeckType  => {
        switch (card.cardSuit) {
            case 'spade':
                accumulator.spades.push(card);
                break;
            case 'diamond':
                accumulator.diamonds.push(card);
                break;
            case 'heart':
                accumulator.hearts.push(card);
                break;
            case 'clubs':
                accumulator.clubs.push(card);
                break;
        }
        return accumulator;
    }, {spades: [], diamonds: [], hearts: [], clubs: []});
    console.log(reducedDeck);
}
//#4LJn7zBx

// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker
{
    interface ICourse {
        title: string;
        monthDuration: number;
        hourDuration: number;
        modules: string[]
    }
    type CoursesType = ICourse[];
    let coursesArray:CoursesType = [
        {
            title: 'JavaScript Complex',
            monthDuration: 5,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
        },
        {
            title: 'Java Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'angular',
                'aws',
                'docker',
                'git',
                'java core',
                'java advanced']
        },
        {
            title: 'Python Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'angular',
                'aws',
                'docker',
                'python core',
                'python advanced']
        },
        {
            title: 'QA Complex',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
        },
        {
            title: 'FullStack',
            monthDuration: 7,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'react',
                'angular',
                'aws',
                'docker',
                'git',
                'node.js',
                'python',
                'java']
        },
        {
            title: 'Frontend',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
        }
    ];
    let filteredArraySaas:CoursesType = coursesArray.filter(course => course.modules.includes('sass'));
    console.log(filteredArraySaas);

    let filteredArrayDocker:CoursesType = coursesArray.filter(course => course.modules.includes('docker'));
    console.log(filteredArrayDocker);
}
//--------------------------------------------- HW7 -----------------------------------

//#XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

class User {
    id: number;
    name: string;
    surname: string;
    email: string;
    phone: number

    constructor(id: number, name: string, surname: string, email: string, phone: number) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }

}
let users: User[] = [];
for (let i = 0; i < 10; i++) {
    users.push(new User(i + 1, `${i + 1}_name`, `${i + 1}_surname`, `${i + 1}_@email.com`, i + 100));
}
console.log(users);

//#2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filteredUsers:User[] = users.filter(user => user.id % 2 === 0);
console.log(filteredUsers);

//#pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
{
    let sortedUsers:User[] = filteredUsers.sort((user1:User, user2:User):number => user1.id - user2.id);
    console.log(sortedUsers);
}

//#nkMXISv
// - створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    public order: Order[];
    constructor(public id:number, public name:string, public surname:string, public email:string, public phone:number, ...order:Order[]){

        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
class Order{
    constructor(public id:number, public title:string, public price:number) {
        this.id = id;
        this.title = title;
        this.price = price
    }
}
let clients:Client[] = [];
for (let i = 0; i < 10; i++) {
    clients.push(new Client(i + 1, `${i + 1}_name`, `${i + 1}_surname`, `${i + 1}@email`, i + 38098000000, new Order(i, 'tovar2', i * 10)));
    for (let j = 10; j > i; j--) {
        clients[i].order.push(new Order(j, `tovar${j - i}`, j * 10)); //adding to order array for next task
    }
}
console.log(clients);

//#8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
{
    let sortedClients:Client[] = clients.sort((client1:Client, client2:Client):number => client1.order.length - client2.order.length);
    console.log(sortedClients);
}

//#vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
{
    class Driver{
        constructor(public name:string, public surname:string) {
            this.name = name;
            this.surname = surname;
        }
    }
    class Car{
        public driver:Driver;
        constructor(public model:string, public manufacturer:string, public year:number, public maxSpeed:number, public engineVolume:string, driver:Driver) {
            this.model = model;
            this.manufacturer = manufacturer;
            this.year = year;
            this.maxSpeed = maxSpeed;
            this.engineVolume = engineVolume;
            this.driver = driver;
        }

        drive():void{ console.log(`driving with speed ${this.maxSpeed}km per hour`); }
        info():void{
            for (const field in this) {
                console.log(`${field} - `, this[field]);
            }
        }
        increaseMaxSpeed(newSpeed:number):void{ this.maxSpeed += newSpeed; }
        changeYear(newValue:number):void { this.year = newValue; }
        addDriver(driver:Driver):void { this.driver = driver; }
    }
    let car = new Car('model S plaid', 'Tesla', 2025, 280, '1020hp', new Driver('bodya', 'pupi'));
    car.drive();
    car.increaseMaxSpeed(20);
    car.changeYear(2030);
    car.addDriver(new Driver('vasya', 'vasin'));
    car.info();
}

//#zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
{
    class Cinderella{
        constructor(public name:string, public age:number, public footSize:number) {
            this.name = name;
            this.age = age;
            this.footSize = footSize;
        }
    }
    let arrayOfCinderella:Cinderella[] = [];
    for(let i = 0; i < 10; i++){
        arrayOfCinderella.push(new Cinderella(`${i+1}_name`, i + 18, i + 35));
    }

    class Prince{
        constructor(public name:string, public age:number, public slipperFoundSize:number) {
            this.name = name;
            this.age = age;
            this.slipperFoundSize = slipperFoundSize;
        }
    }
    let prince:Prince = new Prince('Charming', 18, 39);
//loop task
    for (let cinderella of arrayOfCinderella) {
        if(cinderella.footSize === prince.slipperFoundSize){
            console.log(cinderella,` must be with `, prince);
            break;
        }
    }
//find task
    prince.slipperFoundSize = 42;
    let foundCinderella:Cinderella | undefined = arrayOfCinderella.find(cinderella => cinderella.footSize === prince.slipperFoundSize);
    console.log(foundCinderella,` must be with `, prince);
}

//#gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter
{
    class MyArray<T> extends Array<T>{
        customForEach (callback: (value: T, index: number, array: T[]) => void ){
            for (let i = 0; i < this.length; i++) {
                if(i in this){
                    callback(this[i], i, this);
                }
            }
        }

        customFilter (callback: (value: T) => unknown ):MyArray<T> {
            const result:MyArray<T> = new MyArray<T>();
            for (const value of this) {
                if(callback(value)){
                    result.push(value);
                }
            }
            return result;
        }
    }

    //testing custom forEach
    const arr:MyArray<number> = new MyArray<number>(1, 5, 19);
    arr.customForEach((value:number, index:number, array:number[]):void => {
        console.log(`Value: ${value}, Index: ${index}, Array: ${array}`);
    });

    //testing custom filter
    const newArr:MyArray<number> = arr.customFilter((value:number):boolean => value !== 5);
    console.log(newArr); // [1, 19]
}

//--------------------------------------------- HW8 -----------------------------------------
//#AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
// Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.
{
    interface IObj  {
        name: string;
        skills: string[];
        greeting: () => void;
    }
    let obj:IObj = {
        name: 'max',
        skills: ['html', 'css'],
        greeting: function ():void {
            console.log(`say HI!`);
        }
    }
    let deepCopy = (obj:IObj) => {
        let resultObj;
        if(obj){
            let funcArr = [];
            for (let field in obj) {
                if(typeof obj.greeting === "function"){
                    let funcCopy = obj.greeting.bind({});
                    funcArr.push({funcCopy, field});
                }
            }
            let str:string = JSON.stringify(obj);
            resultObj = JSON.parse(str);
            for (const func of funcArr) {
                resultObj[func.field] = func.funcCopy;
            }
            return resultObj;
        }else{
            console.log('Invalid obj!');
            return undefined;
        }
    }
    deepCopy(obj).greeting();
}

//#iz6emEsP2BA
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
// Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції
{
    interface ICourse {
        title: string;
        monthDuration: number
    }
    type CoursesType = ICourse[];
    let coursesAndDurationArray:CoursesType = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];
    let courses:CoursesType = coursesAndDurationArray;
    let mappedArr:CoursesType = courses.map((value:ICourse, index:number) => ({id: index + 1, ...value}));
    console.log(mappedArr);
}