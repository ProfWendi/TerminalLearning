"use strict";

/* 
make sure you use:
npm install express express-session ejs mysql -s
*/
const express = require("express"),
    app = express(),
    path = require("path"),
    dbController = require("./controllers/dbController"),
    // added home controller
    homeController = require("./controllers/homeController"),
    // added session module
    session = require("express-session");

app.set("port", process.env.PORT || 3000),
app.set("view engine", "ejs");    

// added middleware for session handling
app.use(session({
    secret: "thisismysecrctekey",
    saveUninitialized: false,
    resave: false 
}));

// added middleware to do database stuff
app.use("/countries", dbController.getCountries);
// changed endpoint callback to home controller renderCountries
app.get("/countries", homeController.renderCountries);

app.use(express.static(path.join(__dirname, "public")));

app.listen(app.get("port"), () => {
    console.log(`Server running at port ${app.get("port")}`);
});