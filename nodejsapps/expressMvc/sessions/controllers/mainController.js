"use strict";

exports.renderIndex = (req, res) => {
  res.render("index", {session: req.session});
};

exports.getUser = (req, res) => {
  req.session.username = req.body.username;
  res.render("index", {session: req.session});
};

// doesn't work because it's a new request/response cycle
// (this is part of the demo: why we need sessions)
exports.pageTwo = (req, res) => {
  res.render("page2", {session: req.session});
};

exports.logout = (req, res) => {
    req.session.destroy(() => {
        console.log("session destroyed");
    });
    res.render("index");
};