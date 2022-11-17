/*
    information about the response message, visit
        mime types mdn
*/

const http = require("http");
const fs = require("fs");
const homePage = fs.readFileSync("./navbar-app/index.html");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.write("About page");
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.write("Page not FOUND");
    res.end();
  }
});

server.listen(5000);
