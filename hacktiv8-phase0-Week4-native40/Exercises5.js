function ubahHuruf(kata) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let urutan = 0
    let str = ''
    for (let i = 0; i < kata.length; i++) {
        urutan = alphabet.indexOf(kata[i])
        str += alphabet[urutan + 1]
    }
    return str
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu