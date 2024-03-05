"use strict";

exports.renderIndex = (req, res) => {
    res.render("index", {radius: req.params.rad});
};