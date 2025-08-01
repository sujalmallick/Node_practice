//core module
const os=require('os');
console.log(os.cpus().length);    
const http = require('http');     //Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
//external module
const express = require('express');
//local module 
const reqHandler =require('./UserInput');

const app = express();

app.use("/",(req,res,next)=>{
  console.log('In the first middleware',req.url,req.method);
  //res.send('<h1>Welcome to page</h1>'); //cannot write next() after res.send
  next();
});

app.use("/submit-details",(req,res,next)=>{
  console.log('In the second middleware',req.url,req.method);
  res.send('<h1>Welcome to submit details page</h1>');
});

app.use("/",(req,res,next)=>{
  console.log('In the another middleware',req.url,req.method);
  res.send('<h1>(anothermiddleware) Welcome to page</h1>');
});



const server=http.createServer(app);

const PORT=3002;
app.listen(PORT,(err)=>{
  if (err) {
    console.error('Error starting server:', err);
  } else {
    console.log(`Server running on http://localhost:${PORT}`);
  }
});
