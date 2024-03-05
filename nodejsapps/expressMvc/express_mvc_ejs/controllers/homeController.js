"use strict";

const path = require("path");

exports.renderIndex = (req, res) => {
    res.render("index", {dayInput: req.params.day});
};
