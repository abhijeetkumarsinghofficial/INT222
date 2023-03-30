// Node.js program to demonstrate the	
// deflate() method

// Including zlib module
const zlib = require("zlib");

// Declaring input and assigning
// it a value string
var input = "Geeks";

// Calling deflate method
zlib.deflate(input, (err, buffer) => {

if (!err) {

	console.log(buffer.toString('base64'));
}
else {
	console.log(err);
}
});
console.log("Data Compressed...");
