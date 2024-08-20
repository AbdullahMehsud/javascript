const promisesOne = new Promise(function(resolve, reject){
    // do async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('async task is complete');
        resolve()
    }, 1000)
})

promisesOne.then(function(){
    console.log("promise consumed");
    })


new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("async task 2");
        resolve()
    }, 1000);
}).then( () => {
    console.log("async 2 consumed");
    
})



const promiseThree = new Promise(function(resolve, reject){
    setTimeout( ()=>{
        resolve({userName: 'abdullah', email: 'example.com'})
    }, 1000)
})

promiseThree.then( (user)=> {
    console.log(user);
    
} )


const promiseFour = new Promise( (resolve, reject)=>{
    setTimeout( ()=>{
        let error = false
        if(!error){
            resolve({userName:'khan', password: '123'})
        }else{
            reject('ERROR: Some error')            
        }
    },1000)
} )

promiseFour.then( (user)=> {
    console.log(user);
    return user.userName
} ).then((username)=>{
    console.log(username);
    
}).catch((error)=>{
    console.log(error);
    
}).finally(()=>{
    console.log("the promise finally resolved or rejected");  
})


const promiseFive = new Promise( (resolve, reject)=>{
    setTimeout( ()=>{
        let error = true
        if(!error){
            resolve({userName:'javascript', password: '123'})
        }else{
            reject('ERROR: Some js error')            
        }
    },1000)
} )

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);    
    } catch (error) {
        console.log(error);
    }
    
    
    
}

consumePromiseFive()



// async function  getAllUser() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
        
//     } catch (error) {
//         console.log("E:", error);
        
//     }
// }

// getAllUser()


fetch('https://jsonplaceholder.typicode.com/users').then( (response)=> {
    // console.log(response);
    return response.json()
    
}).then(  (data)=>{
    console.log(data);
    
}).catch((error)=>{
    console.log(error);
    
})