let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spider power is ${this.spiderman}`);
        
    }
}


Object.prototype.khan = function(){
    console.log("khan is present in all Object");
    
}

Array.prototype.heyKhan = function(){
    console.log("khan says hey");
    
}

// heroPower.khan()
// myHeros.khan()

// myHeros.heyKhan()
// heroPower.heyKhan()

// inheritance

const user = {
    name: "chai",
    email: "chai@gmail.com"
}
const Teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "TA Assignment",
    fullTime: true,
    __proto__: teachingSupport
}

// modren syntex

Object.setPrototypeOf(teachingSupport, Teacher)


let anotherUserName = "ChaiAurCode"

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is: ${this.trim().length}`);
}

anotherUserName.trueLength()
"khan".trueLength()
'abdullah'.trueLength()



