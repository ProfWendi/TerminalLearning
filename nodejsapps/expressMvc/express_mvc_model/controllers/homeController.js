"use strict";

const path = require("path");
const menu = require(path.join(__dirname, "../", "models", "menu.json"));

exports.renderIndex = (req, res) => {
    res.render("index", {
        dayInput: req.params.day,
        menuInput: menu[req.params.day]
    });
};
