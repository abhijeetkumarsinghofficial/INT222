const prompt = require("prompt-sync")();
let x =  prompt("Enter a string ");

while(true){
    let y =  prompt("Enter a string ");
    // console.log(x);
    // y = prompt("Enter a string ");
    if(y==x){
        console.log("Correct");
        break;
    }
    else
    {
        console.log("TRY AGAIN");
        break;
    }
}
