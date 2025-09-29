class User {
  constructor(email, password){
    this.email = email;
    this.password = password;
  }
get email(){
  return this._email.toUpperCase()
}
set email(value){
  this._email = value
}

  get password(){
    return `${this._password}amar`
    
  }
  set password(value){
    this._password =value
  }

}
const  amar = new User("amar@32.ai", "abc")
console.log(amar.password);
console.log(amar.email);

