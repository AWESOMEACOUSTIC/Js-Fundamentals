//template string is also known as template literals.
// It is a special type of string that allows for multi-line strings and string interpolation.
// It is defined using backticks (``) instead of single or double quotes.
// It allows for embedding expressions inside the string using the ${expression} syntax.


console.log("Machayenge");
console.log(`Yo,
    what's up?`); // output: Yo, 
                        // what's up?

const name = "Aditya";
const lastname = "Kumar";
function info(){
    retrun `My name is ${name} ${lastname}`;
}

console.log(info()); // output: My name is Aditya Kumar
// The above code defines a function info() that returns a template string.

setTimeout(() => {
  console.log("Hello");

  setTimeout(() => {
    console.log("Hola");

    setTimeout(() => {
      console.log("Bonjour");

      setTimeout(() => {
        console.log("Ciao");

        setTimeout(() => {
          console.log("Namaste");
        }, 2000);

      }, 2000);

    }, 2000);

  }, 2000);

}, 2000);

// Enhaced Object literals in ES6
// Below shows how to create an object in ES5
function user(name, age, work){
    return {
       Name : name,
       Age : age,
       Work : work,
        intro : function(){
            console.log(`My name is ${this.name} and I am ${this.age} years old.`);
        }
    };
}

const user1 = user("Aditya", 22, "Student");
// console.log(user1); // output: { name: 'Aditya', age: 22, work: 'Student', intro: [Function: intro] }
user1.intro(); // output: My name is Aditya and I am 22 years old.

// but with enchanced object literals, we can do this in a more concise way
function user(name, age, work){
    return {
        name,
        age,
        work,
        intro(){
            console.log(`My name is ${this.name} and I am ${this.age} years old.`);
        }
    };
}

// Refactor the below ES5 code to ES6 code
var a = 1;
var b =2;
var c = 3;

var obj = {
    a: a,
    b: b,
    c: c
};

console.log(obj); // output: { a: 1, b: 2, c: 3 }

// Refactored ES6 code
const a = 1;
const b = 2;
const c = 3;
const obj = {
    a,
    b,
    c
};
console.log(obj); // output: { a: 1, b: 2, c: 3 }

const lib = {
    sum(a,b){
        return a + b;
    },
    multi(a,b){
        return a * b;
    }
};
console.log(lib.sum(2,3)); // output: 5
console.log(lib.multi(2,3)); // output: 6

/* 
Default function parameters, introduced in ES6, allow 
you to assign default values to function parameters.
When a function is called without an argument for a parameter,
the default value is used instead.
This is useful for providing fallback values and avoiding
undefined values in your code.
*/

function countdown(value = false){
    if(value === true){
        for(let i = 0; i< 8; i++){
            console.log(`countdown started : ${i}`);
        }
    }
}

countdown();

// so let's say we have a fucntion call without any argument
// we can assign a default value to the parameter

//Destructuring
// Destructuring is a convenient way of extracting values from arrays or objects
// and assigning them to variables. 

const food = ["Pizza", "Burger", "Pasta"];

const [first, second, third] = food;
console.log(first); // output: Pizza
console.log(second); // output: Burger
console.log(third); // output: Pasta

// while destructuring an object, we can give any
// name to the variable.
const user = {
    hey: "Aditya",
    age: 22,
    work: "Student"
};
const {hey, age, work} = user;
console.log(hey); // output: Aditya
console.log(age); // output: 22 
console.log(work); // output: Student
// we can also give a default value to the variable

let {a, b, c, ...rest} = {a: 1, b: 2, c: 3, d: 4, e: 5};
console.log(rest); // output: { d: 4, e: 5 }

// function destructuring
function user({name, age, work}){
    console.log(`My name is ${name} and I am ${age} years old. I am a ${work}`);
}

// or
function user(user4){
    console.log(`My name is ${user4.name} and I am ${user4.age} years old. I am a ${user4.work}`);
}

const user4 = {
    name: "Aditya",
    age: 22,
    work: "Student"
};
user(user4); // output: My name is Aditya and I am 22 years old. I am a Student


