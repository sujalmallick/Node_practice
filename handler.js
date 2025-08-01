const { sumReqHandler } = require('./sum');
const reqHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
    <head><title>Calculator</title></head>
    <body>
    <h1>Welcome to the Calci</h1>
    <a href="/calculator">Go to Calculator</a>
    </body>
    </html>
    `);
    return res.end();
  }
  else if(req.url.toLowerCase() === "/calculator"){
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
    <head><title>Calculator</title></head>
    <body>
    <h1>Here is the CALCI</h1>
    <form action="/calculate-result" method="POST">
    <input type="text" name="num1" placeholder="Enter First Number">
    <input type="text" name="num2" placeholder="Enter second Number">
    <input type="submit" value="Add">
    </form>
    </body>
    </html>
    `);
    return res.end();

  }
  else if(req.url.toLowerCase() === "/calculator-result" && req.method === "POST"){
   return sumReqHandler(req,res);
  }
  else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
      <head><title>Calculator</title></head>
      <body>
        <h1>ERROR 404</h1>
        <a href="/">Go to Home</a>
      </body>
    </html>`);
    return res.end();
  }
};
exports.reqHandler = reqHandler;
