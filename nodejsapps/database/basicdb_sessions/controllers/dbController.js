"use strict";
const mysql = require("mysql");

const pool = mysql.createPool({
    host: "localhost",
    user: "guest",
    password: "tunafish",
    database: "world",
    connectionLimit: 10
});

exports.getCountries = (req, res, next) => {
   
    pool.query("SELECT * FROM country;", (qError, results, fields) => {
        if (qError) {
            console.log(`query error: ${qError}`);
        } else {
            // store results in session instead of rendering
            req.session.countries = results;
            // go to next middleware
            next();            
        }
    }); 
}
