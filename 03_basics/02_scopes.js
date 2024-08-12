// var c = 300
let a = 300
if(true) {
    let a = 20
    const b = 40
    // console.log("inner: ", a);
    
}

// console.log(a);
// console.log(b);

function one() {
    const username = "abdullah"
    function two() {
        const websitename = "Youtube"
        console.log(username);
        
    }
    // console.log(websitename);
    
    two()
}
// one()

if(true) {
    const name = "abdullah"
    if(name === "abdullah") {
       const website = " youtube"
    //    console.log(name + website);
       
    }
    // console.log(website);
    
}

// console.log(name);


addOne(6)
function addOne(num1) {
    return num1 + 2

}


addTwo(3)
const addTwo = function(num2) {
    return num2 + 4
}

