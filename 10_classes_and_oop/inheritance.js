class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`UserName is ${this.username}`);
        
    }
}

class teacher extends User{
    constructor(username, email, password){
        super(username)
        this.username = username
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`a new course was added by ${this.username}`);
        
    }
}

const chai = new teacher("khan", "chai@gmail.com", 1232)

// chai.addCourse()
// chai.logMe()
const masalaChai = new User("masala chai")
masalaChai.logMe()

console.log(chai instanceof User);

