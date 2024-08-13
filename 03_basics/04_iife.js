// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    // name iife
    console.log("DB CONNECTED");
    
})();
//to avoid globel scope pollution eg: variable etc
//         ()                                                   ()
// function definition                                  function execution

( () => {
    console.log("DB CONNECTED TWO");
    
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
})("AHMAD");

// (()=> {
//     console.log("test");
    
// })();

// (function hello(){
//     console.log("hello");
    
// })()

