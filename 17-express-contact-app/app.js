const express = require("express");
const expresLayouts = require("express-ejs-layouts");
const { loadContact, findContact, addContact } = require("./utils/contacts");
const app = express();
const port = 3000;

// Gunakan EJS
app.set("view engine", "ejs");

// Third-party Middleware
app.use(expresLayouts);

// Built-In middleware
app.use(express.static("public"));
app.use(express.urlencoded());

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

app.get("/about", (req, res) => {
  res.render("about", {
    layout: "layouts/main-layout",
    title: "Halaman About",
  });
});

app.get("/contact", (req, res) => {
  const contacts = loadContact();

  res.render("contact", {
    layout: "layouts/main-layout",
    title: "Halaman Contact",
    contacts,
  });
});

// Halaman dorm tambah data contact
app.get("/contact/add", (req, res) => {
  res.render("add-contact", {
    title: "Form Tambah Data Contact",
    layout: "layouts/main-layout",
  });
});

// Proses data contact
app.post("/contact", (req, res) => {
  addContact(req.body);
  res.redirect("/contact");
});

// Halaman detail contact
app.get("/contact/:nama", (req, res) => {
  const contact = findContact(req.params.nama);

  res.render("detail", {
    layout: "layouts/main-layout",
    title: "Halaman Detail Contact",
    contact,
  });
});

app.use((req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
