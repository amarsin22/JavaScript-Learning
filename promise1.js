new Promise(function(resolve, reject){
  setTimeout(function(){

    resolve({username: "amar", email: "amarsin1401@gmail.com"})
  },1000)
  
}).then(function(user){
  console.log(user);
  
})
