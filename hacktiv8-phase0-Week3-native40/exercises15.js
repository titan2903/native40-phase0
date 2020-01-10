function groupAnimals(animals) {
    for (let i = 0; i < animals.length; i++) {
        for (let j = i + 1; j < animals.length; j++) {
            if (animals[i] > animals[j]) {
                let temp = animals[i]
                animals[i] = animals[j]
                animals[j] = temp
            }
        }
    }
    // return animals
    // console.log(animals);
    // console.log(`>>>>>>>>>>>>>>>>>>>>`);
    let result = [];
    for (let i = 0; i < animals.length; i++) {
        // console.log(animals[0][0]);
        let found = false
        for (let j = 0; j < result.length; j++) {
            if (result[j][0][0] == animals[i][0]) {
                result[j].push(animals[i])
                found = true
            }
        }
        if (!found) {
            result.push([animals[i]])
        }
    }
    return result


    // let temp = []
    // let result = []
    // for (let i = 0; i < animals.length; i++) {
    //     if (temp.length === 0) {
    //         temp.push(animals[i])
    //     } else if (animals[i][0] === animals[i - 1][0]) {
    //         temp.push(animals[i])
    //     } else if (animals[i][0] !== animals[i - 1][0]) {
    //         result.push(temp)
    //         temp = []
    //         temp.push(animals[i])
    //     }
    // }
    // // console.log(temp);
    // // result.push(temp)
    // // console.log(result);
    // result.push(temp)
    // return result
}
// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]