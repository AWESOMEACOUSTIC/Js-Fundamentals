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
