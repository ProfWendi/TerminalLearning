const port = 3000,
    http = require("http"),
    // import the chat.js module and refer to it with 
    // the variable "chat"
    chat = require("./modules/chat.js");

http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");

    if (req.url.indexOf("chat") >= 0) {

        res.statusCode = 200;
    
        res.write(`<p>${chat.hi}</p>
        <p>${chat.conversation.greet("Kitty")}<br>
        ${chat.conversation.give(2)}</p>
        <p>${chat.bye()}`);

        res.end();
    } else {
        res.write("<h1>Not Found</h1>");
        res.status = 404;
        res.end();
    }
})
    .listen(port, () => {
        console.log(`Server running on port ${port}`);
    });