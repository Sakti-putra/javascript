// Tugas 3 - Javascript Intro & Conditional

// soal 1 ( Latihan Membuat variable dan valuenya )
// Terdapat variable dengan value kosong sebagai berikut:
// let namaLengkap;
//  console.log(namaLengkap)
// isilah value variable 'namaLengkap' dengan nama anda dan pastikan outputnya keluar di terminal.
 
// soal 2 ( Latihan Penggabungan variable )
// Terdapat kumpulan variable dengan data string sebagai berikut
// let word = 'JavaScript';
// let second = 'is';
// let third = 'awesome';

// let outputGabunganVariable;
// console.log(outputGabunganVariable)
// Gabungkanlah agar kata-kata di atas menjadi satu kalimat menggunakan operator '+' . Output:
// JavaScript is awesome

// soal 3 ( Latihan penggabungan variable Menggunakan Template Literals)
// Terdapat kumpulan variable dengan data string sebagai berikut
// let hello = 'Hello ';
// let world = 'World!!';

// let output = hello + world
// console.log(output)

// Ubahlah cara penggabungan variable hello dan world menggunakan template literals, bukan pakai operator '+' lagi. Output :
// Hello World!!
// soal 4 ( Latihan Mengubah tipe data )
// buatlah variabel-variabel seperti di bawah ini
// let panjangPersegiPanjang = "8";
// let lebarPersegiPanjang = "5";
// let kelilingPersegiPanjang = 2 * ( panjangPersegiPanjang + lebarPersegiPanjang );
// console.log(kelilingPersegiPanjang)
// jika ditampilkan, hasilnya masih belum tepat :

// karena tipe data belum diubah maka hasilnya 170, harusnya 26.
// Maka ubahlah tipe data panjangPersegiPanjang  dan lebarPersegiPanjang  ke dalam Integer menggunakan method parseInt()
 
// soal 5 ( Latihan Mengurai Kalimat )
// buatlah variabel-variabel seperti di bawah ini
// let sentences= 'wah javascript itu keren sekali'; 

// let firstWords= sentences.substring(0, 3); 
// let secondWords; // do your own! 
// let thirdWords; // do your own! 
// let fourthWords; // do your own! 
// let fifthWords; // do your own! 

// console.log('Kata Pertama: ' + firstWords); 
// console.log('Kata Kedua: ' + secondWords); 
// console.log('Kata Ketiga: ' + thirdWords); 
// console.log('Kata Keempat: ' + fourthWords); 
// console.log('Kata Kelima: ' + fifthWords);
// selesaikan variabel yang belum diisi dan hasilkan output seperti berikut:
// Kata Pertama: wah
// Kata Kedua: javascript
// Kata Ketiga: itu
// Kata Keempat: keren
// Kata Kelima: sekali
 
// soal 6 (Akses karakter dalam string),
// Terdapat satu kalimat seperti berikut:
// var sentence = "I am going to be React JS Developer";

// var exampleFirstWord = sentence[0] ;
// var exampleSecondWord = sentence[2] + sentence[3]  ;
// var thirdWord; // lakukan sendiri, wajib mengikuti seperti contoh diatas
// var fourthWord; // lakukan sendiri , wajib mengikuti seperti contoh diatas
// var fifthWord; // lakukan sendiri , wajib mengikuti seperti contoh diatas
// var sixthWord; // lakukan sendiri , wajib mengikuti seperti contoh diatas
// var seventhWord; // lakukan sendiri , wajib mengikuti seperti contoh diatas
// var eighthWord; // lakukan sendiri , wajib mengikuti seperti contoh diatas

// console.log('First Word: ' + exampleFirstWord);
// console.log('Second Word: ' + exampleSecondWord);
// console.log('Third Word: ' + thirdWord);
// console.log('Fourth Word: ' + fourthWord);
// console.log('Fifth Word: ' + fifthWord);
// console.log('Sixth Word: ' + sixthWord);
// console.log('Seventh Word: ' + seventhWord);
// console.log('Eighth Word: ' + eighthWord)
// Buat menjadi Output berikut:
// First word: I
// Second word: am
// Third word: going
// Fourth word: to
// Fifth word: be
// Sixth word: React
// Seventh word: JS
// Eighth word: Developer
// soal 7 ( Latihan Mengambil sebuah Kalimat )
// Gunakan metode slice() untuk mengembalikan kata "bananas".
// let txt = "I can eat bananas all day";
// let hasil; //lakukan pengambilan kalimat di variable ini

