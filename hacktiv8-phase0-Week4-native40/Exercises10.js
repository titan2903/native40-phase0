function changeMe(arr) {
    // you can only write your code here!
    let hasil = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][3] === undefined || arr[i][3] > 2019) {
            hasil = `Invalid Birth Year`
        } else {
            hasil = 2019 - arr[i][3]
        }
        console.log((i + 1) + '. ' + arr[i][0] + ' ' + arr[i][1] + ':');

        let object = {
            firstName: arr[i][0],
            lastName: arr[i][1],
            gender: arr[i][2],
            age: hasil
        }
        console.log(object);
    }
}

// TEST CASES
changeMe([
    ['Christ', 'Evans', 'Male', 1982],
    ['Robert', 'Downey', 'Male']
]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""