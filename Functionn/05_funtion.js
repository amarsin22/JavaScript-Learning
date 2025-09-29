// ******************Immediate Invoked Function Expressions (IIFE)

(function chai(){
  //named IIFE
  console.log(`DB CONNECTED`)

})() ;       //Note: to remove the pallution of global scope using IIFE

(function aurCode(){
  console.log("DB CONNECTED TWO")
})();


((name) => { //parameter =>(name)
  //unnamed IIFE
  console.log(`DB CONNECTED ${name} `)
})("amar");