"use strict";

const path = require("path"),
    links = require(path.join(__dirname, "../", "models", "links.json"));

exports.renderIndex = (req, res) => {
    res.render("index", {links: links});
};

exports.renderPage2 = (req, res) => {
    res.render("page2", {sampleData: "foobar"});
}
