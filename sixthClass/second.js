// const myfunc = (param1) => {
// console.log(param1 + "It rocks");
// console.log(param1 + "It rocks");
// };
// setTimeout(myfunc, 2000, "Hello");

//! ⤴️ It is calling after 2 seconds

//! print hello after 5 sec and 10 sec using one function only
const myfunc = (param1) => {
console.log(param1 + " It rocks ");
};
setTimeout(myfunc, 5000, "Text after 5 sec");
setTimeout(myfunc, 10000, "Text after 10 sec");



// const myfunc = (param1, count = 1) => {
//     console.log(param1 + "It rocks");
  
//     if (count < 3) {
//       setTimeout(() => {
//         myfunc(param1, count + 1);
//       }, count === 1 ? 5000 : 10000);
//     }
//   };
  
  // Call myfunc() for the first time
//   myfunc("First call: ");

  

