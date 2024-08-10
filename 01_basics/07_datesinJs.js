// dates

const myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());

// console.log(typeof myDate);// object


// let myCreatedDate = new Date(24, 0, 10)
// console.log(myCreatedDate.toDateString());
// let myCreatedDate = new Date(24, 0, 10, 9, 29)
// console.log(myCreatedDate.toLocaleString());
// let myCreatedDate = new Date("2024-01-10")
let myCreatedDate = new Date("01-10-2024")
// console.log(myCreatedDate.toLocaleString());

let myTimeStemp = Date.now()

// console.log(myTimeStemp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);

console.log(newDate.getMonth());
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: 'long',
})




