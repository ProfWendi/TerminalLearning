"use strict";

const express = require("express"),
    app = express(),
    animalController = require("./controllers/animalController"),
    homeController = require("./controllers/homeController");

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

// route get requests to index page
app.get("/zodiac/index", homeController.renderIndex);

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