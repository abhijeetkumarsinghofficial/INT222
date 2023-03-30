// Node.js program to demonstrate the	
// gzip() method
// Including zlib module
const zlib = require("zlib");
// Declaring input and assigning
// it a value string
var input = "ABC";
// Calling gzip method
zlib.gzip(input, (err, buffer) => {
if (!err) {

	console.log(buffer.toString('base64'));
}
else {
	console.log(err);
}
});
console.log("Data Compressed...");
