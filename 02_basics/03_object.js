// singalton

// object.create

// object literals
const mySym = Symbol("key1")
const jsUser = {
    name: "abdullah",
    "full name": "abdullah mehsud",
    [mySym]: "myKey1",
    age: 24,
    email: "abdullah@gmail.com",
    location: "peshawar",
    isLoggedIn: false,
    lastLogginDays: ["monday", "tuesday"]
}
// console.log(jsUser);

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "abdullah@google.com"
// console.log(jsUser["email"]);
// Object.freeze(jsUser)

jsUser.email = "khan@gmail.com"
// console.log(jsUser);

jsUser.greeting = function() {
    console.log("Hello JS user");
    
}
jsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
    
}

console.log(jsUser.greeting());
// console.log(jsUser.greeting);
console.log(jsUser.greetingTwo());
// console.log(jsUser.greetingTwo);

