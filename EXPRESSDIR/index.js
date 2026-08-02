const express=require("express");
const app=express();

let port =8080;

app.listen(port,()=>{
    // console.log(req);
    console.log(`app is listening on port ${port}`);
   
});

app.get("/",(req,res)=>{
    res.send("  you contacted root path");
});

app.get("/apple",(req,res)=>{
    res.send("  you contacted apple path");
});

app.get("/:username/:id",(req,res)=>{
   let{username,id}=req.params;
  let htmlStr=`<h1>welcome to the page of @${username}</h1>`;
    res.send(htmlStr);
});

// app.get("*",(req,res)=>{
//     res.send("this path does not exist");
// });



// app.use((req,res)=>{
//     // console.log(req);
//     console.log("requist recived");
//      let code="<h1>Fruits</h1><ul><li>apple</li><li>orange</li></ul>";
//      res.send(code);
// });