// console.log(hasil)
// Output :
// "bananas";
// Referensi penggunaan Mehtod Slice() : Klik disini
 
// soal 8 ( membuat kondisi sederhana )
// buatlah variabel seperti di bawah ini
// var nilaiDoe = 50;
// tentukan indeks nilai dari nilaiDoe (tampilkan dengan console.log) dengan kondisi :
// nilai >= 80 indeksnya A
// nilai >= 70 dan nilai < 80 indeksnya B
// nilai >= 60 dan nilai < 70 indeksnya c
// nilai >= 50 dan nilai < 60 indeksnya D
// nilai < 50 indeksnya E
// kerjakan soal ini tanpa menggunakan function(ini materi hari 4)
 
// soal 9 ( conditional tipe tenary operator )
// Terdapat sebuah kondisional seperti dibawah ini :
// let angka = 2
// if(angka === 2){
//   console.log("angka nya 2")
// }else{
//   console.log("bukan angka 2")
// }
// Ubahlah konsep conditional basic diatas menjadi conditional tipe tenary operator ( lihat dimateri ada referensinya )
 
// soal 10 ( conditional tipe Switch Case )
// buatlah variabel seperti di bawah ini
// var traffic_lights = "red";

// Gunakanlah variable diatas sebagai input switch dan pastikan ada 3 case :
// case dengan nama "red" dan mencetak cetak string menggunakan console "berhenti"
// case dengan nama "yellow" dan mencetak cetak string menggunakan console "hati-hati"
// case dengan nama "green" dan mencetak cetak string menggunakan console "berjalan"
// output :
// "berhenti"


// Tugas 4 - Javascript Loop & Array

// soal 1 ( Membuat Looping sederhana )
// Buatlah looping menggunakan for-loop untuk menghasilkan output seperti ini : 

//  soal 2 ( Membuat Looping dengan conditional angka ganjil )
// Buatlah looping menggunakan for-loop  dan conditional untuk menghasilkan output  angka ganjil seperti ini : 

// soal 3 ( Membuat Looping dengan conditional angka genap )
// Buatlah looping menggunakan for-loop  dan conditional untuk menghasilkan output  angka genap seperti ini : 

 
// soal 4 ( Mengakses element array )
// Diberikan array sebagai berikut ini :
// let array1 = [1,2,3,4,5,6]
// Console dan akseslah element array1 dengan index ke 5, output :
// "6"
// soal 5 ( Mengurutkan element array )
// Diberikan array sebagai berikut ini :
// let array2 = [5,2,4,1,3,5]
// Urutkan lah array2 tersebut menggunakan method sort() untuk mengurutkan element arraynya 
 
// output :

// Soal 6 ( Mengeluarkan element array )
// Gunakan perulangan for, Untuk mengeluarkan element pada array ( bukan di index manual ya )
// let array3 = ["selamat", "anda", "melakukan", "perulangan", "array", "dengan", "for"]
// referensi perulangan for untuk array : klik disini
// Soal 7 ( Mengeluarkan element array dan dengan kondisi )
// Gunakan perulangan for, Untuk mengeluarkan element pada array ( bukan di index manual ya )
// let array4 = [1, 2, 3, 4, 5, 6,7, 8, 9, 10]
// dan gunakanlah kondisi untuk mencetak element array hanya berangka genap

// Soal 8 ( menggabungkan element menjadi string )
// note : Gunakanlah method  array join() untuk mengimplementasinya dan disini tidak ada sama sekali menggunakan perulangan ya 
//  buatlah variabel seperti di bawah ini
// let kalimat= ["saya", "sangat", "senang", "belajar", "javascript"]
// lalu tampilkan dengan output seperti di bawah ini dengan menggunakan method join() :
// "saya sangat senang belajar javascript"
// soal 9 ( Menambahkan element array )
// buatlah variabel seperti di bawah ini
// var sayuran=[]
// - perlu di ingat bahwa deklarasi variabel sayuran diatas di mulai dengan array kosong dulu 
// - tambahkanlah data di bawah ini ke variabel sayuran ( gunakanlah method push() untuk menambahkan nilai di belakang elemen terakhir di array ) :
// Kangkung
// Bayam
// Buncis
// Kubis
// Timun
// Seledri
// Tauge
// Output : 



// Tugas 5 - Javascript Function & Object

