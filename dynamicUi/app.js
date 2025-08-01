const express=require('express'); //Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
const path=require('path');//npx tailwindcss -i ./views/input.css -o ./public/output.css --watch
const userRouter=require("./routes/userRouter");
const hostRouter=require("./routes/hostRouter");
const rootDir=require('./utils/pathutils');

const app=express();

app.use((req,res,next)=>{
  console.log(req.url,req.method);
  next();
});

app.use(express.urlencoded());  
app.use(userRouter);
app.use("/host",hostRouter);

app.use(express.static(path.join(rootDir,'public')));

app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(rootDir,'views','404.html'));
});


const PORT=3000;
app.listen(PORT,()=>{
  console.log(`Server running on http://localhost:${PORT}`);

});