// 1. Menyusun Barisan Bintang
console.log('Soal 1');
var rows1 = 5;
for (var i = 5; i > 0; i--) {
    console.log('*')
}

// 2. Menyusun Barisan Bintang Dengan Nested Looping
console.log('soal 2');
var rows2 = 5;
for (var i = 0; i < rows2; i++) {
    var gabungBintang = "";
    for (var j = 0; j < rows2; j++) {
        gabungBintang += '*';
    }
    console.log(gabungBintang);
}

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
console.log('soal 3');
var rows3 = 5;
for (var i = 1; i <= rows3; i++) {
    var gabungBintang = "";
    for (var j = 0; j < i; j++) {
        gabungBintang += '*';
    }
    console.log(gabungBintang);
}