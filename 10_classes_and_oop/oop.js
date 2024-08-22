const user = {
    username: "abdullah",
    logginCount: 8,
    SignedIn: true,

    gotUserDetails: function(){
        // console.log("got user details from database");
        // console.log(`username: ${this.username}`);
        console.log(this); // current context
        
        
    }
}

// console.log(user.username);
// console.log(user.gotUserDetails());

// console.log(this);

function User(username, logginCount, isLoggedIn){
    this.username = username;
    this.logginCount = logginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
        
    }
    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("khan", 16, false)

console.log(userOne.constructor);
// console.log(userTwo);






