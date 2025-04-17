//PART 1 --- DOM STRUCTURE ------------------------------------------------------------

let targetByClass:HTMLCollectionOf<Element> = document.getElementsByClassName('target');
console.log(targetByClass);

let targetByTag: HTMLCollectionOf<HTMLDivElement> = document.getElementsByTagName('div');
console.log(targetByTag);

let forms:HTMLCollectionOf<HTMLFormElement> = document.forms;
let f1:HTMLFormElement = forms[0];
console.log(f1.username);
let f1Element:HTMLInputElement = f1['username'];
console.log(f1Element);

{
    interface IUser {
        name: string;
        age: number;
        status: boolean
    }
    type UsersType = IUser[];
    let users: UsersType = [
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

    for (const user of users) {
        let div: HTMLDivElement = document.createElement('div');
        div.innerText = user.name;
        document.body.appendChild(div);
    }

    function appender(tag:keyof HTMLElementTagNameMap){
        document.createElement(tag);
    }
}

// PART 2 --- ASYNC ------------------------------------------------------------

interface IUser{
    id: number;
    name: string
}

fetch('https://jsonplaceholder.typicode.com/users')
.then(value => value.json())
.then((users:IUser[]) => {
    console.log(users[0].name);
})

async function asyncFunc() :Promise<IUser[]> {
    let users:IUser[] = await fetch('https://jsonplaceholder.typicode.com/users')
        .then((value:Response) => value.json());

    return users;
}

// PART 3 --- ALIAS ------------------------------------------------------------

type MyString = string;
let s: MyString = 'okten is best';

type PrimitiveTypes = string | number | boolean;
let x: PrimitiveTypes = 123;

type Falsy = 0 | '' | false | null | undefined // | typeof NaN;
let f: Falsy = false;

// PART 4 --- MODEL INTERSECTION -------------------------------------------------

{
    type UserType = {
        name: string;
        age: number;
        status: boolean
    }
    // example of model intersection to add something to type that cannot be modified directly
    type NewUserType = UserType & { id: number; email?: string}; // we can add more fields with & {phone:number}
    let users: NewUserType[] = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 1, name: 'petya', age: 30, status: true},
        {id: 1, name: 'kolya', age: 29, status: true},
        {id: 1, name: 'olya', age: 28, status: false},
        {id: 1, name: 'max', age: 30, status: true},
        {id: 1, name: 'anya', age: 31, status: false},
        {id: 1, name: 'oleg', age: 28, status: false},
        {id: 1, name: 'andrey', age: 29, status: true},
        {id: 1, name: 'masha', age: 30, status: true},
        {id: 1, name: 'olya', age: 31, status: false},
        {id: 1, name: 'max', age: 31, status: true}
    ];

    type MyFn = (n: number) => void; // we can use type to make new type for function(earlier interfaces can`t do this)
}

// PART 5 --- INTERFACE --------------------------------------------------

{
    interface IUser {
        name: string;
        age: number;
        status: boolean
    }
    // example of model intersection to add something to type that cannot be modified directly
    interface IUser {
        id?:number // we can also extend same interface and add new fields
    }

    // other way to extend interface but now same as previous
    interface INewUser extends IUser{
        phone?: number
    }

    let users: INewUser[] = [
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
}

// PART 6 --- CLASS ---------------------------------------------------

{
    class User{
        // private name: string;
        // private age: number;
        // private status: boolean;

        constructor(private _name: string, private _age: number, private _status: boolean) {
            this._name = _name;
            this._age = _age;
            this._status = _status;
        }
        public greeting(){
            console.log('hello world');
        }


        get name(): string {
            return this._name;
        }
        set name(value: string) {
            this._name = value;
        }

        get age(): number {
            return this._age;
        }
        set age(value: number) {
            this._age = value;
        }

        get status(): boolean {
            return this._status;
        }
        set status(value: boolean) {
            this._status = value;
        }
    }

    let user: User = new User('vasya', 25, true);
    user.greeting(); // only public property is available to class instance

    //now we can get or set values of private fields of class
    console.log(user.age); // it will automatically call get() method for this field

    user.name = 'dima'; // same as get() will auto call set() for name field

    class NewUser extends User{
        constructor(name: string, age: number, status: boolean, private _id: number) {
            super(name, age, status);
            this._id = _id;
        }

        get id(): number {
            return this._id;
        }
        set id(value: number) {
            this._id = value;
        }
    }

    let newUser:NewUser = new NewUser('asdf', 123, true, 1);
    console.log(newUser.name); // will call method get() from parent class (User)
    console.log(newUser.id); // will call method from NewUser class
}