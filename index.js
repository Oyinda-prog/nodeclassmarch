const express=require('express')
 const app=express()
require('dotenv').config()
//const port=3000
const port=process.env.PORT ||5400
let users=[
    {id:1,name:'oyin'},
    {id:2,name:"Olawale"}
]

 app.get('/',(req,res)=>{
 res.send('Hello world')
   res.send(users)
 })
// //set up server
  app.listen(port,()=>{
     console.log(`Server started at port ${port}`);
    
})


// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//     const userIp = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
//     res.send({ ip: userIp });
// });

// app.listen(5000, () => console.log("Server running on port 5000"));
