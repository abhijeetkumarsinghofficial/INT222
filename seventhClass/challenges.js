//! CHALLENGES
//! Create a node.js application to display the implementation of events.
// const events = require('events');
// const eventEmitter = new events.EventEmitter();
//* Create an event handler:
// const myEventHandler = function () {
//     console.log('I hear a scream!');
// }


//! Assign the event handler to an event:
// eventEmitter.on('scream', myEventHandler);
// Fire the 'scream' event:
// eventEmitter.emit('scream');


//!Create a node.js aplication to implement listener
// const events = require('events');
// const eventEmitter = new events.EventEmitter(); // Create an eventEmitter object

///////////////////////
// const EventEmitter = require('events');

// Create a new event emitter object
// const eventEmitter = new EventEmitter();

// Attach a listener function to the 'hello' event
// eventEmitter.on('hello', (name) => {
//   console.log(`Hello, ${name}!`);
// });

// Emit the 'hello' event with a parameter
// eventEmitter.emit('hello', 'Alice');

// Emit the 'hello' event again with a different parameter
// eventEmitter.emit('hello', 'Bob');

// Question 3
//!create a node js application that should open ans read from a filename demo.txt if file is empty print empty file and if file is not empty print the content of the file.
const fs = require('fs');

fs.readFile('demo.txt', 'utf8', (err, data) => {
  if (err) throw err;
  if (data.length === 0) {
    console.log('Empty file');
  } else {
    console.log(data);
  }
});


//! 4) Create an Application in NodeJs for basic unit converter using Events
//! Basic unit converter(Fahernheit to Celcius)


//! C = (F-32)*5/9
//! 5) Create a NodeJs application to make http request to open a feedback form which contains the
//! following fields - Name,contact,number,as text
//! fields,feedback as textarea and a submit button . On submission, 'ThankYou for your feedback' message should be
//! displayed in a popup box.

