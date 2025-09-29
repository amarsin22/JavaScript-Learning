//  singleton
// Object.create

//object literals
const mySym = Symbol("key1")

const JsUser = {
  name: "amar",
  "full name" : "amar singh",
  [mySym] : "mykey1",
  age:18,
  location:"jaipur",
  email:"amarsmy339@gmail.com",
  isLoggedIn: false,
  lastLoginDate: ["Monday","Tuesday"]
}
// console.log(JsUser.email);
// console.log(JsUser.age);
// console.log(JsUser.location);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email ="amar@chatgpt.com"
// Object.freeze(JsUser)

JsUser.email ="amar@microsoft.com"
// console.log(JsUser);

JsUser.greeting =function()
{
  console.log("hello users");
  
}
console.log(JsUser.greeting());


JsUser.greetingTwo =function()
{
  console.log(`hello users, ${this.name}`);
  
}
console.log(JsUser.greetingTwo()); 






