const path=require('path');

const express=require('express');
const rootDir=require('../utils/pathutils');

const homeRouter=express.Router();

homeRouter.get("/",(req,res,next)=>{
  console.log("Handling / for GET middleware",req.url,req.method);
  res.sendfile(path.join(rootDir,'views','home.html'));
});


module.exports=homeRouter;