"use strict";

const http = require("http");
const port = 3000, 
      hostname = "localhost";

const server = createServer(function(req, res) {
    // code to execute when a request comes in
    
    console.log("Received an incoming request.");
    console.log(req.url);
    
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Hello World!</h1>\n");

});

server.listen(port, function() {
    // code to execute when server starts up
    console.log(`Server running at http://${hostname}:${port}/`);
});
