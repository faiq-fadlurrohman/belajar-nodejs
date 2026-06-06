// const nama = "Faiq Fadlurrohman";
// const cetakNama = (nama) => `Hi, nama saya ${nama}`;
// console.log(cetakNama(nama));

// const fs = require("fs"); // core moddule
// const cetakNama = require("./coba"); // local module
// const moment = require("moment"); // third party module / npm module / node_modules

// console.log("Hello!");

// const cetakNama = require("./coba");
// const PI = require("./coba");

const coba = require("./coba");

console.log(coba.cetakNama("Faiq"), coba.PI, coba.mahasiswa.cetakMhs(), new coba.Orang());