/*
The for...in loop in JS is used to iterate over the enumerable 
properties of an object. It is a way to loop through 
the keys(property names) of an object.

syntax : for(let key in object){...}

*/

/*
In JavaScript, every property on an object has an internal attribute 
called [[Enumerable]] (accessible via the enumerable flag in its property 
descriptor). Enumerable properties are simply those 
for which enumerable: true. When you do a for…in 
(or call Object.keys()), only properties whose 
descriptor has enumerable: true will show up.



for object‐literal keys and assignments
—they default to enumerable: true.

for defineProperty, class-body methods, and most 
built-ins—they default to enumerable: false unless 
you explicitly make them enumerable

*/

let person ={
    name : "Prasanna",
    gender : "female",
    age : 22,
    work : "Student",
}
for(let key in person){
    console.log(key); 
}
// output: name, gender, age, work (vertical)

person.defineProperty("status", {
    value: "single",
    enumerable: false
});

for(let key in person){
    console.log(key); 
}
// output: name, value, age, work (vertical)
// The for...in loop will not iterate over the non-enumerable properties

// for .. of loop
// The for...of loop in JavaScript is used to iterate over iterable objects 
// such as arrays, strings, maps, sets, and more.

const text = " Heliyoo Ma bro";

for(let char of text){
    console.log(char); 
}
// output: H, e, l, i, y, o, o, M, a, b, r, o (vertical)

// when we call for ..each loop helper we pass in 
// a callback function that will be called for each element in the array

let colors = ["red", "green", "blue"];
colors.forEach((color, index) => {
    console.log(`Color at index ${index} is ${color}`);
    console.log("Modifying the color");
    color = "yellow";
    console.log(`Color at index ${index} is ${color}`);
});
// Color at index 0 is red
// Color at index 1 is green
// Color at index 2 is blue
// Modifying the color
// Color at index 0 is yellow


// The map() method creates a new array 
// populated with the results of calling a provided function 
// on every element in the calling array.

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // output: [2, 4, 6, 8, 10]

// it returns a new array with the results of 
// calling a provided function on every element in the calling array.

// the for each does not return anything
// it just executes the provided function once for each array element

const dum = [8,9,2,34,4];
const sr = dum.map(num => num * 10);
console.log(sr); // output: [80, 90, 20, 340, 40]

/*
The filter() method is a built-in array method in JS that allows
you to create a new array containign elements that pass a certain condition.
it provides a clean and conscise way to filter out elements from an array based on a specified criteria.
*/ 

const songs = [
    {title: "Sun Sathiya", duration: 3.5},
    {title: "Bang Bang", duration: 4.0},
    {title: "Bandish Bandits", duration: 2.5},
    {title: "Drag Me Down", duration: 5.0}
]

console.log(songs.filter(songs => songs.duration >3.5));
// output: [ { title: 'Bang Bang', duration: 4 }, { title: 'Drag Me Down', duration: 5 } ]

const words = [
    "spray",
    "limit",
    "elite",
    "optimistic",
    "dragonwarrior",
    "sword",
    "swordfish",
    "icanflynow"
]

const res = words.filter((words) => {
    return (words.length > 5);
})
console.log(res); // output: [ 'optimistic', 'dragonwarrior', 'swordfish', 'icanflynow' ]

// The find method is another built-in array in js 
// that allows you to find the first element in an arra that
// matches a specified condition.
// it returns the value of athe first elemnet that satisfies
// the gvien testing unction, or undefined if no element is found.

const members = [
    {name: "Aditya", age: 22},
    {name: "Prasanna", age: 23},
    {name: "Siddharth", age: 24},
    {name: "Shivam", age: 25}
]

const found = memebers.find((members) => {
    return (
        members.name === "Aditya" && members.age === 22
    )
})
console.log(found); // output: { name: 'Aditya', age: 22 }

let products = [
    {name: "Laptop", price: 1000},
    {name: "Phone", price: 500},
    {name: "Tablet", price: 300},
    {name: "Monitor", price: 200}
]

const desiredProduct = products.find((products) => {
    return (
        products.name === "Monitor" && products.price === 200
    )
});
console.log(desiredProduct); // output: { name: 'Monitor', price: 200 }

