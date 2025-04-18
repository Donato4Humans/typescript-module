"use strict";
// ------------------------------------ HW9 ---------------------------------
//#8Nmt60ZT
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
{
    let block = document.createElement('div');
    block.classList.add('wrap', 'collapse', 'alpha', 'beta');
    block.style.backgroundColor = 'black';
    block.style.color = 'pink';
    block.style.fontSize = '45px';
    block.innerText = 'Lorem ipsum dolor sit amet.'; // just to display on page
    document.body.appendChild(block);
    let blockCopy = block.cloneNode(true);
    document.body.appendChild(blockCopy);
}
//#OPLI89c9G
// - Є масив:
// ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
{
    let arr = ['Main', 'Products', 'About us', 'Contacts'];
    let ulNav = document.createElement('ul');
    for (const liContent of arr) {
        let li = document.createElement('li');
        li.innerText = liContent;
        ulNav.appendChild(li);
    }
    document.body.appendChild(ulNav);
}
let coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
{
    for (const course of coursesAndDurationArray) {
        let div = document.createElement('div');
        div.innerText = `title: ${course.title}, monthDuration: ${course.monthDuration}`;
        document.body.appendChild(div);
    }
}
//#Kx1xgoKy8
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.
{
    for (const course of coursesAndDurationArray) {
        let div = document.createElement('div');
        div.classList.add('item');
        let h1 = document.createElement('h1');
        h1.classList.add('heading');
        h1.innerText = course.title;
        let p = document.createElement('p');
        p.classList.add('description');
        p.innerText = course.monthDuration.toString();
        div.append(h1, p);
        document.body.appendChild(div);
    }
}
// ADDITIONAL TASKS--------------------------------------------------------------------------------
//Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
{
    let coursesArray = [
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
    for (const course of coursesArray) {
        let wrapper = document.createElement('div');
        let divTitle = document.createElement('div');
        divTitle.innerText = course.title;
        let divMonths = document.createElement('div');
        divMonths.innerText = course.monthDuration + ' months; ';
        divMonths.style.display = 'inline';
        let divHours = document.createElement('div');
        divHours.innerText = course.hourDuration + ' hours';
        divHours.style.display = 'inline';
        let ulModules = document.createElement('ul');
        for (const module in course.modules) {
            let liModule = document.createElement('li');
            liModule.innerText = course.modules[module];
            ulModules.appendChild(liModule);
        }
        wrapper.append(divTitle, divMonths, divHours, ulModules);
        document.body.appendChild(wrapper);
    }
}
//створити три блоки з різним текстовим контентом. зробити так, щоб всі блоки мали висоту найбільшого з них.
{
    let div1 = document.createElement('div');
    div1.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequatur dicta dolor doloremque ea earum, itaque libero molestias odio quos unde veritatis voluptate? Earum, id.';
    let div2 = document.createElement('div');
    div2.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti iste minima qui reiciendis. Aliquam aliquid asperiores autem consequatur dolorem dolores, ea eos esse est fugiat fugit hic ipsam laborum modi molestiae necessitatibus nisi officiis optio perferendis quaerat quos ratione sapiente sequi sint ullam, velit veniam! Deleniti itaque praesentium quas reprehenderit!';
    let div3 = document.createElement('div');
    div3.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae, commodi consequatur debitis delectus dolore doloremque dolorum eum impedit in incidunt ipsam itaque magni maxime minima nulla obcaecati porro provident quasi qui quisquam ratione recusandae sint, sit totam veritatis voluptas! A ad alias autem cumque dolores eius eligendi error esse est eveniet id illum ipsa, laboriosam magnam necessitatibus officia optio placeat quia quibusdam ratione suscipit totam velit voluptatum! Accusamus ad distinctio doloribus molestiae nemo quam?Lorem ipsum dolor sit amet';
    document.body.append(div1, div2, div3);
    const divs = [div1, div2, div3];
    let maxHeight = 0;
    divs.forEach((div) => {
        const height = div.offsetHeight;
        if (height > maxHeight) {
            maxHeight = height;
        }
    });
    divs.forEach((div) => div.style.height = `${maxHeight}px`);
}
// ----------------------------------------- HW10 ------------------------------------------
//#sH8c4er - 1
// - Створити довільний елемент з id = text та створити кнопку.
// Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
{
    let div = document.getElementById('text');
    let btn = document.getElementById('btn');
    if (btn && div) {
        btn.onclick = function () {
            div.style.display = 'none';
        };
    }
}
//#j693ca8 - 2
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
{
    let input = document.getElementsByTagName('input');
    let submitBtn = document.getElementById('sendAge');
    if (submitBtn && input[0]) {
        submitBtn.onclick = function () {
            let age = +input[0].value;
            if (age < 18) {
                console.log(`Your age is less than 18! AGE: ${age}`);
            }
        };
    }
}
//#ymAmN2xJ - 3
// Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
{
    const formUser = document.forms[0];
    formUser.onsubmit = function (ev) {
        ev.preventDefault();
        let user = { name: formUser.firstName.value, surname: formUser.surname.value, age: formUser.age.value };
        let div = document.createElement('div');
        div.innerText = JSON.stringify(user);
        formUser.appendChild(div);
    };
}
//#2VaLt4vDczH - 4
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
{
    let numDiv = document.getElementById('numberDiv');
    if (numDiv) {
        // @ts-ignore
        let number = +localStorage.getItem('num');
        number += 1;
        localStorage.setItem('num', number.toString());
        numDiv.innerText = number.toString();
    }
}
//#LhSfdhM3 - 5
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
// в масив sessionsList зберігається інформація про дату та час відвідування сторінки.
// Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а малювати в DOM
{
    // @ts-ignore
    let sessionList = JSON.parse(localStorage.getItem('sessions')) || [];
    if (sessionList) {
        sessionList.push(new Date().toString());
        localStorage.setItem('sessions', JSON.stringify(sessionList));
        //other part of task in sessionsList.html
    }
}
//#Jg0gPO00 - 6
// створити конвертор ваги з кг в фунти. данні заповнюються через інпут.
// При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
{
    let input = document.getElementsByTagName('input');
    let divDisplay = document.getElementById('weightInPounds');
    if (input[4] && divDisplay) {
        input[4].oninput = function () {
            divDisplay.innerText = (input[4].valueAsNumber * 2.205).toString();
        };
    }
}
//#RbQGnH5DuC - 7
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void
{
    let testArray = [{ testObj: 'test' }];
    localStorage.setItem('testArray', JSON.stringify(testArray));
    function addToLocalStorage(arrayName, objToAdd) {
        if (typeof objToAdd === 'object' && localStorage.getItem(arrayName)) {
            // @ts-ignore
            let neededArray = JSON.parse(localStorage.getItem(arrayName));
            neededArray.push(objToAdd);
            localStorage.setItem(arrayName, JSON.stringify(neededArray));
        }
        else {
            console.error('NO SUCH ARRAY OR INVALID OBJECT TO ADD!!!');
        }
    }
    addToLocalStorage('testArray', { name: 'name1', surname: 'surname1' });
}
//#kUSgFqWY - 8
//  Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вміст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
{
    let sendBtn = document.getElementById('tableBtn');
    let tableWrap = document.getElementById('tableTarget');
    if (sendBtn && tableWrap) {
        sendBtn.onclick = function () {
            tableWrap.innerHTML = '';
            let rows = document.getElementsByTagName('input')[5].valueAsNumber;
            let columns = document.getElementsByTagName('input')[6].valueAsNumber;
            let content = document.getElementsByTagName('input')[7].value;
            for (let i = 0; i < rows; i++) {
                let row = document.createElement('div');
                row.style.display = 'flex';
                for (let j = 0; j < columns; j++) {
                    let column = document.createElement('div');
                    column.innerText = content;
                    column.style.border = '1px solid'; //for table-like look
                    row.appendChild(column);
                }
                tableWrap.appendChild(row);
            }
        };
    }
}
//#bq1zkx7WP - 9
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//  зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//  При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
{
    let div = document.getElementById('divUAH');
    let currency = 'грн';
    // @ts-ignore
    let number = +localStorage.getItem('money') || 100;
    if (div) {
        div.innerText = number + currency;
    }
    document.onreadystatechange = function () {
        if (document.readyState === 'complete') {
            // @ts-ignore
            if ((Date.now() - JSON.parse(localStorage.getItem('date'))) / 1000 >= 10 && // divide buy 1000 to exclude milliseconds
                // @ts-ignore
                JSON.parse(localStorage.getItem('date'))) { // and check if timer exist in localStorage
                number += 10;
                localStorage.setItem('money', number.toString());
                if (div) {
                    div.innerText = number + currency;
                }
            }
            localStorage.setItem('date', JSON.stringify(Date.now()));
        }
    };
}
//#NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
{
    //get needed DOM-elements
    const target = document.getElementById('target'); //wrapper for displayed objects
    if (target) {
        target.style.padding = '10px';
    }
    const prevBtn = document.getElementById('prevPage'); // buttons to navigate
    const nextBtn = document.getElementById('nextPage');
    //Initialization
    const PAGE_SIZE = 10;
    const arr = [];
    for (let i = 1; i <= 100; i++) { // create array of objects
        arr.push(`OBJECT_${i}`);
    }
    const totalPages = Math.ceil(arr.length / PAGE_SIZE); // 10 pages total
    let currentPage = 0;
    //Main function to display objects on needed page
    function displayPage(page) {
        if (target) {
            target.innerHTML = '';
        }
        const startIndex = page * PAGE_SIZE; //page 0->0, page 1->10...
        const endIndex = Math.min(startIndex + PAGE_SIZE, arr.length);
        for (let i = startIndex; i < endIndex; i++) { // display first 10 objects
            const div = document.createElement('div');
            div.style.border = '1px solid';
            div.innerText = arr[i];
            if (target) {
                target.appendChild(div);
            }
        }
    }
    //Display first page
    displayPage(currentPage);
    //Event handlers for navigation
    if (prevBtn) {
        prevBtn.onclick = function () {
            currentPage = (currentPage - 1 + totalPages) % totalPages; // wrap around to last page if below 0
            displayPage(currentPage);
        };
    }
    if (nextBtn) {
        nextBtn.onclick = function () {
            currentPage = (currentPage + 1) % totalPages; // wrap around to first page if greater than last page
            displayPage(currentPage);
        };
    }
}
// --------------------------------------------- HW11 --------------------------------
//#HmvAfRQM
// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
{
    fetch('https://dummyjson.com/carts?limit=50')
        .then((res) => res.json())
        .then((dataObj) => {
        console.log(dataObj);
        let { carts } = dataObj;
        for (const cart of carts) {
            let cartDiv = document.createElement('div');
            cartDiv.style.border = '1px solid';
            for (const field in cart) {
                let cartField = document.createElement('p');
                cartField.style.border = '1px solid';
                if (field === 'products') {
                    cartField.innerText = `${field} : `;
                    cartField.innerText += JSON.stringify(cart.products);
                }
                else {
                    cartField.innerText = `${field} : ${cart[field]}`;
                }
                cartDiv.appendChild(cartField);
            }
            document.body.appendChild(cartDiv);
        }
    });
}
//#whXxOBlYS0H
// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
// Інгредієнти повинні бути список під час відображення.
{
    fetch('https://dummyjson.com/recipes?limit=50')
        .then((res) => res.json())
        .then((dataObj) => {
        console.log(dataObj);
        let { recipes } = dataObj;
        for (const recipe of recipes) { //iterate through recipes
            let recipeDiv = document.createElement('div');
            recipeDiv.style.border = '1px solid';
            let image = document.createElement('img'); //recipe image
            image.src = recipe.image;
            image.style.width = '200px';
            recipeDiv.appendChild(image);
            for (const field in recipe) { //iterate through fields of every recipe
                let recipeField = document.createElement('p');
                recipeField.style.border = '1px solid';
                if (Array.isArray(recipe[field]) && recipe[field].length > 2) { // if field is array and its length more than 2 = build list
                    let ol = document.createElement('ol');
                    recipeField.innerText = `${field} : `;
                    let arr = recipe[field];
                    for (const item of arr) { // iterate through field array + add list items
                        let li = document.createElement('li');
                        li.innerText = item;
                        ol.appendChild(li);
                    }
                    recipeField.appendChild(ol);
                    recipeDiv.appendChild(recipeField);
                }
                else {
                    if (field !== 'image') {
                        recipeField.innerText = `${field} : ${recipe[field]}`;
                        recipeDiv.appendChild(recipeField);
                    }
                }
            }
            document.body.appendChild(recipeDiv);
        }
    });
}
