const prompt = require("prompt-sync")({sigint :true});

let Nama = String(prompt("Masukkan nama anda: "));

console.log("Nama Anda : " + Nama)
console.log(`Apakabar ${Nama}? Wish you Luck!`)
