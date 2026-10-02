const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // res.send("<h1>Hello World!</h1>");
  // res.json({
  //   nama: "Fa'iq Fadlurrohman",
  //   email: "faiq@gmail.com",
  //   noHP: "081234567890",
  // });
  res.sendFile("./index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  // res.send("Ini adalah Halaman About");
  res.sendFile("./about.html", { root: __dirname });
});

app.get("/contact", (req, res) => {
  // res.send("Ini adalah Halaman Contact");
  res.sendFile("./contact.html", { root: __dirname });
});

// app.get("/product/:id/category/:idCategory", (req, res) => {
//   res.send(
//     `Product ID : ${req.params.id} <br> Category ID : ${req.params.idCategory}`,
//   );
// });

app.get("/product/:id", (req, res) => {
  res.send(
    `Product ID : ${req.params.id} <br> Category : ${req.query.category}`,
  );
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
