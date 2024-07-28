// soal 1 

function cetakFunction() {
    return "Hallo Nama saya <nama_kamu>"
}
console.log(cetakFunction());

// soal 2

function myFunction(angka1,angka2) {
    return angka1+ angka2;
}    
let angka1 = 20
let angka2 = 7
let output = myFunction(angka1 , angka2)
console.log(output)

// soal 3

let helo = () => {
    return "Hello"
}

console.log(helo())

// soal 4

let obj = {
    nama : "john",
    umur : 22,
    bahasa : "indonesia"
}

console.log (obj.bahasa);

// soal 5
let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku" , 1992]
let objDaftarPeserta = {
    nama: arrayDaftarPeserta[0],
    jenisKelamin: arrayDaftarPeserta[1],
    hobi: arrayDaftarPeserta[2],
    tahun: arrayDaftarPeserta[3]

}
console.log(objDaftarPeserta)

// soal 6

let buah =[
    {
        nama: "Nanas",
        warna: "Kuning",
        adaBijinya: false,
        harga: 9000
    },
    {
        nama: "Jeruk",
        warna: "Oranye",
        adaBijinya: true,
        harga: 8000
    },
    {
        nama: "Semangka",
        warna: "Hijau & Merah",
        adaBijinya: true,
        harga: 10000
    },
    {
        nama: "Pisang",
        warna: "Kuning",
        adaBijinya: false,
        harga: 5000
    },
];

let tanpaBiji = buah.filter( buah => buah.adaBijinya === false);
console.log (tanpaBiji);

// soal 7

let phone = {
    name: "Galaxy Fold 5",
    brand: "Samsung",
    year: 2023
}

let {name, brand, year} = phone;

console.log(name,brand,year)

// soal 8

let mobil = {
    merk: "bmw",
    color: "red",
    year: 2002
}
  
const functionObject = (param) => {
    return param;
}
  
console.log(functionObject(mobil));
  