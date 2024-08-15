// for in
const myObj = {
    jS: "Javascript",
    Cpp: "C++",
    rb: "RUBY",
}

for (const key in myObj) {
    // console.log(`${key} shortcut of ${myObj[key]}`);
    
}

const programming = ["java", "CPP", "PY", "RB"]
for (const key in programming) {
    // console.log(`${programming[key]}`);
    // console.log(`${key} key of ${programming[key]}`);
    
}


const map = new Map()

map.set("IN", "INDIA")
map.set("USA", "UNITED STATES OF AMARICA")
map.set("FR", "FRANCE")


for (const key in map) {
   console.log(key);
   
}