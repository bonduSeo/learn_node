const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  //   process.exit();
  res.setHeader('content-Type','text/html');
  res.write('<html>')
  res.write('</html>')
  
});

server.listen(3000);
