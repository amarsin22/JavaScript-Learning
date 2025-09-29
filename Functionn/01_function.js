
function sayMyName(){

  console.log("A");
  console.log("M");
  console.log("A");
  console.log("R");
  
}
// sayMyName()

function addTwoNumbers (number1, number2){

  // let result=(number1 + number2);
  // return result
  return number1 + number2
}
const result = addTwoNumbers(3, 5)

// console.log("Result: ",result);

function loginUserMessage (username){
  // if(username===undefined){
if(!username)
  {
    console.log("please enter a username");
    return
    
  }
  return `${username} just logged in`

}
// console.log(loginUserMessage("amar"));
// console.log(loginUserMessage());
// console.log(loginUserMessage("amar"));

function calculateCartPrice(val1 ,val2 ,...num1){
  return num1
}
// console.log(calculateCartPrice(200, 300, 400));

const user1 = {
  username : "amar",
  price1: 1000
}
function handleObject(anyobject){
  //console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`);
  
}
// handleObject(user)

handleObject({
  username:"amar",
  //price: 399
})

const myNewArray =[200, 500, 600]

function returnSecondValue(getArray){
  return getArray[2]
}
// console.log(returnSecondValue(myNewArray));
//console.log(returnSecondValue([100,300,500]));

const user ={
  username: "amar",
  price :990

}
function handleObject(anyobject){
  console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
  

}
// handleObject(user)

handleObject({
  username: "samar",
  price:345
  
})







