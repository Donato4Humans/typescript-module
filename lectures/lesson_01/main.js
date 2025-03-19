"use strict";
// PART_1: BASE TYPES
{
    let num = 135;
    let b = true;
    let str = 'test-typescript';
    function test(num1, num2) {
        return num1 + num2;
    }
    test(num, num + num); // attributes must be same type as in function declaration
    let arr = [11, 22, 33];
    arr.push(44);
    // arr.push('44'); //error wrong type
    let anyArr = [num, b, str]; // mixed-type array = bad practice(maybe with rare exclusions)
}
// PART_2: TYPE
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
// PART_3: TYPE METHODS
{
    let users = [
        { greeting: (str) => 'hello1', name: 'vasya', age: 31, status: false },
        { greeting: (str) => 'hello1', name: 'petya', age: 30, status: true }
    ];
}
// PART_4: DATA MODELS DESCRIPTION AND CLASSES + INTERFACES
{
    let usersI = [
        { greeting: (str) => 'hello1', name: 'vasya', age: 31, status: false },
        { greeting: (str) => 'hello1', name: 'petya', age: 30, status: true }
    ];
    class User {
        // we can add public to all attributes and delete above fields
        constructor(/*public*/ name, /*public*/ age, /*public*/ status) {
            this.name = name;
            this.age = age;
            this.status = status;
        }
        greeting(str) {
            return `hello${this.name}`;
        }
    }
    let users = [
        { greeting: (str) => 'hello1', name: 'vasya', age: 31, status: false },
        { greeting: (str) => 'hello1', name: 'petya', age: 30, status: true },
        new User('vadya', 39, false) // better to use this way without function like attribute
    ];
    console.log(users[0]);
}
// TO LINK TS SCRIPT TO HTML-PAGE DO IT JUST LIKE WITH JS BUT IN 'src' attribute use file_name.js INSTEAD OF file_name.ts
