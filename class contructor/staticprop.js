//static property

class User{
  constructor(username){
    this.username = username;
}
  logMe(){
    console.log(`Username: ${this.username}`);
  }

  static createId(){
    return `213`
  }
}
const amar = new User("amar")
// console.log(amar.createId());


class Teacher extends User{
  constructor (username,email){
    super(username)
    this.email = email;
    
  }
}
const lapTop = new Teacher("lapTop","laptop@123.com")
console.log(lapTop.createId());

