"use strict";

// add/expose a function to render countries.ejs with the 
// results from our query that were stored in the session
exports.renderCountries = (req, res) => {
    res.render("countries", { countries: req.session.countries });
}