/*
The every() method test whether all elemnets in the array pass
the condition specified by the provided callback fucntion. It 
returns true if the callback functruon returns true for 
every element, and false if any element fails the condition.
*/

const mem = [
    "huxn",
    "jordan",
    "aesh",
    "akkiyan"
]
console.log(mem.every(mem => mem.length === 4)); // output: false
console.log(mem.every(mem => mem.length > 3)) // output: true


/*
The some() method tests whether at least one element in the 
array passes the condition specified by the provided callback
fucntion. It returns true if the callback fucntion returns true
for at least one element, and false if no element passes the condition.
*/

console.log(mem.some(mem => mem.length === 4)); // output: true
console.log(mem.some(mem => mem.length === 3)); // output: false

/*
The reduce() method applies the reducer function to each element
of an array accumulating the results into a single value. It is oftern used to perform
calculations or aggregations on array elements and simplify the array into a single value)
*/

console.log(["one, two, three"].reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
})) // output: one, two, three

/*
Because you passed in a one-element array (["one, two, three"]) 
and didn’t supply an initial value, reduce uses that single
element as the accumulator and never invokes the callback. 
The result is just the original string. 
*/

console.log(["one", "two" , "three"].reduce((accumulator, currentValue) =>{
    return accumulator + currentValue;
}))
// output: onetwothree

const gro = [
    {name : "Tiffiny", age: 28},
    {name : "sushi", age: 24},
    {name : "Divyanshi", age: 19},
    {name : "Shivam", age: 32},
    {name : "Mehek", age: 52}
]
const oldest = gro.reduce((prev,current) =>{
    return (
        prev.age > current.age ? prev.age : current.age
    )
},0);
console.log(oldest); // output: 52

const items = [
    {name: "PS5", price: 500},
    {name: "Xbox", price: 400},
    {name: "Switch", price: 300},
    {name: "PC", price: 1000},
    {name: "Laptop", price: 800}
]
const total = items.reduce((acc,curr) => {
    return acc + curr.price;
},0);
console.log(total); // output: 3000

// --> Map
const map = new Map();

map.set("identity", "Aditya");
map.set("age", 22);
map.set("work", "SDE-Intern");
map.set("location", "Bangalore");
map.set("hobby", [{
    event : "Gaming",
    time : "Night",
    place : "Home"},
    {
        event : "Coding",
        time : "Day",
        place : "Office"
    }
]);
console.log(map); 
// output: Map(5) { 'identity' => 'Aditya', 'age' => 22, 'work' => 'SDE-Intern', 'location' => 'Bangalore', 'hobby' => [ [Object], [Object] ] }
console.log(map.get("hobby"));
// output: [ { event: 'Gaming', time: 'Night', place: 'Home' }, { event: 'Coding', time: 'Day', place: 'Office' } ]
console.log(map.values());
// output: [Map Iterator] {
//   'Aditya',
//   22,
//   'SDE-Intern',
//   'Bangalore',
//   [ [Object], [Object] ]
// }

const entry = [...map.entries()];
const objectEntries =  entry.filter(([key,value]) => {
    return (
        value != null && typeof value === "object" 
    )
})
console.log(objectEntries); 
// output: [ [ 'hobby', [ [Object], [Object] ] ] ]
for (const [key, value] of objectEntries){
    console.log(`Key: ${key}, Value: ${value}`);
}
// output: Key: hobby, Value: [ { event: 'Gaming', time: 'Night', place: 'Home' }, { event: 'Coding', time: 'Day', place: 'Office' } ]


/*
Symbol is a unique and inmmutable primitive data type 
introduced in ES6. A symbol is often used as an identifier
for object properties to avoid potential naming conflicts.

unlike strings or numbers, symbols are guranteed to be unique.
When you create a symbol, it is unique and cannot be recreated
or changed. This uniqueness ensures that symbols will
not collide with other property names, even if they have the same string representation
*/
const sym1 = Symbol('description');
const sym2 = Symbol('description');
console.log(sym1 === sym2); // false

