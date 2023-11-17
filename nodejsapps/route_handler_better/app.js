"use strict";

const port = 3000,
  http = require("http"),
  fs = require("fs"); 

  const customReadFile = (path, res) => {

    // if the path/file exists
    if (fs.existsSync(path)) {

        // read the file
        fs.readFile(path, (error, data) => {
            // error reading file
            if (error) {
                console.log(error);
                sendErrorResponse(res, path);
                return;
            } // here, everything is fine: send the file data
            res.write(data);
            res.end();
        });
    } else {  // file doesn't exist: 404
        sendErrorResponse(res, path);
    }
};  

const sendErrorResponse = (res, path) => {
    res.writeHead(404, {
        "Content-Type": "text/html"
    });
    res.write(`<h1>File Not Found!</h1><p>${path}</p>`);
    res.end();
};

http.createServer((req, res) => {
    
    let contentType = ""; // will be the content type of the response
    let path = "";  // will be the path of the actual file to send back

    // get just the file name from the request URL
    let fileName = req.url.split("/").pop();

    // if it's an .html file (html files are in the /views directory)
    if (req.url.indexOf(".html") !== -1) {
        contentType = "text/html";
        path = `./views/${fileName}`;

    // if it's a css file (css files are in the /public directory)
    } else if (req.url.indexOf(".css") !== -1) {
        contentType = "text/css";
        path =  `./public/css/${fileName}`;

    // if it's a .jpg image file (images are in the /public directory)
    } else if (req.url.indexOf(".jpg") !== -1) {
        contentType = "image/jpg";
        path =  `./public/images/${fileName}`;
    } 

    // for debugging
    console.log(contentType);
    console.log(path);
		console.log(fileName);

    // if contentType wasn't set, we didn't handle this type 
    // of file, so make this a file not found response
    if (contentType === "") {
        sendErrorResponse(res, path);

    // if we did get a content type, everything was great, 
    // so go ahead and read the requested file and send it 
    // to the client in the response body with 200 OK
    } else {  
        res.writeHead(200, {
            "Content-Type": contentType
        });
        customReadFile(path, res);
    }
}).listen(port, () => {
    console.log(`The server is listening on port number: ${port}`);
});