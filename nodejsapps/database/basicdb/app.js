"use strict";

const express = require("express"),
    app = express(),
    path = require("path"),
    dbController = require("./controllers/dbController");

app.set("port", process.env.PORT || 3000),
app.set("view engine", "ejs");    

app.get("/countries", dbController.getCountries);

app.use(express.static(path.join(__dirname, "public")));

app.listen(app.get("port"), () => {
    console.log(`Server running at port ${app.get("port")}`);
});