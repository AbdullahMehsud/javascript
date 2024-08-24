class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}khan`
    }

    set password(value){
        this._password = value
    }
}


const chai = new User("bbc.gmail.com", "123")

console.log(chai.email);
