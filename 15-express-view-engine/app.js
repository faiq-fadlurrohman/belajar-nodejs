const express = require("express");
const app = express();
const port = 3000;

// Gunakan EJS
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const mahasiswa = [
    {
      nama: "Fa'iq Fadlurrohman",
      email: "faiq@gmail.com",
    },
    {
      nama: "Syifa",
      email: "syifa@gmail.com",
    },
    {
      nama: "Nasywa",
      email: "nasywa@gmail.com",
    },
  ];

  res.render("index", {
    nama: "Fa'iq Fadlurrohman",
    title: "Halaman Home",
    mahasiswa,
  });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "Halaman About" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Halaman Contact" });
});

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
