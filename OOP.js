/*
JavaScript is a versatile and dynamic programming
language that supports multiple paradigms,
including prodecdural, functionsal and object-oriented
programming. While javaScript is not a purely ibject
oriented language, it provides the tools and features
to implement OOP concepts effectively
*/

/*
OOP in js refers to designing and structuring the code
around objects and their interactions. It is a programming
paradigm that allows developers to model real-world
entities and their relationships using objects and classes
*/

/*
THIS Keyword

The js this keyword refers to the object it belongs to.

In a method - this refers to the owner object
Alone - this refers to the global object
in a function - this refers to the gobal object
*/ 

console.log(this === window) // output : true

//case-1
const obj = {
    firstname : "Loda",
    lastname : "chaman",
    fullname : function(){
        return `${this.firstname} ${this.lastname}`;
    }
};

const res = obj.fullname();
console.log(res);

// Since the this keyword is inside an method of an object
// it belongs to the owner of the object.
// Therefore the output will be Loda chaman

//case-2
const ob = {
    firstname : "Loda",
    lastname : "chaman",
    fullname : () => {
        return `${this.firstname} ${this.lastname}`;
    }
};

const result = ob.fullname();
console.log(result);

// here the output is undefined undefined
// as the this keyword is refering to the window object
// and the variables in the window object is not defined

//case-3
const oye = {
    firstname : "Loda",
    lastname : "chaman",
    fullname : () => {
        return this;
    }
};

const huh = oye.fullname();
console.log(huh);
// here the this keyword refers to the window object
// as it is inside the arrow function.


/* 
A factory function is a type of function that is used to create
and return obects. It's a design pattern that provides an 
alternative way to crate objects compared to using constructors and
the new keyword.
*/

function createPerson(firstName, lastName, occupation){
    return {
        firstName : firstName,
        lastName : lastName,
        occupation : occupation,
        fullName : function(){
            console.log(
                `Hello my name is ${this.firstName} ${this.lastname} and i have 
                experience in ${this.occupation}`
            )
        }
    }
}

const user1 = createPerson("Aditya","Panigrahy","Design");
console.log(user1);
user1.fullName();

const user2 = createPerson("Sachin","Tendulkar","Full Stack developer");
console.log(user2);
user2.fullName;

/*
Constructor function in javaScript are regular functions used
with the new keyword to create and initialize objects with 
shared properties and methods.
*/

// Syntax: function functionname with first letter in uppercase

function CreatePeople(identity, last, pl){
    this.identity = identity; // this will give output as window object
    this.last = last;
    this.pl = pl;
    this.info = function(){
        console.log(`Hey my name is ${this.identity} and i am interested in ${this.pl}`)
    }
}

// so to avoid that we will use new keyword

const john = new CreatePeople("John", "Doe", "Golang");
console.log(john);
john.info();
/*
New Keyword
1. First create the empty object {}
2. sets "this" to point to that object
We can omit the return statement using new keyword
*/ 

function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
    this.getInfo = function(){
        return `${this.title} by ${this.author} (${this.year})`
    }
}

const book1 = new Book("The subtle art of not giving a Fuck", "Mark", 2020);
console.log(book1);
const storing = book1.getInfo();
console.log(storing);

function Car(make, model , year, color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.start = function(){
        console.log(`The ${this.model} car is started`);
    }
    this.stop = function(){
        console.log(`The ${this.model} car has stopped`);
    }
}
    const car1 = new Car("India","Kia",2020,"Red");
    const car2 = new Car("Japan", "Toyoto", 2018, "Yellow");
    const car3 = new Car("Japan", "Supra", 2012, "Black");

    car1.start();
    car2.start();
    car2.stop();
    car3.start();
    car1.stop();
    car3.stop();


// Built-in Constructors
const num5 = new Number(10);
const st1 = new String("huxn webdec");
const bool1 = new Boolean(false);
const arr = new Array(1,2,3);
const num6 = 10;
console.log(typeof num5) // object
console.log(typeof num6) // number

// The object.create() method creates a new object, using an
// exisiting object as the prototype of the newly created object
// Perfect for object chaining

let person = {
    greet : function(){
        console.log(`Hello my name is ${this.neme} ${this.lastNeme}`)
    }
}

const peer1 = Object.create(person);
peer1.neme = "Aesh";
peer1.lastNeme = "Accost"
peer1.greet();

/*
employee ek base object hai — sab common cheezein isme hain
rahul ek naya object hai jo employee se inherit karta hai
rahul ke paas name aur role apne hain
Par greet() method use karta hai prototype se (employee object)
*/


// Prototype
