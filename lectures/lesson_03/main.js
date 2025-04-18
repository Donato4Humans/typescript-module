"use strict";
// PART1 --- ABSTRACT CLASS ------------------------------------------------
class Animal {
    constructor(isAlive) {
        this.isAlive = isAlive;
    }
}
class Bird extends Animal {
    constructor(isAlive, haveWings) {
        super(isAlive);
        this.haveWings = haveWings;
    }
    voice() {
        console.log('chik chirik');
    }
}
// IF YOU EXTEND FROM INTERFACE YOU SIGN "CONTRACT" THAT MEANS YOU MUST IMPLEMENT ALL PROPERTIES FROM THAT INTERFACE
class NewBird {
    constructor(isAlive, haveWings, id) {
        this._isAlive = isAlive;
        this._haveWings = haveWings;
        this._id = id;
    }
    get isAlive() {
        return this._isAlive;
    }
    set isAlive(value) {
        this._isAlive = value;
    }
    get haveWings() {
        return this._haveWings;
    }
    set haveWings(value) {
        this._haveWings = value;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    voice() {
        console.log('chik chirik');
    }
}
class Horse {
    constructor(isAlive) {
        this.isAlive = isAlive;
    }
    voice() {
        console.log('igogo');
    }
}
// PART 4 ------------------------------ GENERICS -----------------------------------
class UserGen {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
let userGen1Num = new UserGen(123, 'asdf');
let userGen2Str = new UserGen('asdf', 'asdf');
let userGen3Obj = new UserGen({ id: 123 }, 'asdf');
let item = localStorage.getItem('user');
if (item) {
    let user = JSON.parse(item);
}
function lsExtraction(key) {
    let objJson = localStorage.getItem(key);
    if (objJson) {
        return JSON.parse(objJson);
    }
    return {};
}
let iDog = lsExtraction('dog');
let iUser = lsExtraction('user');
