const http = require('http');
const { reqHandler } = require('./handler');

const server=http.createServer(reqHandler);
const PORT=3000;
server.listen(PORT,(err)=>{
  if (err) {
    console.error('Error starting server:', err);
  } else {
    console.log(`Server running on http://localhost:${PORT}`);
  }
});
