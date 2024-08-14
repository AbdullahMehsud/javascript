// const userEmail = "abood@gmail.com" //true
// const userEmail = "" // false
const userEmail = [] // true

if(userEmail){
    console.log("user have email");
    
}else{
    console.log("user don't have email");
    
}

// falsy value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false, " ", [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("empty array");
    
// }

const newObj = {}

// if(Object.keys(newObj).length === 0) {
//     console.log("object empty");
    
// }

// false == 0 //true
// false == '' //true
// 0 == '' //true


// nullish coalescing Operator (??): null undefined

let val1;
let val2;
let val3;
let val4;
val1 = 5 ?? 10
val2 = null ?? 11
val3 = undefined ?? 12
val4 = null ?? 11 ??12

// console.log(val1);
// console.log(val2);
// console.log(val3);
// console.log(val4);



// Terniary operator

// condition ? true : false


const teaPrice = 100

teaPrice <= 80 ? console.log("equal to 80") : console.log("more then 80");


