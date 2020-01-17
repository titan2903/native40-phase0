function digitPerkalianMinimum(angka) {
    let arr = []
    let str = ''
    for (let i = 0; i <= angka; i++) {
        if (angka % i === 0) {
            str += i
            str += angka / i
            arr.push(str)
        }
        str = ''
    }
    // console.log(arr);

    var result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(Number(arr[i]))
    }
    // console.log(result);

    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result.length; j++) {
            if (result[i] < result[j]) {
                var temp = result[i]
                result[i] = result[j]
                result[j] = temp
            }
        }
    }

    return String(result[0]).length
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2