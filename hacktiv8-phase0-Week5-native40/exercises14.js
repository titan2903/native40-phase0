/*
Problem
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi

NOTE:
Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces) diletakkan di passwordGenerator dan return password-nya dari function ini juga
*/


function changeVocals(str) {
    var temp = '';
    var vocal = 'aAiIuUeEoO';
    var konsonan = 'bBjJvVfFpP';

    for (let i = 0; i < str.length; i++) {
        if (vocal.indexOf(str[i]) > -1) {
            temp += konsonan[vocal.indexOf(str[i])]
        } else if (vocal.indexOf(str[i]) < 0) {
            temp += str[i]
        }
    }
    return temp
}

function reverseWord(str) {
    var result = '';

    for (var i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result
}

function setLowerUpperCase(str) {
    var result = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i].toLowerCase()) {
            result += str[i].toUpperCase()
        } else if (str[i] == str[i].toUpperCase()) {
            result += str[i].toLowerCase()
        }
    }
    return result
}

function removeSpaces(str) {
    var result = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] != ' ') {
            result += str[i]
        }
    }
    return result
}

function passwordGenerator(name) {
    if (name.length <= 5) {
        return `Minimal karakter yang diinputkan adalah 5 karakter`
    }

    var recChangeVocals = changeVocals(name);
    // console.log(recChangeVocals);



    var recReverseWord = reverseWord(recChangeVocals);
    // console.log(recReverseWord);

    var recSetLowerUpperCase = setLowerUpperCase(recReverseWord);
    // console.log(recSetLowerUpperCase);


    var recRemoveSpaces = removeSpaces(recSetLowerUpperCase)


    return recRemoveSpaces
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'