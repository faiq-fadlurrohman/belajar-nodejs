const { MongoClient, ObjectId } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const dbName = "wpf";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((error, client) => {
  if (error) {
    return console.log("Koneksi gagal!");
  }

  //   Pilih database
  const db = client.db(dbName);

  //   Menambahkan 1 data ke collection mahasiswa
  //   db.collection("mahasiswa").insertOne(
  //     {
  //       nama: "Nasywa",
  //       email: "nasywa@gmail.com",
  //     },
  //     (error, result) => {
  //       if (error) {
  //         return console.log("Gagal menambahkan data!");
  //       }
  //       console.log(result);
  //     },
  //   );

  //   Menambahkan lebih dari 1 data
  //   db.collection("mahasiswa").insertMany(
  //     [
  //       {
  //         nama: "Syifa",
  //         email: "syifa@outlook.com",
  //       },
  //       {
  //         nama: "Nasywa",
  //         email: "nasywa@gmail.com",
  //       },
  //     ],
  //     (error, result) => {
  //       if (error) {
  //         return console.log("Data gagal ditambahkan!");
  //       }
  //       console.log(result);
  //     },
  //   );

  //   Menampilkan semua data yang ada di collectoin 'mahasiswa'
  //   console.log(
  //     db
  //       .collection("mahasiswa")
  //       .find()
  //       .toArray((error, result) => {
  //         console.log(result);
  //       }),
  //   );

  //   Menampilkan data berdasarkan kriteria
  //   console.log(
  //     db
  //       .collection("mahasiswa")
  //       .find({ _id: ObjectId("6acd825ed740b80e1c6732ff") })
  //       .toArray((error, result) => {
  //         console.log(result);
  //       }),
  //   );

  //   Mengubah data berdasarkan id
  //   const updatePromise = db.collection("mahasiswa").updateOne(
  //     {
  //       _id: ObjectId("6acc3892611225fc68759941"),
  //     },
  //     {
  //       $set: {
  //         email: "faiq@outlook.com",
  //       },
  //     },
  //   );

  //   updatePromise
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //   Mengubah data lebih dari 1, berdasarkan kriteria
  db.collection("mahasiswa").updateMany(
    {
      nama: "Fa'iq",
    },
    {
      $set: {
        nama: "Fa'iq Fadlurrohman",
      },
    },
  );
});
