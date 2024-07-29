// Create web server
// Create a web server that listens on port 3000. When it receives a request, it will respond with the text “Hello, World!”.
const http = require('http');

const server = http.createServer((req, res) => {
  res.write('Hello, World!');
  res.end();
});

server.listen(3000);