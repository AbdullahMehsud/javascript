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
 console.log(loggedInUserMessage("abdullah"));
 