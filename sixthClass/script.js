const fs =  require("fs");
//! this is synchronous 
// const data  = fs.readFileSync("def.txt","utf-8");  
// console.log(data);
// console.log("After data");

//! async  also by default
// const data = fs.readFile("def.txt","utf-8",(err,data)=>{
//     console.log(data);
//     console.log(err);
// });
// console.log("After data");


//! USING ASYNC FUNCTION TO MAKE FILE AND ENTER DATA

//! make new file and enter data
// fs.writeFile('test.txt', 'Hello World!', function (err) {
//   if (err) throw err;
//   console.log('File created successfully.');
// });

//Task to do
// 1. create a folder
// 2. create a file in that folder


// ! create a folder
// fs.mkdir("newFolder", (err) => {
//     if (err) throw err;
//     console.log("Folder created successfully.");
//     }
// );

//! creating a file in that folder
// fs.writeFile('./newFolder/test.txt', 'Hello World!', function (err) {
//   if (err) throw err;
//   console.log('File created successfully.');
// });

const EventEmitter = require("events");
const event = new EventEmitter();
//register a listener
event.on("sayMyName", () => {
    console.log("Your name is Rohan");
}
);

//Raised an event
event.emit("sayMyName");

// setTimeout