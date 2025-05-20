// Rest parameters
function restParamsExample(...args) {
    console.log(args); // [1, 2, 3]
}

restParamsExample(1, 2, 3, 4, 5);

function abcd(a, b, ...args) {
    console.log(a, b, args);
}
abcd(9, 8, 19, 2, 5);

// ... is the rest operator

//hoisting

console.log(a);
var a = 12;  //-> will result undefined. but why?
// because of hoisting. the variable is moved to the top of the scope. so the variable
// is declared but not initialized. so it will be undefined. the value is assigned
// after the console.log(a) statement. so it will be undefined.
// js makes this in behind the scene
var a;
console.log(a);
a = 12;

// also var is funtion scoped.

// let and const are block scoped. so they will not be hoisted. they will result in
// an error. because the variable is not declared.

//iife -> immediately invoked function expression
// it is used to create a scope. so the variables and functions inside the iife
// will not be accessible from outside the iife.

var ans = (function example() {
    var b = 69;
    console.log(b);
    return {
        set: function (val) {
            c = val;
        },
        get: function () {
            console.log(c);
        }
    }
})();
ans.set("90");
ans.get();
// fucntion immediately chalke khatam ho jate hai aur uske andar jitne v variables ya functions
// ho, unhe access karne ke liye hume function call karna padta hai

//higher order function
// a function that takes another function as an argument or returns a function as a result


function hofs() {
    return function () {
        console.log("this is higher order functions")
    }
}
hofs()();

function ret(val) {
    val();
}
ret(function () {
    console.log("this is giving a function argument")
})

// callback function 
// a function that is passed as an argument to another function and is executed after the outer function has
// completed its execution.
// callback function is used to perform some operation after some operation is completed.

// call krte waqt jis function ko bheja usko bolte hai call back function (as an argument jo pass hota hai)
// aur jo functions ko accept krta hai usko hum higher order function kehte hai

// first class function
// a function that can be treated as a variable and can be passed as an argument to another function
// or returned as a result of a function.
// in other words, a function that has all the properties of a first class citizen in a programming

// Pure function
// a function that always returns the same output for the same inputs and has no side effects.
// in other words, a function that is deterministic and does not modify the state of the program or the global variable.

//Impure Function
// a function that does not always return the same output for the same inputs and has side effects.
// in other words, a function that is not deterministic and modifies the state of the program or the global variable.

// anonymous function
// a function that is defined without a name.

// fat arrow funtion : () => {}


// group
console.groupCollapsed("Aj ka hisaab")
console.log("daal chawal")
console.log("lasun piyaaz")
console.log("pani poori")
console.log("dahi poori")
console.groupEnd(); // to end the group

//Object.freeze()
// it is used to prevent the modification of properties values' in an object.
// it is used to make an object immutable.

const chaacha = {
    name: "Budwak",
    age: 90,
    address: "Bhopal",
    hobbies: ["dancing", "singing", "eating"],
    education: "10th"
}
Object.freeze(chaacha);

//converting string into number
// parseInt() function is used to convert a string into a number.
//parseInt("100") -> 100
// Number("50") -> 50
// string ke aage + laga do number mai convert ho jayega
// +"60" -> 60

//indexOf()
// it is used to find the index of the first occurrence of a specified value in a string.
// it returns -1 if the specified value is not found in the string.

// NaN
// it is a special value in JavaScript that represents an invalid or unreliable result or mathematical invalid calculation

//Synchronous Js
// it is a type of JavaScript that runs in the same thread as the rest of the code.
// it is used for blocking operations like file I/O, network I/O, etc.
// it is not suitable for long-running operations like database queries, API calls, etc.
// it can freeze the browser or the application if the operation takes too long.
// it is not suitable for real-time applications like live updates, live streaming, etc.
// it is not suitable for applications that require high performance and responsiveness.
// it is not suitable for applications that require concurrent execution of tasks.
// ek ke baad dusra hoga, jab tak ek command complete naa ho dusra shuru nahi hoga

