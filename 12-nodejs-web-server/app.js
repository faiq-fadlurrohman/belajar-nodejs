const http = require("http");
const fs = require("fs");
const port = 3000;

const renderHTML = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(404, {
        "Content-Type": "text/plain",
      });
      return res.end("Error: file not found");
    }
    res.writeHead(200, {
      "Content-Type": "text/html",
    });

    // res.write(data);
    // res.end();
    res.end(data);
  });
};

http
  .createServer((req, res) => {
    const url = req.url;
    switch (url) {
      case "/about":
        renderHTML("./about.html", res);
        break;
      case "/contact":
        renderHTML("./contact.html", res);
        break;
      default:
        renderHTML("./index.html", res);
        break;
    }
    // if (url === "/about") {
    //   renderHTML("./about.html", res);
    // } else if (url === "/contact") {
    //   renderHTML("./contact.html", res);
    // } else {
    //   renderHTML("./index.html", res);
    // }
  })
  .listen(port, () => {
    console.log(`Server is listening on port ${port}..`);
  });
