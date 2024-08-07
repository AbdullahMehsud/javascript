// Primitive data types

// 7 types -> String, boolean, null, undefined, Number, Symbol, BigInt
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outSideTemp = null
let userEmail;

const unique = Symbol(123)
const unique2 = Symbol(123)
console.log(unique === unique2);

const BigNumber = 123213132424253235n


//  Refrence (non-Primitive) data types

// Arrays, Objects, Functions

const myArray = ["imran khan", "mazoor"];

const myObj = {
    name: "abdullah",
    age: 24,
}

const myFunction = function name() {
    console.log("Hello world");
    
}

console.log(typeof myFunction);

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object


//https://262.ecma-international.org/5.1/#sec-11.4.3 imp