//Asynchronous Js
// it is a type of JavaScript that runs in a separate thread or process.
// it is used for non-blocking operations like database queries, API calls, etc.
// it is suitable for long-running operations like database queries, API calls, etc.
// it is suitable for real-time applications like live updates, live streaming, etc.
// it is suitable for applications that require high performance and responsiveness.
// it is suitable for applications that require concurrent execution of tasks.
// saare kam ek saath shuru kardo, jiska ans pehle aajaye uska jawaab de dena

// Async code ka main motive hota hai ki un cases mein jinmein 
// hume pata nahi code ka answer kitini der mein aayega to jab bhi answer aa
// jaaye uske answer ke respect mein koi particular code chala dena

// Note: async is not for high computation tasks. it is for time consuming tasks.

console.log("hey"); // sync code
setTimeout(function () {
    console.log("hello"); // async code
}, 2000)

// inside the setTimeout is callback function and time in milliseconds.
// callback functions will return the value only if it has a valid answer

// js is not asychronous. but how?
// js is single threaded. it can only do one thing at a time.
// but it can switch between different tasks very quickly.
// this is called context switching.

// promise
// it is a result of an asynchronous operation.
// it is a placeholder for a value that may or may not be available yet.
// it is used to handle asynchronous operations in a more synchronous way.
// it contains either reslove or reject or pending.
// example:
var ans = new Promise((res, rej) => {
    if (true) {
        return res();
    } else {
        return rej();
    }
})
ans
    .then(function () {
        console.log("resolved");
    })
    .catch(function () {
        console.log("rejected");
    })

// user will ask for a number 0 to 9 and if the number is below 5
// then resolve if not reject.

var okay = new Promise((res, rej) => {
    var n = Math.floor(Math.random() * 10);
    if (n > 5) {
        return res();
    } else {
        return rej();
    }
})

okay
    .then(function () {
        console.log("resolved");
    })
    .catch(function () {
        console.log("rejected");
    })

// promise chaining example
// ghar pe aao jalldi se
// gate kholo aur gate lagao
// khana pakao khana khao
// incogito mode on karo
// aur ab so jao

var p = new Promise(function (res, rej) {
    return res("ghar pe aao jaldi se");
})
var p1 = p
    .then(function (data) {
        console.log(data);
        return new Promise(function (res, rej) {
            return res("gate kholo aur gate lagao");
        })
    })
var p2 = p1.then(function (data) {
    console.log(data);
    return new Promise(function (res, rej) {
        return res("incogito mode on karo");
    })
})

p2.then(function (data) {
    console.log(data);
})

//async and await
// koi bhi aesa function jismai async code likhenge, kyuki async code hai
// toh promises ka istammal kr sakte hai toh jab uska ans ayega tab 
// then laga na padega toh then se bach ne ke liye aap asyn await ka 
// istemaal kr sakte hai.
// jidahr v asyn use hua uske nearest function ke aage async laga dena
// aur jaha pe asyn use kiya wah pe uske aage await laga dena\

async function xyz() {
    let raw = await fetch(`https://randomuser.me/api/`)
    console.log(await raw.json());
}
xyz();

//concurrency
// js mein sync code and async code ek saath process ho raha tha usko 
// bolte hai concurrency

// parallelism -> focus jyaada karta hai different processors and unke cores
// kam ko chalane par

// throttling -> kisi code ko control karna number of executions

// DOM -> Document Object Model
// HTML document ko object banakar use karna

// 4 Pillars -> Selection of an element, changing html, changing css, event listener
// 1. Selection of an element -> document.querySelector("classname/element")
// if you want to create an element through javaScript then -> document.createElement("elementname")
// 2. Changing html -> element.innerHTML = "new html"
// 3. Changing css -> element.style.cssproperty = "new value"
// 4. Event listener -> element.addEventListener("event", function(){})





