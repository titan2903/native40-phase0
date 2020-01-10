function tentukanDeretAritmatika(arr) {
    let selisihDeret = arr[1] - arr[0];
    var isDeretArtimatika = true;
    for (let i = 0; i < arr.length - 1; i++) {
        let deretSementara = arr[i + 1] - arr[i]
        if (deretSementara !== selisihDeret) {
            isDeretArtimatika = false
        }
    }
    return isDeretArtimatika
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false