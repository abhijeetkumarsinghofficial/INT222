// todo Achronous
// * CREATING FILE
const fs = require('fs'); fs.mkdir('./newfile',()=>{});
// ! NEW FOLDER
// fs.writeFile('./newfile/file.txt', 'Some text content for the file.',()=>{});
// ! RENAMING FILE
// fs.rename('file.txt', 'new.txt', () => {});

// ! READ FILE CONTENT
//  fs.readFile('file.txt', 'utf8',()=>{});

// !  read the content of the file
// fs.readFile('./newfile/file.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(data);
//   }
// });
 

// ! Delete the file
// fs.unlink('file.txt', (err) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log('File deleted successfully.');
//   }
// });

// ! Delete the folder
// fs.rmdir('myFolder', (err) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log('Folder deleted successfully.');
//   }
// });



// todo ACHRONOUS FS MODULE

// ! To Read a File
// fs.readFile('./newfile/file.txt', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// ! To Write a File
// fs.writeFile('./newfile/file.txt', 'Write on File Hello, world!', (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });


// ! To Append to a File
// fs.unlink('/newfile/file.txt', (err) => {
//   if (err) throw err;
//   console.log('The file has been deleted!');
// });

