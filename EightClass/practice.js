//! Used for compressing files in GZ format
// const zlib = require('zlib');
// const fs = require('fs');
// const gzip = zlib.createGzip();
// const input = fs.createReadStream('index.txt');
// const output = fs.createWriteStream('index.txt.gz');
// input.pipe(gzip);
// input.pipe(output);

//! Decompressing the files from GZ format
// var zlib = require('zlib');
// var fs = require('fs');
// var unzip = zlib.createUnzip();
// var r = fs.createReadStream('index.txt.gz');
// var w = fs.createWriteStream('index.txt');
// r.pipe(unzip).pipe(w);

//! Decompressing the files from GZ format
// var zlib = require('zlib');
// var fs = require('fs');
// var unzip = zlib.createUnzip();
// var r = fs.createReadStream('input.txt.gz');
// var w = fs.createWriteStream('input3.txt.gz');
// r.pipe(unzip).pipe(w);


//*Zlib provide module supporting brotli compression format (loseless compression algorithm)
//*via createBrotliCompress or createBrotliDecompress or createGunzip

// Including zlib and fs module
// const zlib = require("zlib");
// const fs = require('fs');

// Creating readable Stream
// const inp = fs.createReadStream('test.txt');

// Creating writable stream
// const out = fs.createWriteStream('test.txt.gz');

// Calling createBrotliCompress method
// const brot = zlib.createBrotliCompress();

// Piping
// inp.pipe(brot).pipe(out);
// console.log("Program Completed!")


//! A buffer is a temporary storage area for binary data
// var buf = Buffer.from('ABCD');
// console.log(buf);