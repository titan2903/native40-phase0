function balikKata(kata) {
    let str = ''
    let arr = []
    for (let i = 0; i < kata.length; i++) {
        if (kata[i] !== ' ') {
            str += kata[i]
        } else if (kata[i] === ' ') {
            arr.push(str)
            str = ''
        }
    }
    arr.push(str)

    var arr2 = []
    var tempStr = '';
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = arr[i].length - 1; j >= 0; j--) {
            tempStr += arr[i][j]
        }
        arr2.push(tempStr)
        tempStr = ''
    }
    // console.log(arr2);

    let output = ''
    for (let k = 0; k < arr2.length; k++) {
        if (k === arr2.length - 1) {
            output += arr2[k]
        } else {
            output += arr2[k] + ' '
        }
    }
    return output
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS