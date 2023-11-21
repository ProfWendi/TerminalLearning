"use strict";

const homeController = require("./controllers/homeController");


const express = require("express"),
    app = express();
app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.get("/menu/:day", homeController.renderMenu);

/*
app.get("/menu/:day", (req, res) => {
    console.log(`day: ${req.params.day}`);
});
*/
app.listen(app.get("port"), () => {
    console.log(`Server running on http://localhost:${app.get("port")}`);
});