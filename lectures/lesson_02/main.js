"use strict";
//PART 1 --- DOM STRUCTURE ------------------------------------------------------------
let targetByClass = document.getElementsByClassName('target');
console.log(targetByClass);
let targetByTag = document.getElementsByTagName('div');
console.log(targetByTag);
let forms = document.forms;
let f1 = forms[0];
console.log(f1.username);
let f1Element = f1['username'];
console.log(f1Element);
{
    let users = [
        { name: 'vasya', age: 31, status: false },
        { name: 'petya', age: 30, status: true },
        { name: 'kolya', age: 29, status: true },
        { name: 'olya', age: 28, status: false },
        { name: 'max', age: 30, status: true },
        { name: 'anya', age: 31, status: false },
        { name: 'oleg', age: 28, status: false },
        { name: 'andrey', age: 29, status: true },
        { name: 'masha', age: 30, status: true },
        { name: 'olya', age: 31, status: false },
        { name: 'max', age: 31, status: true }
    ];
    for (const user of users) {
        let div = document.createElement('div');
        div.innerText = user.name;
        document.body.appendChild(div);
    }
    function appender(tag) {
        document.createElement(tag);
    }
}
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then((users) => {
    console.log(users[0].name);
});
async function asyncFunc() {
    let users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then((value) => value.json());
    return users;
}
let s = 'okten is best';
let x = 123;
let f = false;
// PART 4 --- MODEL INTERSECTION -------------------------------------------------
{
    let users = [
        { id: 1, name: 'vasya', age: 31, status: false },
        { id: 1, name: 'petya', age: 30, status: true },
        { id: 1, name: 'kolya', age: 29, status: true },
        { id: 1, name: 'olya', age: 28, status: false },
        { id: 1, name: 'max', age: 30, status: true },
        { id: 1, name: 'anya', age: 31, status: false },
        { id: 1, name: 'oleg', age: 28, status: false },
        { id: 1, name: 'andrey', age: 29, status: true },
        { id: 1, name: 'masha', age: 30, status: true },
        { id: 1, name: 'olya', age: 31, status: false },
        { id: 1, name: 'max', age: 31, status: true }
    ];
}
// PART 5 --- INTERFACE --------------------------------------------------
{
    let users = [
        { name: 'vasya', age: 31, status: false },
        { name: 'petya', age: 30, status: true },
        { name: 'kolya', age: 29, status: true },
        { name: 'olya', age: 28, status: false },
        { name: 'max', age: 30, status: true },
        { name: 'anya', age: 31, status: false },
        { name: 'oleg', age: 28, status: false },
        { name: 'andrey', age: 29, status: true },
        { name: 'masha', age: 30, status: true },
        { name: 'olya', age: 31, status: false },
        { name: 'max', age: 31, status: true }
    ];
}
// PART 6 --- CLASS ---------------------------------------------------
{
    class User {
        // private name: string;
        // private age: number;
        // private status: boolean;
        constructor(_name, _age, _status) {
            this._name = _name;
            this._age = _age;
            this._status = _status;
            this._name = _name;
            this._age = _age;
            this._status = _status;
        }
        greeting() {
            console.log('hello world');
        }
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get age() {
            return this._age;
        }
        set age(value) {
            this._age = value;
        }
        get status() {
            return this._status;
        }
        set status(value) {
            this._status = value;
        }
    }
    let user = new User('vasya', 25, true);
    user.greeting(); // only public property is available to class instance
    //now we can get or set values of private fields of class
    console.log(user.age); // it will automatically call get() method for this field
    user.name = 'dima'; // same as get() will auto call set() for name field
    class NewUser extends User {
        constructor(name, age, status, _id) {
            super(name, age, status);
            this._id = _id;
            this._id = _id;
        }
        get id() {
            return this._id;
        }
        set id(value) {
            this._id = value;
        }
    }
    let newUser = new NewUser('asdf', 123, true, 1);
    console.log(newUser.name); // will call method get() from parent class (User)
    console.log(newUser.id); // will call method from NewUser class
}
