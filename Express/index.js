const express = require("express")

const app = express()

app.get("/",(req,res)=>{
    res.send("Hello World");
})

//Routing
app.get("/contact",(req,res)=>{
    res.send("This is Contact Page");

})

app.listen(8000,()=>{
    console.log("Server is running on port 8000");
})


app.get("/add/:num1/:num2",(req,res)=>{
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const sum = num1+num2;
    res.send("The sum of two numbers is "+sum);
})

//using query string
app.get("/sub",(req,res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a-b;
    res.send(`The Substraction ${a} - ${b} of two numbers is ` +sum);
})

