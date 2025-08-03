"use strict";

const express = require("express"),
    app = express(),
    path = require("path"),
    mainController = require("./controllers/mainController");
app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");


app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

app.use("/dynamic", express.static(path.join(__dirname, "public")));

app.get("/dynamic", mainController.renderIndex);
app.get("/dynamic/page2", mainController.renderPage2);

app.listen(app.get("port"), () => {
    console.log(`server running on port ${app.get("port")}`);
});