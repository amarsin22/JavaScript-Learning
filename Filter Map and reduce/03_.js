const myNums = [1, 2, 3, 4]

const myTotal = myNums.reduce( function(acc, currvalue){
  // console.log(`acc: ${acc} and currValue: ${currvalue}`);
  return acc + currvalue
  
},0)

// console.log(myTotal);


const shoppingCart =[

{

  itemName: "js course",
  price: 1999
},
{
  itemName: "py course",
  price: 999
},
{
  itemName: "java course",
  price: 3999
},
{
  itemName: "c++ course",
  price: 1499
},
]

const pricetoPay = shoppingCart.reduce( (acc,item) => (acc +item.price),0)

console.log(pricetoPay);
