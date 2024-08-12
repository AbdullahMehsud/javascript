 function sayMyName(){
    console.log("a");
    console.log("b");
    console.log("d");
    console.log("u");
    console.log("l");
    console.log("l");
    console.log("a");
    console.log("h");
    
}
//  sayMyName()

// function addTwoNum(number1, number2) {
//     console.log(number1 + number2);
    
// }

function addTwoNum(number1, number2) {
    // let result = number1 + number2 
    // return result   

    return number1 + number2
    
}

const result =  addTwoNum(5, 8)

// console.log("Result:", result);


function loggedInUserMessage(username = "khan"){
    // if(username === undefined){
    //     console.log("please enter user name");
    //     return
    // }
    if(!username){
        console.log("please enter user name");
        return
    }
    return `${username} just logged in`
}


//  console.log(loggedInUserMessage("abdullah"));
//  console.log(loggedInUserMessage());
//  console.log(loggedInUserMessage("abdullah"));


// spred(...) rest(...)
// function calculateCartPrice(...num1) {
//     return num1
// }
function calculateCartPrice(val1,val2, ...num1) {
    return num1
}
// console.log(calculateCartPrice(200, 300, 400));

const user = {
    userName: "abood",
    age: 24
}

function handelObj(anyobject) {
    console.log(`user name ${anyobject.userName} and age is ${anyobject.age}`);
    
}

// handelObj(user)
// handelObj({
//     userName: "sam",
//     age: 25
// })
 

const myNewArray = [0,4,5,7,8]

function returnSecondArray(getArray) {
    return getArray[1]
}

// console.log(returnSecondArray(myNewArray));
console.log(returnSecondArray([200,400,700]));
