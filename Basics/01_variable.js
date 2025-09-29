const accountId= 14453;
let accountEmail="amarsin1@gmail.com";
var accountPassword="12345";
accountCity="prayagraj";
let accountState;

/*
prefer not to use var
because of issue in block scope and funtional scope. 

*/

accountEmail="htih@gmail.com";
accountPassword="2345";
accountCity="pratapgarh";



console.table([accountId, accountEmail,accountPassword,accountCity,accountState]);
