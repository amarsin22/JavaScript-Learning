// const user = {
//   username: "amar",
//   loginCount: 8,
//   signedIn: true,

//   getUserDetails: function(){
//     //console.log("Got user details from database")
//     // console.log(`username: ${this.username}`);
//     // console.log(this)
//   }
// }
// console.log(user.username);
// console.log(user.getUserDetails())
// console.log(this);


// const promiseOne = new Promise()
// const date = new Date()

function user(username, loginCount, isLoggedIn){
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  return this
  
}

const userOne = new user("amar", 12, true)
const userTwo = new user("samar", 14, true)
console.log(userOne.constructor);
// console.log(userTwo);

// Notes => new keyword use first create a empty object called Instance.
// step-1: create a new object
// Step-2: call a constructor function
//step-3: inject all arguments in this keyword
//Step-4: Get in the function

