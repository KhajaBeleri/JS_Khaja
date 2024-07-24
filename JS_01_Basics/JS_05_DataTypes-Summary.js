// Primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

//console.log(id === anotherId);

const bigNumber= 3465799373833820n;


// Reference Type (Non Primitive)

// Array, Objects, Fnctions


const heors = ["Virat", "Sachin", "Dhoni"];

let myObj = {
    name: "Khaja",
    age: 33,

}

/*function(){}*/

const myFunction= function(){

    console.log("Hello world");
}

console.log(typeof heors);// Arrays's typeof value Object
console.log(typeof myObj);// Object's typeof value Object
console.log(typeof bigNumber);// bigint type of value bigint
console.log(typeof score);// number typeof value number
console.log(typeof myFunction); // function typeof value object function
console.log(typeof null);// null typeof value object
console.log(typeof undefined);// undefined typeof value undefinedSSSS