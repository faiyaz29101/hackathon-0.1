let http = require('http');
let fs = require('fs');

let server = http.createServer((req, res) => {
  // Set content type for HTML responses
  res.setHeader('Content-Type', 'text/html');

  // Handle requests based on the route
  if (req.url === '/' && req.method === 'GET') {
    // Serve file1.html on GET /
    fs.readFile('index.html', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Internal Server Error');
      } else {
        res.statusCode = 200;
        res.end(data);
      }
    });
  } else if (req.url === '/route1' && req.method === 'GET') {
    // Serve file2.html on GET /route1
    fs.readFile('projects.html', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Internal Server Error');
      } else {
        res.statusCode = 200;
        res.end(data);
      }
    });
  } else if (req.url === '/route2' && req.method === 'GET') {
    // Serve file3.html on GET /route2
    fs.readFile('about.html', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Internal Server Error');
      } else {
        res.statusCode = 200;
        res.end(data);
      }
    });
  } else {
    // Return 404 Not Found for any other route
    res.statusCode = 404;
    res.end('Webpage not found');
  }
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});