function pasanganTerbesar(num) {
    let strNum = String(num)
    let arr = []
    for (let i = 0; i < strNum.length; i++) {
        if (i == strNum.length - 1) {
            break;
        } else {
            arr.push(strNum[i] + strNum[i + 1])
        }
    }
    // console.log(arr);

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    // console.log(arr)
    return Number(arr[arr.length - 1])

}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99