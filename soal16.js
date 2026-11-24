const prompt = require("prompt-sync")({sigint:true})
let angka = Number(prompt("juara : "))

if (angka == 1 ){
    console.log("selamat anda juara utama"); 
} else if (angka == 2 ){
    console.log("selamat anda runner up"); 
} else if (angka == 3 ){
    console.log("selamat anda juara ketiga");
} else {
    console.log("inputan anda salah!!!!!");}  