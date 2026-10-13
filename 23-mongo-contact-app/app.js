const express = require("express");
const expressLayouts = require("express-ejs-layouts");

require("./utils/db");
const Contact = require("./model/contact");

const app = express();
const port = 3000;

// Setup EJS
app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Halaman Home
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
    layout: "layouts/main-layout",
  });
});

// Halaman About
app.get("/about", (req, res) => {
  res.render("about", {
    layout: "layouts/main-layout",
    title: "Halaman About",
  });
});

// Halaman Contact
app.get("/contact", (req, res) => {
  Contact.find().then((contact) => {
    res.send(contact);
  });

  //   const contacts = loadContact();

  //   res.render("contact", {
  //     layout: "layouts/main-layout",
  //     title: "Halaman Contact",
  //     contacts,
  //     msg: req.flash("msg"),
  //   });
});

app.listen(port, () => {
  console.log(`Mongo Contact App | listening at http://localhost:${port}`);
});
