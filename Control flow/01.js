// if
// const tempreture =41
// if(tempreture === 40){

//   console.log("less than 50");
  
// }
// else{

//   console.log("greater than 50")
// }
// console.log("tempreture is greater than 50");


// const score = 200

// if(score >100){
//   const power ="fly"
//   console.log(`User Power: ${power}`);
  
// }
// // console.log(`User Power: ${power}`);

//Shorthand notation.......

// const balance= 1000
// if(balance>500) {
//   console.log("test");
  
// }

// const balance = 1000

// if(balance < 500){
//   console.log("less than 500");
  
// }
// else if(balance < 750){
//   console.log("less than 750");
// }
// else{
//   console.log("Equal to 1000");
  
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==2){
  console.log("Allow to buy course");
  
}
if(loggedInFromGoogle || loggedInFromEmail){
  console.log("User logged in");
  
}