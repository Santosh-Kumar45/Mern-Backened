const express = require("express");
const app = express();


// app.use((req, res,next) => {
//     console.log("Hi, I am 1st middleware");
//     next();
// });
// app.use((req, res,next) => {
//     console.log("Hi, I am 2nd middleware");
//     next();
// });

const checkToken= (req,res,next)=>{
    let {token}=req.query;
    if(token==="giveaccess"){
        next();
    }
    throw new Error("ACCESS DENIED!");
};

// app.get("/wrong",(req,res)=>{
//     abcd=abcd;
// });

app.get("/api",checkToken, (req,res)=>{
    res.send("data");
});


app.get("/", (req, res) => {
    res.send("Hi, I am root");
});

app.get("/random", (req, res) => {
    res.send("this is a random page ");
});

//utility middlewares. (logger-morgan)
// app.use((req, res, next) => {
//     req.time = Date.now();
//     console.log(req.method, req.hostname, req.path, req.time);
//     next();
// });

//404
app.use((req,res)=>{
    res.status(404).send("page not found!");
});

app.listen(8080, () => {
    console.log("server listening at port 8080");
});

