// let myName ="amar      "
// let myChannel = "chai"

// console.log(myName.trueLength);


let myHeroes = ["thor", "spiderman"]

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function(){
    console.log(`spidy power is ${this.spiderman}`);
  }
}
Object.prototype.amar = function(){
  console.log(`amar is present in all object`);
  
}
Array.prototype.heyAmar = function(){
  console.log(`amar says hello`);
  
}
// heroPower.amar()
// myHeroes.amar()
// myHeroes.heyAmar()
//heroPower.heyAmar()

//inheritance

const User ={

  name: "chai",
  email: "chai@gmail.com"
}

const Teacher = {
  makeVideo : true
}

const TeachingSupport = {
  isAvailable: false
}

const TASupport = {
  makeAssignment: 'JS assignment',
  fullTime: true,
  __proto__: TeachingSupport

}
Teacher.__proto__= User

// modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)
  
let anotherUserName = "ChaiAurCode    "
String.prototype.trueLength = function(){
  console.log(`${this}`);
  // console.log(`${this.name}`);
  console.log(`True length is: ${this.trim().length}`);
  
  
  
}
anotherUserName.trueLength()
"amar".trueLength()
"iceTea".trueLength()

 