const myNums = [1,2,4]

// const total = myNums.reduce( function(acc, curr){
//     console.log(` acc: ${acc} curr: ${curr}`);
    
//     return acc + curr
    
// }, 0 )

const total = myNums.reduce( (acc, curr) => (acc + curr), 0)

console.log(total);

const course = [
    {
        courseName: "javascript course",
        price: 15000
    },
    {
        courseName: "Python script course",
        price: 10000
    },
    {
        courseName: "java course",
        price: 7000
    },
]

const totalPay = course.reduce( (acc, item) => (acc + item.price), 0)


console.log(totalPay);

