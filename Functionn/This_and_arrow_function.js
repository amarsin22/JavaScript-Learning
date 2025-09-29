const user ={
  username: "amar",
  price: 990,

   welcomeMessage: function(){
    console.log(`${this.username},welcome to website`);
    // console.log(this);
    
    
  }
}
// user.welcomeMessage()
// user.username = "samar"
// user.welcomeMessage()
// console.log(this);



// function chai(){
//   username: "amar"
//   console.log(this.username);
  
// }
// chai()


//function declare through arrow function

// const chai = function (){

//   let username  = "amar"
//   console.log(this.username);
  
// }
// chai()

//next method

// const chai = () =>{

//   let username  = "amar"
//   console.log(this.username);
  
// }
// chai()

// **************************** Arrow function ********************************

// const addTwo = (num1,  num2) => {
//   return num1 + num2
// }
// console.log(addTwo(3,6));


//implicit return....

// const addTwo = (num1,  num2) =>  num1 + num2
// const addTwo = (num1,  num2) =>  (num1 + num2)
const addTwo = (num1,  num2) =>  ({username:"amar"})

console.log(addTwo(3,6));



const myArray = [2, 5, 6, 9, 3]
// myArray.forEach(function() {})
// myArray.forEach( () => {})
  myArray.forEach()
