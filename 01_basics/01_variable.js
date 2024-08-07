const accountId = 12345
let accountEmail = "abdullah@gmail.com"
var accountPassword = "1234"
accountCity = "peshawar"
let accountState;

// accountId = 3333 // not allowed

accountEmail = "khan@gmail.com"
accountPassword = "3333"
accountCity = "Tank"
/*
prefer not to use var
because of issue in block scope and functionl scope
*/
console.table([accountId ,accountEmail , accountPassword, accountCity, accountState])

console.log(accountId);




