// const fs = require('fs');
// const bioData = {
//     name: "Rahul",
//     age: 23,
//     university: "LPU",
// }
// const jsonData = JSON.stringify(bioData);
// console.log(jsonData);

//! now add the converted data to another file name json1.json

// fs.writeFile('json1.json', jsonData, (err) => {
//     console.log("done");
// });

//convert to json
// var json = JSON.stringify(obj);
//now add the converted data to another file name json1.js
// var fs = require('fs');
// fs.writeFile('json1.js', json, 'utf8', callback);
//now read the data from json1.js file


//! Take input from user name,age and gender.

// This data must be written into a json file.The same data should be read from file
// and then get printed on server or webpage.


const readline = require('readline'); // Import the readline module
const fs = require('fs'); // Import the fs module

const rl = readline.createInterface({ // Create the readline interface
  input: process.stdin, // Set the input to the terminal
  output: process.stdout // Set the output to the terminal
});

// Prompt the user for their name, age, and gender
rl.question('Enter your name: ', (name) => { // Ask the user for their name
  rl.question('Enter your age: ', (age) => { // Ask the user for their age
    rl.question('Enter your gender: ', (gender) => { 
      // Create an object with the user's information
      const user = {
        name: name, 
        age: age,
        gender: gender
      };

      // Write the user's information to a JSON file
      fs.writeFile('user.json', JSON.stringify(user), (err) => {
        if (err) throw err;
        console.log('User data saved to file');
      });

      // Close the readline interface
      rl.close();
    });
  });
});



