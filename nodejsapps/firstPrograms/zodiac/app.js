"use strict";
// app.js 

const port = 3000,
    http = require("http"),
    fs = require("fs"),
    // a third party module https://www.npmjs.com/package/chinese-year
    chineseYear = require("chinese-year");

http.createServer((req, res) => {

    // response will be in text/html
    res.setHeader("Content-Type", "text/html");

    // if the request URL contains "getyear", it was triggered
    // by form submission
    if (req.url.indexOf("getyear") >= 0) {

        let urlObj = new URL(`https://${req.headers.host}${req.url}`);

        // get the parameter for the year input
        //const queryString = urlObj.searchParams;
        //let year = queryString.get("year");
        let year = urlObj.searchParams.get("year");

        // if we have a valid year, use it, otherwise use current year 
        year = (year) ? year : new Date().getFullYear();

        const animal = chineseYear.getAnimal(year);
        
        console.log(`request URL: ${req.url}`);
        console.log(`URL object: ${urlObj}`);
        console.log(`params: ${urlObj.searchParams}`);
        console.log(`year: ${year}`);

        res.statusCode = 200; 
        res.write(`<h1>Chinese Year</h1><p>${year} is year of the ${animal}</p>`);
        res.end();

    } else {  // all other requests will load index.html
        fs.readFile("index.html", (error, data) => {

            if (error) { // error finding/reading file
                res.statusCode = 404; // 404 = NOT FOUND
                res.write("<h1>File Not Found</h1>");
                console.log(error);  // for debugging

            } else {  // no errors, get the file
                res.statusCode = 200; // 200 = OK
                // data contains the file contents
                // write the file's contents to the response body
                res.write(data);
            }
            // all done either way, send the response        
            res.end();
        });
}

}).listen(port, () => {
    console.log(`Server running on port ${port}`);
});
