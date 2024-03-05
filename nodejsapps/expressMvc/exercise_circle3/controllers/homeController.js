"use strict";
const Circle = require("../models/circle.js");

exports.renderIndex = (req, res) => {
    if (!req.params.rad || req.params.rad <= 0) {
        req.params.rad = 1;
    }
    const circle = new Circle(req.params.rad);
    res.render("index", {circle: circle});
};