// **async function will always return a promise**
// suppose you have a async function and you are returning a non promise value
// then it will be wrapped in a promise and returned.

// **await keyword can only be used inside an async function**
// if you use await outside an async function then it will throw an error.
// **await keyword will pause the execution of the code until the promise is resolved or rejected**

async function getData() {
    return "Yoohoo";
}
const data = getData();
data.then((res) => console.log(res));

// fetch() => what fetch returns after it resolves the promise?
// It returns a response object which has a readable stream.
// Now to read it properly we use .json() which is again a promise


// Json Data to Frontend

var arr = [
    {
        name: "Rahul",
        age: 20
    },
    {
        name: "Ravi",
        age: 22
    },
    {
        name: "Rohit",
        age: 24
    }
]

arr.forEach(function (elem) {
    console.log(elem.name + " " + elem.age); //-> Rahul 20 Ravi 22 Rohit 24
})

var sum = 0;
arr.forEach(function (elem) {
    sum += elem.age;
})
console.log(sum); //-> 66

// **forEach() is not a function of array but a method of array prototype**


// Objects
const person = {
    name: "Rahul",
    age: 20,
    address: {
        city: "Bhopal",
        state: "MP"
    },
    hobbies: ["dancing", "singing", "eating"]
}
// accessing object properties
console.log(person.name); //-> Rahul
console.log(person["name"]); //-> Rahul -> another way to access object properties
console.log(person.age); //-> 20
console.log(person.address.city); //-> Bhopal
console.log(person.hobbies[0]); //-> dancing
console.log(person["hobbies"][0]); //-> dancing another way to access object properties

// adding new properties to object
person.job = "developer";
console.log(person); //-> { name: 'Rahul', age: 20, address: { city: 'Bhopal', state: 'MP' }, hobbies: [ 'dancing', 'singing', 'eating' ], job: 'developer' }

// deleting properties from object
delete person.age;
console.log(person); //-> { name: 'Rahul', address: { city: 'Bhopal', state: 'MP' }, hobbies: [ 'dancing', 'singing', 'eating' ], job: 'developer' }

// creating a method in object
person.greet = function () {
    console.log("Hello " + this.name);
}
person.greet(); //-> Hello Rahul
// this keyword refers to the object itself
// this keyword is used to access the properties and methods of the object

// JSON
// JSON is a string representation of an object
// JSON is used to transfer data between server and client
// JSON is used to store data in a structured format


    // converting object to JSON
    const json = JSON.stringify(person);
    console.log(json); //-> {"name":"Rahul","address":{"city":"Bhopal","state":"MP"},"hobbies":["dancing","singing","eating"],"job":"developer"}

    // converting JSON to object
    const obj = JSON.parse(json);
    console.log(obj); //-> { name: 'Rahul', address: { city: 'Bhopal', state: 'MP' }, hobbies: [ 'dancing', 'singing', 'eating' ], job: 'developer' }


// JSON.stringify() is used to convert an object to JSON
// JSON.parse() is used to convert JSON to object




// Working wih date and times

const date = new Date()
console.log(date); //-> current date and time
console.log(date.getDate()); //-> current date
console.log(date.getMonth()); //-> current month
console.log(date.getFullYear()); //-> current year
console.log(date.getHours()); //-> current hours
console.log(date.getMinutes()); //-> current minutes
console.log(date.getSeconds()); //-> current seconds
console.log(date.getMilliseconds()); //-> current milliseconds


const running = setInterval(() => {
    console.log("This fucntion will run every 1 second in default")
},1000);

const afterRun = setTimeout(() => {
    console.log("This function will run after 5 seconds for once");
},5000); 

// clearInterval(running); //-> to stop the interval
// clearTimeout(afterRun); //-> to stop the timeout

// setInterval() is used to run a function repeatedly at a specified interval
// setTimeout() is used to run a function after a specified time



