
// Primitive datatype

// 7 types: String, Number, boolean, null, undefined, symbol, BigInt

const score=100;
const scoreValue=100.7;

const isLoggedIn =false;
const outsideTemp=null;

let userEmail;

const id=Symbol('1234')
const anotherId =Symbol('1234')

// console.log(id === anotherId);

//const bigNumber=34354645477677666n;

// Reference (Non primitie datatype)

//Array, Objects, Functions

const heroes=["Shaktimaan", "naagraj", "doga"]

let myObj = {
  name:"amar",
  age:23

}

const myFuntion = function(){
  console.log("hello world");
}

console.log(typeof bigNumber)
console.log(typeof outsideTemp)
console.log(typeof anotherId );


//****************************************/

//Stack and Heap memory

//stack (primitive) Heap (Non primitive)

let myInstagramName="ram22.0";

let anothername = myInstagramName;
anothername="ChayAur Code"

console.log(myInstagramName)
console.log(anothername);

let userOne ={
  email: "amar@gmail.com",
  upi: "user23345"
}
let userTwo =userOne

userTwo.email="amar@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);







