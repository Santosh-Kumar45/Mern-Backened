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



app.get("/", (req, res) => {
    res.send("Hi, I am root");
});

app.get("/random", (req, res) => {
    res.send("this is a random page ");
});

app.use((req, res, next) => {
    req.time = Date.now();
    console.log(req.method, req.hostname, req.path, req.time);
    next();
});

app.listen(8080, () => {
    console.log("server listening at port 8080");
});