// Rest parameters
function restParamsExample(...args) {
    console.log(args); // [1, 2, 3]
}

restParamsExample(1, 2, 3, 4, 5);

function abcd(a, b, ...args) {
    console.log(a, b, args);
}
abcd(9, 8, 19, 2, 5);

// ... is the rest operator

//hoisting

console.log(a);
var a = 12;  //-> will result undefined. but why?
// because of hoisting. the variable is moved to the top of the scope. so the variable
// is declared but not initialized. so it will be undefined. the value is assigned
// after the console.log(a) statement. so it will be undefined.
// js makes this in behind the scene
var a;
console.log(a);
a = 12;

// also var is funtion scoped.

// let and const are block scoped. so they will not be hoisted. they will result in
// an error. because the variable is not declared.

//iife -> immediately invoked function expression
// it is used to create a scope. so the variables and functions inside the iife
// will not be accessible from outside the iife.

var ans = (function example() {
    var b = 69;
    console.log(b);
    return {
        set: function (val) {
            c = val;
        },
        get: function () {
            console.log(c);
        }
    }
})();
ans.set("90");
ans.get();
// fucntion immediately chalke khatam ho jate hai aur uske andar jitne v variables ya functions
// ho, unhe access karne ke liye hume function call karna padta hai

//higher order function
// a function that takes another function as an argument or returns a function as a result


function hofs() {
    return function () {
        console.log("this is higher order functions")
    }
}
hofs()();

function ret(val) {
    val();
}
ret(function () {
    console.log("this is giving a function argument")
})

// callback function 
// a function that is passed as an argument to another function and is executed after the outer function has
// completed its execution.
// callback function is used to perform some operation after some operation is completed.

// call krte waqt jis function ko bheja usko bolte hai call back function (as an argument jo pass hota hai)
// aur jo functions ko accept krta hai usko hum higher order function kehte hai

// first class function
// a function that can be treated as a variable and can be passed as an argument to another function
// or returned as a result of a function.
// in other words, a function that has all the properties of a first class citizen in a programming

// Pure function
// a function that always returns the same output for the same inputs and has no side effects.
// in other words, a function that is deterministic and does not modify the state of the program or the global variable.

//Impure Function
// a function that does not always return the same output for the same inputs and has side effects.
// in other words, a function that is not deterministic and modifies the state of the program or the global variable.

// anonymous function
// a function that is defined without a name.

// fat arrow funtion : () => {}


// group
console.groupCollapsed("Aj ka hisaab")
console.log("daal chawal")
console.log("lasun piyaaz")
console.log("pani poori")
console.log("dahi poori")
console.groupEnd(); // to end the group

//Object.freeze()
// it is used to prevent the modification of properties values' in an object.
// it is used to make an object immutable.

const chaacha = {
    name: "Budwak",
    age: 90,
    address: "Bhopal",
    hobbies: ["dancing", "singing", "eating"],
    education: "10th"
}
Object.freeze(chaacha);

//converting string into number
// parseInt() function is used to convert a string into a number.
//parseInt("100") -> 100
// Number("50") -> 50
// string ke aage + laga do number mai convert ho jayega
// +"60" -> 60

//indexOf()
// it is used to find the index of the first occurrence of a specified value in a string.
// it returns -1 if the specified value is not found in the string.

// NaN
// it is a special value in JavaScript that represents an invalid or unreliable result or mathematical invalid calculation

//Synchronous Js
// it is a type of JavaScript that runs in the same thread as the rest of the code.
// it is used for blocking operations like file I/O, network I/O, etc.
// it is not suitable for long-running operations like database queries, API calls, etc.
// it can freeze the browser or the application if the operation takes too long.
// it is not suitable for real-time applications like live updates, live streaming, etc.
// it is not suitable for applications that require high performance and responsiveness.
// it is not suitable for applications that require concurrent execution of tasks.
// ek ke baad dusra hoga, jab tak ek command complete naa ho dusra shuru nahi hoga

