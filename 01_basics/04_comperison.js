// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

// The reason is that an equlity check == and comperisons > < >= <= work diffrently.
// comperison covert null  to a number treating it as 0.
// that why (3) null >= 0 is true and (1) null > is false.

// console.log(undefined == 0); // false
// console.log(undefined > 0); // false
// console.log(undefined < 0); // false

console.log("2" == 2); // true
console.log("2" === 2); // false (===) compare and check datatype






