const marval_heros = ["caption amarica", "iron-man", "thor" ]
const dc_heros = ["batman", "superman", "wonder women"]

// marval_heros.push(dc_heros)
// console.log(marval_heros);

// const allHeros = marval_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marval_heros, ...dc_heros]

// console.log(all_new_heros);

const new_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, 10, [11, 12]]]

const another_new_array = new_array.flat(Infinity)

// console.log(another_new_array);

console.log(Array.isArray("abdullah"));
console.log(Array.from("abdullah"));
console.log(Array.from({name: "khan"})); // intresting

let score = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score, score2, score3));






