// array

const myArr = [0,1,2,3,4]
const myHeros = Array["iron-man", "spider-man", "super-man"]

const myArr2 = new Array(1, 2, 3, 4, 5, 6, 7)

// myArr2.push(6)
// myArr2.push(7)

// myArr2.pop()

// myArr2.unshift(9)
// myArr2.shift()

// console.log(myArr2.includes(9)) // false or true

// console.log(typeof myArr2.join()) // string

// console.log(myArr2.join())

// console.log(myArr2)

// slice and splice

const arraySP = [0,1,2,3,4,5]

console.log("A", arraySP);

const myn1 = arraySP.slice(1, 3)

console.log(myn1);
console.log("B", arraySP);

const myn2 = arraySP.splice(1, 3)
console.log("c", arraySP);
console.log(myn2);


