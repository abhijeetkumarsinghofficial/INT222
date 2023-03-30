// Node.js program to demonstrate the	
// inflate() method

// Including zlib module
const zlib = require("zlib");

// Declaring input and assigning
// it a value string
var input = "Geeks";

// Calling deflate method
zlib.deflate(input, (err, buffer) => {

// Calling inflate method
zlib.inflate(buffer, (err, buffer) => {
	console.log(buffer.toString('utf8'));
});
});
