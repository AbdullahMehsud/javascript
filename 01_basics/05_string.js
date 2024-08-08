const name = "abdullah"
const age = 24
console.log(name + " age is " + age );

console.log(`my game name is ${name} and price is ${age}`);

const gameName = new String("Abdullah")
console.log(gameName);
console.log(gameName[0]); // to acccess value
console.log(gameName.__proto__);
console.log(gameName.length); // to find length of string
console.log(gameName.toLowerCase()); 
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3)); // to find char at 
console.log(gameName.indexOf("A"));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-7,3)
console.log(anotherString);


const newStringOne = "       khan      "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://abdullah.com/abdullah%20mehsud"

console.log(url.replace("%20", "-"))


console.log(url.includes("abdullah"));

const user = "adnan-ahmad-khan"
console.log(user.split("-"));


