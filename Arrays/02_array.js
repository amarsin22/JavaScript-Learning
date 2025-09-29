const marvel_heroes=["Thar", "Ironman", "spiderman"]
const dc_heroes = ["superman","batman", "shaktimaan"]

// marvel_heroes.push(dc_heroes)

//console.log(marvel_heroes)

// const allHeroes =   marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);

const new_all_heroes = [...marvel_heroes, ...dc_heroes]
// console.log(new_all_heroes);


const another_array =[1, 2, 3, 4, [5, 6, 7, 8], [9, 10, 11, 12],[13,14]]

const real_another_array = another_array.flat(2)
// console.log(real_another_array);


console.log(Array.isArray("amar"));
console.log(Array.from("amar"));
console.log(Array.from({name: "amar"}));  //Intresting

let score1 = 100
let score2 =200
let score3 =300
console.log(Array.of(score1, score2, score3))




 