//Asynchronous Js
// it is a type of JavaScript that runs in a separate thread or process.
// it is used for non-blocking operations like database queries, API calls, etc.
// it is suitable for long-running operations like database queries, API calls, etc.
// it is suitable for real-time applications like live updates, live streaming, etc.
// it is suitable for applications that require high performance and responsiveness.
// it is suitable for applications that require concurrent execution of tasks.
// saare kam ek saath shuru kardo, jiska ans pehle aajaye uska jawaab de dena

// Async code ka main motive hota hai ki un cases mein jinmein 
// hume pata nahi code ka answer kitini der mein aayega to jab bhi answer aa
// jaaye uske answer ke respect mein koi particular code chala dena

// Note: async is not for high computation tasks. it is for time consuming tasks.

console.log("hey"); // sync code
setTimeout(function () {
    console.log("hello"); // async code
}, 2000)

// inside the setTimeout is callback function and time in milliseconds.
// callback functions will return the value only if it has a valid answer

// js is not asychronous. but how?
// js is single threaded. it can only do one thing at a time.
// but it can switch between different tasks very quickly.
// this is called context switching.

// promise
// it is a result of an asynchronous operation.
// it is a placeholder for a value that may or may not be available yet.
// it is used to handle asynchronous operations in a more synchronous way.
// it contains either reslove or reject or pending.
// example:
var ans = new Promise((res, rej) => {
    if (true) {
        return res();
    } else {
        return rej();
    }
})
ans
    .then(function () {
        console.log("resolved");
    })
    .catch(function () {
        console.log("rejected");
    })

// user will ask for a number 0 to 9 and if the number is below 5
// then resolve if not reject.

var okay = new Promise((res, rej) => {
    var n = Math.floor(Math.random() * 10);
    if (n > 5) {
        return res();
    } else {
        return rej();
    }
})

okay
    .then(function () {
        console.log("resolved");
    })
    .catch(function () {
        console.log("rejected");
    })

// promise chaining example
// ghar pe aao jalldi se
// gate kholo aur gate lagao
// khana pakao khana khao
// incogito mode on karo
// aur ab so jao

var p = new Promise(function (res, rej) {
    return res("ghar pe aao jaldi se");
})
var p1 = p
    .then(function (data) {
        console.log(data);
        return new Promise(function (res, rej) {
            return res("gate kholo aur gate lagao");
        })
    })
var p2 = p1.then(function (data) {
    console.log(data);
    return new Promise(function (res, rej) {
        return res("incogito mode on karo");
    })
})

p2.then(function (data) {
    console.log(data);
})

//async and await
// koi bhi aesa function jismai async code likhenge, kyuki async code hai
// toh promises ka istammal kr sakte hai toh jab uska ans ayega tab 
// then laga na padega toh then se bach ne ke liye aap asyn await ka 
// istemaal kr sakte hai.
// jidahr v asyn use hua uske nearest function ke aage async laga dena
// aur jaha pe asyn use kiya wah pe uske aage await laga dena\

async function xyz() {
    let raw = await fetch(`https://randomuser.me/api/`)
    console.log(await raw.json());
}
xyz();

//concurrency
// js mein sync code and async code ek saath process ho raha tha usko 
// bolte hai concurrency

// parallelism -> focus jyaada karta hai different processors and unke cores
// kam ko chalane par

// throttling -> kisi code ko control karna number of executions

// DOM -> Document Object Model
// HTML document ko object banakar use karna

// 4 Pillars -> Selection of an element, changing html, changing css, event listener
// 1. Selection of an element -> document.querySelector("classname/element")
// if you want to create an element through javaScript then -> document.createElement("elementname")
// 2. Changing html -> element.innerHTML = "new html"
// 3. Changing css -> element.style.cssproperty = "new value"
// 4. Event listener -> element.addEventListener("event", function(){})





