"use strict";
// example of basic routing, not a "real life" example,
// just to understand how it works

// map of responses for various URL patterns
// - key is the pattern in the URL
// - value is the response we want to give
const routeResponseMap = {
    "/routes/info": "<h1>Info Page</h1>",
    "/routes/contact": "<h1>Contact Us</h1>",
    "/routes/about": "<h1>Learn More About Us.</h1>",
    "/routes/hello": "<h1>Say hello by emailing us here</h1>",
    "/routes/error": "<h1>Someday I'll Make an Error Page</h1>"
};

const port = 3000,
    http = require("http");

http.createServer((req, res) => {
    console.log("Received an incoming request!");
    console.log(req.url);

    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    // see if the url matches any in the mapping table
    // (if this key exists in the map = a falsy expression)
    if (routeResponseMap[req.url]) {
        // found it: send the value as the response body
        // included the request URL for debugging
        res.write(routeResponseMap[req.url]);
        res.end(`<p>Request: ${req.url}</p>`);
    } else {
        // not found, just generic welcome response 
        // with the request URL for debugging
        res.end(`<h1>Welcome Page</h1><p>Request: ${req.url}</p>`);
    }
}).listen(port, () => { 
    console.log(`Server running on port ${port}`);
});
