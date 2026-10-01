const http = require("http");
const fs = require("fs");
const port = 3000;

http
  .createServer((req, res) => {
    const url = req.url;
    if (url === "/about") {
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      //   res.write("<h1>Ini Adalah Halaman About</h1>");
      //   res.end();
      res.end("<h1>Ini Adalah Halaman About</h1>");
    } else if (url === "/contact") {
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      res.end("<h1>Ini Adalah Halaman Contact</h1>");
    } else {
      //   res.write("Hello World!");
      fs.readFile("./index.html", (err, data) => {
        if (err) {
          res.writeHead(404, {
            "Content-Type": "text/plain",
          });
          return res.end("Error: file not found");
        }
        res.writeHead(200, {
          "Content-Type": "text/html",
        });

        res.end(data);
      });
    }
  })
  .listen(port, () => {
    console.log(`Server is listening on port ${port}..`);
  });
