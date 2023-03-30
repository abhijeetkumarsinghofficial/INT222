const os= require("os");
const { memoryUsage } = require("process");
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.freemem());
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.networkInterfaces());
// console.log(os.platform());
// console.log(os.release());
// console.log(os.tmpdir());

// convert bytes to GB using string literals
// console.log("In byte "+os.totalmem());
// console.log(os.totalmem()/(1024*1024*1024));

// console.log("Total mem/Ram In Gb "+`${os.totalmem()/(1024*1024*1024)} GB`);


// console.log(os.type());
// console.log(os.uptime());


// console.log("In byte "+os.freemem());
// console.log("Total Free Memory In Gb "+ `${os.freemem()/1024*1024*1024} GB`);

// console.log(os.availableParallelism());
// console.log(os.cpus().length);


const path = require("path");
// path parse
console.log(path.parse("/Users/abhijeet/Documents/vscode/extenions/voice-type/content.js")["root"]);
console.log(path.parse("/Users/abhijeet/Documents/vscode/extenions/voice-type/content.js").dir);
console.log(path.parse("/Users/abhijeet/Documents/vscode/extenions/voice-type/content.js").base);
console.log(path.parse("/Users/abhijeet/Documents/vscode/extenions/voice-type/content.js").ext);
console.log(path.parse("/Users/abhijeet/Documents/vscode/extenions/voice-type/content.js").name);
