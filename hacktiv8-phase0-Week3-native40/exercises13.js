function targetTerdekat(arr) {
    //     // you can only write your code here
    //     // var counter = 0;
    //     // var isFind = false;
    //     // var posO = '';
    //     // var posX = [];
    //     // var output = '';
    //     // for (var i = 0; i < arr.length; i++) {
    //     //     if (arr[i] == 'o') {
    //     //         posO = i;
    //     //     }
    //     // }
    //     // console.log(posO, '<<<<<<<PosO')

    //     // for (var i = posO; i >= 0; i--) {
    //     //     if (arr[i - 1] == 'x') {
    //     //         counter++;
    //     //         isFind = true;
    //     //         posX.push(['posXLeft', counter]);
    //     //         break;
    //     //     } else {
    //     //         counter++;
    //     //     }
    //     // }
    //     // console.log('LEFT : ', posX)

    //     // counter = 0;
    //     // for (var i = posO; i < arr.length; i++) {
    //     //     if (arr[i + 1] == 'x') {
    //     //         counter++;
    //     //         isFind = true;
    //     //         posX.push(['posXRight', counter]);
    //     //         break;
    //     //     } else {
    //     //         counter++;
    //     //     }
    //     // }
    //     // console.log('RIGHT : ', posX)


    //     // if (isFind == false) {
    //     //     return 0
    //     // }

    //     // if (posX.length == 1) {
    //     //     output = posX[0][1]
    //     // } else if (posX[0][1] < posX[1][1]) {
    //     //     output = posX[0][1]
    //     // } else if (posX[0][1] == posX[1][1]) {
    //     //     output = posX[0][1]
    //     // } else {
    //     //     output = posX[1][1]
    //     // }
    //     // console.log(posX)

    //     // return output

    let arrX = []
    let countO = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'x') {
            arrX.push(i)
        }
    }
    // console.log(arrX);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'o') {
            countO += i
        }
    }

    let result = []
    for (let j = 0; j < arrX.length; j++) {
        result.push(Math.abs(arrX[j] - countO))
    }
    // console.log(num);
    // console.log(result);

    for (let i = 0; i < result.length; i++) {
        for (let j = i + 1; j < result.length; j++) {
            if (result[i] > result[j]) {
                var temp = result[i]
                result[i] = result[j]
                result[j] = temp
            }
        }
    }
    // console.log(result);
    if (result.length === 0) {
        return 0
    }

    return result[0]
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2

// function targetTerdekat(arr) {
//     let temp = []
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             // console.log(arr[i][j]);
//             temp.push(arr[i][j])
//         }
//     }
//     // console.log(temp);
//     let resultX = 0
//     let resultO = 0
//     for (let i = 0; i < temp.length; i++) {
//         if (temp[i] === 'x') resultX += i
//         else if (temp[i] === 'o') resultO += i
//     }
//     return Math.abs(resultX - resultO)
//     // console.log(resultX);
//     // console.log(resultO);


//     // num2 = Number(resultX)

//     // let str = ''
//     // for (let i = 0; i < temp.length; i++) {
//     //     if (temp[i] === 'o') str += i
//     // }
//     // console.log(str);

//     // num = Number(str)
//     // console.log(num2);
//     // return Math.abs(num2 - num)
// }

// console.log(targetTerdekat([
//     [' ', 'x', ' ', ' '],
//     [' ', ' '],
//     [' ', ' ', ' ', 'o']
// ])); // 8