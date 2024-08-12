// const testApp = new Object() // singleton object

const testApp2 = {} // non-singleton object

// console.log(testApp);
// console.log(testApp2);

testApp2.id = "12dc"
testApp2.name = "Abdullah"
testApp2.isLoggedIn = false

// console.log(testApp2);


const regularUser = {
    email: "abdullahmsd@gmail.com",
    name: "abdullah",
    fullName: {
        userfullname: {
            firstname: "abdullah",
            lastname: "mehsud"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullName.userfullname.firstname);

const obj1 = {1:"A", 2:"B"}
const obj2 = {3:"C", 4:"D"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "abdullah@gmail.com",
    },
    {
        id: 2,
        email: "khan@gmail.com",
    },
    {
        id: 3,
        email: "ahmad@gmail.com",
    }
]

// console.log(users[1].email);
// console.log(Object.keys(testApp2));
// console.log(Object.values(testApp2));
// console.log(Object.entries(testApp2));

// console.log(testApp2.hasOwnProperty("isLoggedIn"));
// console.log(testApp2.hasOwnProperty("isLogged"));

