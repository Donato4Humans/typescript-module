// PART1 --- ABSTRACT CLASS ------------------------------------------------

abstract class Animal{
    isAlive:boolean;

    constructor(isAlive: boolean) {
        this.isAlive = isAlive;
    }
    abstract voice(): void;
}

class Bird extends Animal{
    haveWings: boolean;

    constructor(isAlive: boolean, haveWings: boolean) {
        super(isAlive);
        this.haveWings = haveWings;
    }

    voice(): void {
        console.log('chik chirik');
    }
}

// PART 2 --- ABSTRACT WITH INTERFACE --------------------------------------

interface IAnimal{
    isAlive: boolean;
    voice: () => void;
}
interface X /* extends IAnimal */{ //we can extend from other interface
    id:number;
}

// IF YOU EXTEND FROM INTERFACE YOU SIGN "CONTRACT" THAT MEANS YOU MUST IMPLEMENT ALL PROPERTIES FROM THAT INTERFACE
class NewBird implements IAnimal, X{ // and here we can now delete X interface
    private _isAlive: boolean;
    private _haveWings: boolean;
    private _id:number;
    constructor(isAlive: boolean, haveWings: boolean, id: number) {
        this._isAlive = isAlive;
        this._haveWings = haveWings;
        this._id = id;
    }

    get isAlive(): boolean {
        return this._isAlive;
    }
    set isAlive(value: boolean) {
        this._isAlive = value;
    }

    get haveWings(): boolean {
        return this._haveWings;
    }
    set haveWings(value: boolean) {
        this._haveWings = value;
    }

    get id(): number {
        return this._id;
    }
    set id(value: number) {
        this._id = value;
    }

    voice(): void {
        console.log('chik chirik');
    }
}

// PART 3 --- ABSTRACT WITH TYPES -----------------------------------------------
// ALMOST SAME FUNCTIONALITY LIKE INTERFACE WITH LAST UPDATES FOR TYPES (IN 2024 YEAR)

type AnimalType = {
    isAlive: boolean;
    voice: () => void;
}

class Horse implements AnimalType{
    isAlive: boolean;

    constructor(isAlive: boolean) {
        this.isAlive = isAlive;
    }

    voice(): void {
        console.log('igogo');
    }
}

// PART 4 ------------------------------ GENERICS -----------------------------------

class UserGen<T> {
    id: T;
    name: string;
    constructor(id: T, name: string) {
        this.id = id;
        this.name = name;
    }
}

let userGen1Num = new UserGen<number>(123, 'asdf');
let userGen2Str = new UserGen<string>('asdf', 'asdf');
let userGen3Obj = new UserGen<{ id: number; }>({id: 123}, 'asdf');

// -------------------------- GENERIC FUNCTIONS(TEMPLATES)
interface IUserLS{
    id: number;
    name: string;
}

let item = localStorage.getItem('user');

if(item){
    let user:IUserLS = JSON.parse(item) as IUserLS;
}

interface IDog{
    aka: string;
}

function lsExtraction<T>(key: string):T {
    let objJson = localStorage.getItem(key);
    if(objJson){
        return JSON.parse(objJson) as T;
    }
    return {} as T;
}

let iDog = lsExtraction<IDog>('dog');

let iUser = lsExtraction<IUserLS>('user');