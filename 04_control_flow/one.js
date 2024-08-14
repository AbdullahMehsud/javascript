// const isLoggedIn = true
const temprature = 42

// if(temprature == 42){
//     console.log("yes the temprature is less then 50");
    
// }else{
//     console.log("the temprature is greater then 50");
    
// }
// console.log("execute");


// <, > , <= , >=, ==, ===, !=, !==

// const score = 200
// if(score > 100) {
//     const power = "fly"
//     console.log(`user power: ${power}`)
    
// }
// console.log(`user power: ${power}`)


const balance = 1000
// if (balance > 500) console.log("test"),console.log("test2");

// if(balance < 500){
//     console.log("less then 500");
    
// }else if (balance < 750) {
//     console.log("less then 750");
// } else if (balance < 1000){
//     console.log("less then 1000");
// } else {
//     console.log("less then 1200");
// }


const isLoggedIn = true
const debetCard = true
const userLoggedInFromGoogle = false
const userLoggedInFromEmail = true
if(isLoggedIn && debetCard){
    console.log("Allow to purchase");
    
}

if(userLoggedInFromEmail || userLoggedInFromGoogle){
    console.log("user Logged in");
    
}