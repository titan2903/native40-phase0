// 1. Melakukan Looping Menggunakan While 
console.log('LOOPING PERTAMA');
var loopingPertama = 0;
while (loopingPertama < 20) {
    loopingPertama += 2;
    console.log(loopingPertama + ' - I love coding');
}

console.log('LOOPING KEDUA');
var loopingKedua = 22
while (loopingKedua > 2) {
    loopingKedua -= 2;
    console.log(loopingKedua + ' - I will become fullstack developer')
}

// 2. Melakukan Looping Menggunakan For
console.log('LOOPING PERTAMA');
for (var loopingPertama = 1; loopingPertama <= 20; loopingPertama++) {
    console.log(loopingPertama + ' - I love coding');
}

console.log('LOOPING KEDUA');
for (var loopingKedua = 20; loopingKedua >= 1; loopingKedua--) {
    console.log(loopingKedua + ' - I will become fullstack developer');
}

// 3. Angka Ganjil dan Genap
for (var counter = 1; counter <= 100; counter++) {
    console.log(`counter sekarang = ${counter}`);
    if (counter % 2 == 0) {
        console.log('GENAP');
    } else if (counter % 2 == 1) {
        console.log('GANJIL');
    }
}

for (var counter = 1; counter <= 100; counter += 2) {
    console.log(`counter sekarang = ${counter}`)
    if (counter % 3 == 0) {
        console.log(`${counter} Kelipatan 3`)
    } else {
        console.log('')
    }
}

for (var counter = 1; counter <= 100; counter += 5) {
    console.log(`counter sekarang = ${counter}`)
    if (counter % 6 == 0) {
        console.log(`${counter} Kelipatan 6`)
    } else {
        console.log('')
    }
}

for (var counter = 1; counter <= 100; counter += 9) {
    console.log(`counter sekarang = ${counter}`)
    if (counter % 10 == 0) {
        console.log(`${counter} Kelipatan 10`)
    } else {
        console.log('')
    }
}