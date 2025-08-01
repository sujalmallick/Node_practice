const sumReqHandler = (req, res) => {
  console.log("in sumReqHandler",req.url);
  const body=[];
  req.on("data",(chunk)=>{
    body.push(chunk);
  });
  req.on("end",()=>{
    const fullBody=Buffer.concat(body).toString();
    const params = new URLSearchParams(fullBody);
    const bodyObj=Object.fromEntries(params);
    const result = Number(bodyObj.first) +  Number(bodyObj.second);
    console.log("result:",result);
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
      <head><title>Calculator</title></head>
      <body>
        <h1>Sum= ${result}</h1>
      </body>
    </html>`);
    return res.end();
  });
};
exports.sumReqHandler = sumReqHandler;