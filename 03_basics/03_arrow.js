const user = {
    username: "abdullah",
    age: 24,

    welcomeMessage: function()  {
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
        
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);


// function chai() {
//     let username = "abood"
//     console.log(this.username);
    
// }

// chai()

//  const chai = function () {
//         let username = "abood"
//         console.log(this.username);
        
//     }
    
//     chai()
    
// const chai = () => {
//         let username = "abood"
//         console.log(this);
        
//     }
    
//     chai()
    

// const addTwo = (num1, num2) => {
//     return num1 + num2
// } /// explicit

// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) =>  (num1 + num2) // emplicit
const addTwo = (num1, num2) =>  ({username: "khan"})

console.log(addTwo(9, 6));
