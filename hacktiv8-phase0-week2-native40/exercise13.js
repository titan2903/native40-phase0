function xo(str) {
    // you can only write your code here!
    let tempX = ''
    let tempO = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'x') {
            tempX += str[i]
        } else {
            tempO += str[i]
        }
    }
    // console.log(tempX)
    // console.log(tempO)

    return (tempO.length === tempX.length) ? true : false
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true