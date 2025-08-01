const express=require('express');
const path=require('path');
const userRouter=require("./routes/userRouter");
const hostRouter=require("./routes/hostRouter");

const app=express();

app.use((req,res,next)=>{
  console.log(req.url,req.method);
  next();
});

app.use(express.urlencoded());  //middleware to parse form data
app.use(userRouter);
app.use("/host",hostRouter);

app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});


const PORT=3000;
app.listen(PORT,()=>{
  console.log(`Server running on http://localhost:${PORT}`);

});