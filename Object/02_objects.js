// const tinderUser = new Object() //singleton object
const tinderUser = {} //Non Singleton object

tinderUser.id ="1234abc"
tinderUser.name ="sammy"
tinderUser.isLoggedIn=false
console.log(tinderUser)

// const regularUser ={
//   email: "amar@gmail.com",
//   fullname: {
//     userfullname: {
 
//       firstname: "amar",
//       lastname:"singh"
//     }
//   }
// }
// console.log(regularUser.fullname.userfullname.firstname);


const obj1 ={1: "a", 2: "b"}
const obj2 ={3: "a", 4: "b"}
const obj4 ={5: "a", 6: "b"}

 

// const obj3 =object.assign({}, obj1 ,obj2, obj4)
const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3);

const users = [
  {
    id:1,
    email:"a@gmail.com"
  },
  {
    id:1,
    email:"a@gmail.com"
  },
  {
    id:1,
    email:"a@gmail.com"
  }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course ={
  coursename : "js in hindi",
  price: "999",
  courseInstructor:"amar"
}

const{courseInstructor: Instructor} = course
// console.log(courseInstructor);


console.log(Instructor)


//destructuring in react

// const navbar = ({company}) => {
// }
// navbar (company = "amar")


//    API JSON format

// {
//   "name": "amar"
//   "coursename": "Js in hindi"
//   "price": "free"
// }

[

    {},
    {},
    {}
]













































































