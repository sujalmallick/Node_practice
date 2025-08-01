const path=require('path');

const express=require('express');
const hostRouter=express.Router();
const rootDir=require('../utils/pathutils');

hostRouter.get("/add-home",(req,res,next)=>{
  res.sendfile(path.join(rootDir,'views','addHome.html'));
});
hostRouter.post("/add-home",(req,res,next)=>{
  console.log(req.body);
  res.sendfile(path.join(rootDir,'views','homeAdded.html'));
});

module.exports=hostRouter;