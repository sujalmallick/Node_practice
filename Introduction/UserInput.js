
const fs= require('fs');
const reqHandler = ((req, res) =>{                                           
    console.log(req.url,req.method); 
    if(req.url=== '/'){       
      res.setHeader('Content-Type','text/html');   
      res.write('<html>');
      res.write('<head><title>ABSURDX</title></head>');
      res.write('<body><h1>Enter your details</h1>');
      res.write('<form action="/submit-details" method="POST">');
      res.write('<input type="text" name="username" placeholder="enter your name"><br>');
      res.write('<label for="male">Male</label>');
      res.write('<input type="radio" id ="male" name="gender" value="male" />');
      res.write('<label for="female">Female</label>');
      res.write('<input type="radio" id="female" name="gender" value="female" />');
      res.write('<input type="submit" value="Submit">');
      res.write('</form>');
      res.write('</body>');
      res.write('</html>');
      return res.end();
    }
    else if (req.url === '/submit-details' && req.method === 'POST') {
    let body = '';
    req.on('data', (chunk) => 
      {
      body += chunk;
    });
    req.on('end', () => {
      const parsedBody = querystring.parse(body);
      console.log(parsedBody);
      res.setHeader('Content-Type', 'text/html');
      res.write('<html>');
      res.write('<head><title>ABSURDX</title></head>');
      res.write('<body><h1>Thanks for submitting your details!</h1></body>');
      res.write('</html>');
      return res.end();
    });
  }  else {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>ABSURDX</title></head>');
    res.write('<body><h1>WOW</h1></body>');
    res.write('</html>');
    return res.end();
  }
});

exports.reqHandler = reqHandler;