// Soal 1 ( Membuat Function dengan return String )
// Buatlah function dengan nama cetakFunction()
// /*
//     Tulis code function di sini
// */
// console.log(cetakFunction())
 
// Perlu diperhatikan cetakFunction() itu adalah function, akan tetapi belum ada functionnya, silahkan anda buat terlebih dahulu. Ouput nya nanti :
// "Hallo Nama saya <nama_kamu>"
 
// Soal 2 ( Membuat Function dengan rumus penjumlahan didalamnya)
// Buatlah function dengan nama myFunction()
// /*
//     Tulis code function di sini
// */
 
// let angka1 = 20
// let angka2 = 7
// let output = myFunction(angka1, angka2)
// console.log(output)
 
// Perlu diperhatikan myFunction() itu adalah function, akan tetapi belum ada functionnya, silahkan anda buat terlebih dahulu. Ouput nya nanti :
// "27"
// Soal 3 ( Mengubah dalam bentuk arrow function )
// Terdapat sebuah function sebagai berikut :
 
// function Hello(){
// return "Hello"
// }
 
// Ubahlah function tersebut kedalam bentuk function ES6 ( Arrow Function )
// soal 4 ( Memanggil key dalam sebuah object )
// terdapat object sebagai berikut :
// let obj = {
// nama : "john",
// umur : 22,
// bahasa : "indonesia"
// }
 
// buatlah pemanggilan object dengan key tertentu untuk menghasilkan output seperti ini :
// "indonesia"
 
// soal 5 ( mengubah array menjadi object )
// ubahlah array di bawah ini menjadi object dengan property nama, jenis kelamin, hobi dan tahun lahir (var arrayDaftarPeserta harus di olah menjadi object) 
// note : boleh dengan cara diindex saja dari array ke objectnya
// let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku" , 1992]
// let objDaftarPeserta = {}
// console.log(objDaftarPeserta)
// contoh :
// let objDaftarPeserta = {
// nama : arrayDaftarPeserta[0],
// dan seterusnya...
// }
 
// soal 6( Membuat sebuah array of object dan melakukan filter )
// anda diberikan data-data buah seperti di bawah ini
// 1.nama: Nanas
//   warna: Kuning
//   adaBijinya: false
//   harga: 9000 
// 2.nama: Jeruk
//   warna: Oranye
//   adaBijinya: true
//   harga: 8000
// 3.nama: Semangka
//   warna: Hijau & Merah
//   adaBijinya: true
//   harga: 10000
// 4.nama: Pisang
//   warna: Kuning
//   adaBijinya: false
//   harga: 5000
// uraikan data tersebut menjadi array of object dan munculkan data yang tidak memiliki biji dengan menggunakan method filtter()
// Contoh output soal 6 :

 
// Soal 7 ( Destructuring pada Object )
// Diberikan sebuah objek sebagai berikut:
// let phone = {
//   name: "Galaxy Fold 5",
//   brand: "Samsung",
//   year: 2023
// }
// // kode diatas ini jangan di rubah atau di hapus sama sekali



// /*
// Tulis kode jawaban destructuring di sini
// */


// // kode di bawah ini jangan dirubah atau dihapus
// console.log(name, brand, year)
// tuliskan kode jawaban yang berisi hasil destructuring yang nantinya akan di gunakan dalam console.log, output :
// "Galaxy Fold 5 Samsung 2023"
// soal 8 ( Spred Operator pada Object )
// buatlah variabel-variabel object seperti di bawah ini:

// let dataBukuTambahan= {
//   penulis: "john doe",
//   tahunTerbit: 2020 
// }

// let buku = {
//   nama: "pemograman dasar",
//   jumlahHalaman: 172
// }

// let objOutput = {}

// // kode diatas ini jangan di rubah atau di hapus sama sekali

// /*
//    Tulis kode jawabannya di sini
// */
// // kode di bawah ini jangan dirubah atau dihapus
// console.log(objOutput) 
// Gabungkanlah 2 object tersebut kedalam objOutput dengan spread operator ( ada dimateri ya ) , contoh output soal 6 :

// soal 9 ( Penggunaan Function dan Object )
// Terdapat sebuah arrow function dengan nama functionObject :
 
// let mobil = {
// merk : "bmw",
// color: "red",
// year : 2002
// }
 
// const functionObject = (param) => {
// return param
// }
 
// panggilah dengan cara console functionObject() dan masukan object mobil sebagai argument, output : 

 



