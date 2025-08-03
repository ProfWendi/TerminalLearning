"use strict";
const express = require("express"),
    app = express(),
    mainController = require("./controllers/mainController"),
    session = require("express-session");

// set the port and the template engine
app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

app.use(session({
    secret: "mysecretkey",
    saveUninitialized: false,
    resave: false
}));

// any form data in request body?
app.use(
    express.urlencoded({ extended: false })
);

// handle get requests to index
app.get("/sessions", mainController.renderIndex);

// handle get requests to page2
app.get("/sessions/page2", mainController.pageTwo);

// handle post requests to getuser
app.post("/sessions/getuser", mainController.getUser);
// log out
app.post("/sessions/logout", mainController.logout);

app.listen(app.get("port"), () => {
    console.log(`Server running on http://localhost${app.get("port")}`);
});