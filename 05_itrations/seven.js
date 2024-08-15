const myNum = [0, 1,2, 3, 4, 5, 6, 7, 8, 9, 10]

// const myNumbers = myNum.map( (nums) => nums + 10 )
// const myNumbers = myNum.forEach( (nums) => { 
//     const add = nums + 10
//     console.log(add);
     
//     } )


const myNumber = myNum.map( (nums) => nums + 10 ).map( (nums) => nums + 1).filter( (nums) => nums >= 15 )

console.log(myNumber);
