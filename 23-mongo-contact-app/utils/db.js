const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/wpf", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// // Menambah 1 data
// const contact1 = new Contact({
//   nama: "Syifa",
//   nohp: "082345678901",
//   email: "syifa@gmail.com",
// });

// // Simpan ke collection
// contact1.save().then((contact) => console.log(contact));
