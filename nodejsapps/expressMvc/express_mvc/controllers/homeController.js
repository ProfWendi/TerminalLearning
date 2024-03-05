"use strict";

const path = require("path");

exports.renderIndex = (req, res) => {
    res.sendFile(path.join(__dirname, "../", "views", "index.html"));
};

