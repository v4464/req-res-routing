const http = require('http');
const server = http.createServer(function(req, res) {
    console.log(req.url, req.method, req.headers);

    res.setHeader('Content-Type', 'text/html');
    if (req.url === '/home') {
        res.write('<html><head><title>Welcome home</title></head><body>');
        res.write('<h1>Welcome home</h1>');
        res.write('</body></html>');
    } else if (req.url === '/about') {
        res.write('<html><head><title>About Us</title></head><body>');
        res.write('<h1>Welcome to About Us page</h1>');
        res.write('</body></html>');
    } else if (req.url === '/node') {
        res.write('<html><head><title>Node.js Project</title></head><body>');
        res.write('<h1>Welcome to my Node.js project</h1>');
        res.write('</body></html>');
    } 
    res.end();
});

server.listen(3000);
