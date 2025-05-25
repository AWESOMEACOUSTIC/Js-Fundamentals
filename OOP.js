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

