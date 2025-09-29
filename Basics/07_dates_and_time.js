  // Dates

  let myDate = new Date()
  console.log(myDate.toString());
  console.log(myDate.toISOString());
  console.log(myDate.toLocaleDateString());
  console.log(myDate.toDateString());
  console.log(typeof myDate);  //Object

  let myCreatedDate = new  Date(2025,0 ,22)
  // let myCreatedDate =new  Date(2025,0 ,22,6,8)
  console.log(myCreatedDate.toDateString());
  
  console.log(myCreatedDate.toLocaleString());
  
  // let myCreatedDate =new Date("2024-02-22")
  console.log(myCreatedDate.toLocaleString())
  // let myCreatedDate = new Date("01-14-2024")
  console.log(myCreatedDate.toLocaleString());
  
let myTimeStamp= Date.now();

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

// let newDate= new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());

// `$ {new Date.getDay()} and the time
// newDate.toLocaleString('default',{
//    weekday: "long",          //important note for declaration of new date
// })





  