function pasanganTerbesar(num) {
    num = String(num)

    let result = []
    for (let i = 0; i < num.length; i++) {
        if (i === num.length - 1) {
            break;
        } else {
            result.push(Number(num[i] + num[i + 1]))
        }
    }

    for (let i = 0; i < result.length; i++) {
        for (let j = i + 1; j < result.length; j++) {
            if (result[i] < result[j]) {
                var temp = result[i]
                result[i] = result[j]
                result[j] = temp
            }
        }
    }
    return result[0]
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99