// **async function will always return a promise**
// suppose you have a async function and you are returning a non promise value
// then it will be wrapped in a promise and returned.

// **await keyword can only be used inside an async function**
// if you use await outside an async function then it will throw an error.
// **await keyword will pause the execution of the code until the promise is resolved or rejected**

async function getData() {
    return "Yoohoo";
}
const data = getData();
data.then((res) => console.log(res));

// fetch() => what fetch returns after it resolves the promise?
// It returns a response object which has a readable stream.
// Now to read it properly we use .json() which is again a promise


// Json Data to Frontend

var arr = [
    {
        name: "Rahul",
        age: 20
    },
    {
        name: "Ravi",
        age: 22
    },
    {
        name: "Rohit",
        age: 24
    }
]

arr.forEach(function (elem) {
    console.log(elem.name + " " + elem.age); //-> Rahul 20 Ravi 22 Rohit 24
})

var sum = 0;
arr.forEach(function (elem) {
    sum += elem.age;
})
console.log(sum); //-> 66

// **forEach() is not a function of array but a method of array prototype**


// Objects
const person = {
    name: "Rahul",
    age: 20,
    address: {
        city: "Bhopal",
        state: "MP"
    },
    hobbies: ["dancing", "singing", "eating"]
}
// accessing object properties
console.log(person.name); //-> Rahul
console.log(person["name"]); //-> Rahul -> another way to access object properties
console.log(person.age); //-> 20
console.log(person.address.city); //-> Bhopal
console.log(person.hobbies[0]); //-> dancing
console.log(person["hobbies"][0]); //-> dancing another way to access object properties

// adding new properties to object
person.job = "developer";
console.log(person); //-> { name: 'Rahul', age: 20, address: { city: 'Bhopal', state: 'MP' }, hobbies: [ 'dancing', 'singing', 'eating' ], job: 'developer' }

// deleting properties from object
delete person.age;
console.log(person); //-> { name: 'Rahul', address: { city: 'Bhopal', state: 'MP' }, hobbies: [ 'dancing', 'singing', 'eating' ], job: 'developer' }

// creating a method in object
person.greet = function () {
    console.log("Hello " + this.name);
}
person.greet(); //-> Hello Rahul
// this keyword refers to the object itself
// this keyword is used to access the properties and methods of the object

// JSON
// JSON is a string representation of an object
// JSON is used to transfer data between server and client
// JSON is used to store data in a structured format


    // converting object to JSON
    const json = JSON.stringify(person);
    console.log(json); //-> {"name":"Rahul","address":{"city":"Bhopal","state":"MP"},"hobbies":["dancing","singing","eating"],"job":"developer"}

    // converting JSON to object
    const obj = JSON.parse(json);
    console.log(obj); //-> { name: 'Rahul', address: { city: 'Bhopal', state: 'MP' }, hobbies: [ 'dancing', 'singing', 'eating' ], job: 'developer' }


// JSON.stringify() is used to convert an object to JSON
// JSON.parse() is used to convert JSON to object




// Working wih date and times

const date = new Date()
console.log(date); //-> current date and time
console.log(date.getDate()); //-> current date
console.log(date.getMonth()); //-> current month
console.log(date.getFullYear()); //-> current year
console.log(date.getHours()); //-> current hours
console.log(date.getMinutes()); //-> current minutes
console.log(date.getSeconds()); //-> current seconds
console.log(date.getMilliseconds()); //-> current milliseconds


const running = setInterval(() => {
    console.log("This fucntion will run every 1 second in default")
},1000);

const afterRun = setTimeout(() => {
    console.log("This function will run after 5 seconds for once");
},5000); 

// clearInterval(running); //-> to stop the interval
// clearTimeout(afterRun); //-> to stop the timeout

// setInterval() is used to run a function repeatedly at a specified interval
// setTimeout() is used to run a function after a specified time


