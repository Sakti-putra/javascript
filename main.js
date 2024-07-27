// Tugas 3 

// soal 1
let namalengkap = 'Sakti'
console.log (namalengkap);

// soal 2
let word = 'JavaScript';
let second = 'is';
let third = 'awesome';

let outputGabunganVariable;
console.log(word + ' ' + second + ' ' + third)

//  soal 3

let hello = 'Hello ';
let world = 'World!!';

let output = hello + world
console.log(output)
// p
// soal 4

let panjangPersegiPanjang = "8";
let lebarPersegiPanjang = "5";

let a = parseInt(panjangPersegiPanjang);
let b = parseInt(lebarPersegiPanjang)

let kelilingPersegiPanjang = 2 * ( a + b );
console.log(kelilingPersegiPanjang)

// soal 5

let sentences= 'wah javascript itu keren sekali'; 

let firstWords= sentences.substring(0, 3); 
let secondWords= sentences.substring(4, 14); 
let thirdWords= sentences.substring(15 ,18) 
let fourthWords= sentences.substring(19, 25) 
let fifthWords= sentences.substring(25)

console.log('Kata Pertama: ' + firstWords); 
console.log('Kata Kedua: ' + secondWords); 
console.log('Kata Ketiga: ' + thirdWords); 
console.log('Kata Keempat: ' + fourthWords); 
console.log('Kata Kelima: ' + fifthWords);