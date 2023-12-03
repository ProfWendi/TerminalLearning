"use strict";
const mysql = require("mysql");

exports.getCountries = (req, res) => {
    const pool = mysql.createPool({
        host: "localhost",
        user: "guest",
        password: "tunafish",
        database: "world",
        connectionLimit: 10
    });
    pool.query("SELECT * FROM country;", (qError, results, fields) => {
        if (qError) {
            console.log(`query error: ${qError}`);
        } else {
            res.render("countries", { countries: results });
        }
    }); 
}
