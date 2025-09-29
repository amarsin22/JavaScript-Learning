// //ES6
// class User{
//   constructor(username,email,password){
//     this.username = username,
//     this.email = email,
//     this.password = password
//   }

//   encryptPassword(){
//     return `${this.password}abc`
//   }
//   changeUsername(){
//     return `${this.username.toUpperCase()}`
//   }
// }

// const chai = new User("chai", "amar@234.com", "1234")

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

// //Behind the seen

function User(username, email, password) {
    this.username =username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
  return `${this.password}@123`
}


User.prototype.changeUsername = function(){
   return `${this.username.toUpperCase()}`
}

const tea = new User("tea", "tea@454.com", "456657")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());


