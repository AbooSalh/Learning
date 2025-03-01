const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello World!");
  console.log(req);
  console.log(req.url);
  res.end();
});
server.listen(3001);
