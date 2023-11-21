"use strict";
// app.js

const express = require("express"),
    app = express();
app.set("port", process.env.PORT || 3000);

app.use((req, res, next) => {
    console.log(`${req.method} request made to: ${req.url}`);
    console.log(req.headers);
    next(); // invoke next function                                  
});

app.use("/express", (req, res, next) => {
    console.log(`${req.originalUrl} starts with /express`);
    console.log(`New request URL: ${req.url}`);
    next();
});

app.get("/express", (req, res) => {
    console.log(req.url);
    res.send("<h1>Hello, Express!</h1>");
});

// route all GET requests to /express1/foo
app.get("/express/foo", (req, res) => {
    console.log(req.url);
    console.log(req.query);
    res.send(`<h1>Foo!</h1><p>${req.query.name} is ${req.query.age}</p>`);
});

app.use(
    express.urlencoded({
      extended: false
    })
  );

app.post("/express", (req, res) => {
    res.send(`<h1>This was a POST Request</h1><p>${req.body.name} is ${req.body.age}</p>`);
    console.log(req.body);
});

/*
// add a function to the middleware stack:
// this function executes if there is URL-encoded data 
// in the request body

*/
/*
// route all POST requests to /express1

*/
// start the server and wait for connections/requests
// notice we're now using app.get("port")
app.listen(app.get("port"), () => {
    console.log(`Server running on port: ${app.get('port')}`);
});