"use strict";

exports.renderIndex = (req, res) => {
    res.render("index", {
        user: req.params.user,
        rating: req.params.rating
    });
}