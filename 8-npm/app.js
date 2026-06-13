const validator = require('validator');
const chalk = require('chalk');

// console.log(validator.isEmail('faiq@gmail.c'));
// console.log(validator.isMobilePhone('07223456789', 'id-ID'));
// console.log(validator.isNumeric('07223456789a'));

// console.log(chalk.italic.bgBlue.black("Hello World!"));
const nama = 'Faiq';
const pesan = chalk`Lorem ipsum dolor {bgRed.black.bold sit amet} consectetur {bgGreen.italic.black adipisicing} elit. Velit, veritatis. Nama saya : ${nama}`;
console.log(chalk(pesan));