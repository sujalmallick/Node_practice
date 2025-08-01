//npm init -y to create package.json file
// npm install --save-dev nodemon to install nodemon
//npm install express --save to install express
const path=require('path');

const express=require('express');
const rootDir=require('./utils/pathutils');

const homeRouter=require("./routes/homeRouter");
const contactRouter=require("./routes/contactRouter");
const app = express();

// app.use((req,res,next)=>{
//   console.log("first dummy middleware",req.url,req.method);
//   next();
// });
// app.use((req,res,next)=>{
//   console.log(" second dummy middleware",req.url,req.method);
//   next();
// });

app.use((req,res,next)=>{
  console.log(req.url,req.method);
  next();
});

app.use(express.urlencoded()); //where u get .post use console.log(req.body) to see the parsed data
app.use(homeRouter);
app.use(contactRouter);

app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(rootDir,'views','404.html'));
});

const PORT=3000;
app.listen(PORT,()=>{
  console.log(`Server running on http://localhost:${PORT}`);

});