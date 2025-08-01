const path=require('path');
const express=require('express');
const contactRouter=express.Router();
const rootDir=require('../utils/pathutils');

contactRouter.get("/contact-us",(req,res,next)=>{
  res.sendfile(path.join(rootDir,'views','contactUs.html'));
});

contactRouter.post("/contact-us",(req,res,next)=>{
  console.log(req.body);
  res.sendfile(path.join(rootDir,'views','contacted.html'));
});

module.exports=contactRouter;