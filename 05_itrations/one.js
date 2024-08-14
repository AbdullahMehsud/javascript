// for 

for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(element);
    
    
}

for (let i = 1; i <= 10 ; i++) {
        // console.log(`the outter loop ${i}`);
        for (let j = 0; j <= 10; j++) {
            // console.log(`the innner loop ${j} and outter loop ${i}`);
        //    console.log(i + "*" + j + "=" + i*j);   
        }    
}
const myArray = ["superman", "batman", "spiderman"]
for (let index = 0; index < myArray.length ; index++) {
    const element = myArray[index];
    // console.log(element);
    
    
}


for (let index = 1; index < 20; index++) {
    if(index == 5){
        console.log(`${index} detected`);
        break
    }
    console.log(`value of index: ${index}`);
    
    
}
for (let index = 1; index < 20; index++) {
    if(index == 5){
        console.log(`${index} detected`);
        continue
    }
    console.log(`value of index: ${index}`);
    
    
}