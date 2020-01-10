function balikString(words) {
    let str = ''
    let arr = []
    for (let i = 0; i < words.length; i++) {
        if (words[i] !== ' ') {
            str += words[i]
        } else if (words[i] === ' ') {
            arr.push(str)
            str = ''
        }
    }
    arr.push(str)

    let str1 = ''
    let arr2 = []
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = arr[i].length - 1; j >= 0; j--) {
            str1 += arr[i][j]
        }
        arr2.push(str1)
        str1 = ''
    }
    // console.log(arr2)

    let result = ''
    for (let i = 0; i < arr2.length; i++) {
        if (i === arr2.length - 1) {
            result += arr2[i]
        } else {
            result += arr2[i] + ' '
        }
    }
    return result
}

console.log(balikString("hello world!"), "!dlrow olleh")