class User{
    constructor(username){
        this.username = username

    }

    logMe(){
        console.log(`username: ${this.username}`);
        
    }

    static createId(){
        return 123
    }
}

const chai = new User("abdullah")
// console.log(chai.createId());


class teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }

}

const iphone = new teacher("iphone", "i@phone.com")
// iphone.logMe()
console.log(iphone.createId());

