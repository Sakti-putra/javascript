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

// soal 6

var sentence = "I am going to be React JS Developer";

var exampleFirstWord = sentence[0] ;
var exampleSecondWord = sentence[2] + sentence[3]  ;
var thirdWord = sentence[5] + sentence[6] + sentence[7] + sentence[8] + sentence[9] + sentence[10];
var fourthWord = sentence[11] + sentence[12];
var fifthWord = sentence[14] + sentence[15];
var sixthWord = sentence[17] + sentence[18] + sentence[19] + sentence[20] + sentence[21]
var seventhWord = sentence[23] + sentence[24]
var eighthWord = sentence[26] + sentence[27] + sentence[28] + sentence[29] + sentence[30] + sentence[31] + sentence[32] + sentence[33] + sentence[34]

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + exampleSecondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);
console.log('Sixth Word: ' + sixthWord);
console.log('Seventh Word: ' + seventhWord);
console.log('Eighth Word: ' + eighthWord)

// soal 7

let txt = "I can eat bananas all day";
let hasil = txt.slice(10, 18);

console.log(hasil);

// soal 8

let nilaiDoe = 50;

if ( nilaiDoe >= 80){
    console.log("Nilai A");
}else if (nilaiDoe <80 && nilaiDoe >70 ){
    console.log("Nilai B")
}else if(nilaiDoe >60 && nilaiDoe <70){
    console.log("Nilai C")
}else if(nilaiDoe <60 && nilaiDoe >50){
    console.log("Nilai D")
}else {
    console.log ("Nilai E")
}

// soal 9

let angka = 2;
let jenis
jenis = angka==2 ? "Angkanya 2" : "Angkanya bukan 2";
console.log (jenis);

// soal 10
let traffic_lights = "yellow";
let says

switch (traffic_lights) {
    case "red":
        says = "berhenti";
        break;
    case "yellow":
        says = "Hati -Hati";
        break;
    default:
       says = "Berjalan"
        break;
}

console.log (says);
