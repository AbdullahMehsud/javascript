const name = "abdullah"
const age = 24
console.log(name + " age is " + age );

console.log(`my game name is ${name} and price is ${age}`);

const gameName = new String("Abdullah")
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf("A"));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-7,3)
console.log(anotherString);


const newStringOne = "       khan      "
console.log(newStringOne);
console.log(newStringOne.trim());



