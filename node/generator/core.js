"use strict"

let generate = () => {
    return '1239900124231'
}

let generateLastNumber = (citizenId) => {

    let result = 0
    let multiplied = 13

    Array.from(citizenId.substring(0, 12)).forEach((element) => {
        result += element * multiplied
        multiplied--
    })

    result = 11 - result % 11
    result = result === 11 ? 1 : result
    return result
}

// module.exports = {
//     generate: generate,
//     generateLastNumber: generateLastNumber
// }




module.exports = generate
module.exports.generateLastNumber = generateLastNumber