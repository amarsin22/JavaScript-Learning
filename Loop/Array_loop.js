// for of loop

// ["", "", ""]
// [{},{},{}]

const arr = [1, 3, 5, 6, 8]
for (const num of arr) {
  // console.log(num);
  
}
const greetings = "Namaste India!"
for (const greet of greetings) {
// console.log(`each char is ${greet}`);
  
}

//Maps

const map = new Map()
map.set('IN','India')
map.set('USA','United state of america')
map.set('FR', 'France')
map.set('IN','India')
// console.log(map);

for (const [key,value] of map) {
  // console.log(key, ':-',value);
  
  
}

const myObject = {
  'game1':  'NFS',
  'game2':  'Spiderman'
}
// for (const [key,value] of myObject) {
//   console.log(key, ':-', value);
  
// }

