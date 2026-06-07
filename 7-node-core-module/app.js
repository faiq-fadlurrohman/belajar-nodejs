// Core Module
// File System
const { log } = require('console');
const fs = require('fs');

// Menuliskan string ke file (Synchronous)
// try {
//     fs.writeFileSync('data/test.txt', 'Hello World secara synchronous!');
// } catch (error) {
//     console.log(error);
// }

// Menuliskan string ke file (Asynchronous)
// fs.writeFile('data/test.txt', 'Hello World secara asynchronous!', (err) => {
//     console.log(err);
// });

// Membaca isi file (Synchronous)
// const data = fs.readFileSync('test.txt', 'utf-8');
// console.log(data);

// Membaca isi file (Asynchronous)
// fs.readFile('data/test.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// Readline
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout 
});

rl.question('Masukan nama anda : ', (nama) => {
    rl.question('Masukan no HP anda : ', (noHP) => {
        const contact = {nama, noHP};
        const file = fs.readFileSync('data/contacts.json', 'utf-8');
        const contacts = JSON.parse(file);

        contacts.push(contact);
        
        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
        console.log('Terimkasih sudah memasukkan data.');
                
        rl.close();
    });
});