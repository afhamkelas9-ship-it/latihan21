const prompt = require("prompt-sync")({sigint :true});
let namaSiswa = prompt("Masukkan nama siswa:");
let ukuranSepatu = prompt("Masukkan ukuran sepatu:");
let rataRapor = prompt('Masukkan rata-rata rapor:');

console.log("Nama Siswa:", namaSiswa);
console.log("Ukuran Sepatu:", ukuranSepatu);
if (rataRapor >= 85.00) {
    console.log("Rata-Rata Rapor:", true);
} else if (rataRapor < 85.00) {
    console.log("Kelulusan:", false);
}