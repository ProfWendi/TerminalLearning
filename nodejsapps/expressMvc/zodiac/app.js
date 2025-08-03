"use strict";

const express = require("express"),
    app = express(),
    path = require("path"),
    animalController = require(__dirname, "controllers", "animalController"),
    homeController = require(__dirname, "controllers", "homeController");

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");


// if root of project is requested, load the static index.html page
app.use("/zodiac", express.static(path.join(__dirname, "public"),
    {index: "index.html"}));
    
// put any query string from the request body 
// into the req.body object
app.use(
  express.urlencoded({
    extended: false
  })
);

// before processing the form submission, 
// get the year entered by the user
app.use("/zodiac/getyear", animalController.getAnimal);

// render the results page
app.post("/zodiac/getyear", homeController.renderResult);

app.listen(app.get("port"), () => {
    console.log(`Server running on http://localhost:${app.get("port")}`);
});