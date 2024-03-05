"use strict";

exports.renderIndex = (req, res) => {
    if (!req.params.num || req.params.num <= 0) {
        req.params.num = 10;
    }
    res.render("index", {
        min: req.params.min,
        max: req.params.max,
        num: req.params.num
    });
}