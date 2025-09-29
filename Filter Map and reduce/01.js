//  const coding = ["python", "java", "javascript", "c++"]

//  const values= coding.forEach(element => {
//   // console.log(element);
//   return element                 //Note: forEach do not return any value.
  
//  });
//  console.log(values);
 

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4)
// console.log(newNums);

// const newNums = myNums.filter( (num) => {
//    return num > 4
//   } )
// console.log(newNums);


// let newNums = []

// myNums.forEach( (num)=> {
//   if(num>4){
//     newNums.push(num)
//   }
// })
// console.log(newNums);


const books = [
  { title: 'BooksOne' , genre: 'Fiction'  , publish:  1981, edition: 2004},
  { title:  'BookTwo', genre:  'Non-Fiction', publish:  1992, edition:2009 },
  { title:'BookThree'  , genre:'History'  , publish: 2000   , edition: 1999 },
  { title:'BookFour'  , genre:'Non-fiction'  , publish: 1999  , edition: 1988},
  { title:'BookFive'  , genre:'Science'  , publish: 1984   , edition: 2009 },
  { title:'BookSix'  , genre:'Fiction'  , publish: 1982   , edition:2006},
  { title:'Bookseven'  , genre: 'History' , publish: 1986  , edition: 2002 },
  { title:'BookEight'  , genre:'Science'  , publish: 2004  , edition: 1990},
  { title:'BookNine'  , genre:'polytics'  , publish: 1956  , edition: 1994},
  { title:'BookTen'  , genre:'poetry'  , publish: 1987  , edition: 2001},
]

let userBooks = books.filter( (bk) =>bk.genre === "Fiction")
userBooks = books.filter( (bk) => (bk.publish >= 1969))
console.log(userBooks);
