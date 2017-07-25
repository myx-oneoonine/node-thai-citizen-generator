"use strict"

let generate = () => {
    let citizenId = ""
    citizenId = citizenId + getRandomInt(1, 9) //1
    // console.log(citizenId)
    citizenId = citizenId + getRandomInt(1, 10) //2
    // console.log(citizenId)
    citizenId = citizenId + getRandomInt(1, 10) //3
    // console.log(citizenId)
    citizenId = citizenId + getRandomInt(1, 10) //4
    // console.log(citizenId)
    citizenId = citizenId + getRandomInt(1, 10) //5
    // console.log(citizenId)
    citizenId = citizenId + getRandomInt(0, 10) //6
    // console.log(citizenId)
    citizenId = citizenId + getRandomInt(0, 10) //7
    // console.log(citizenId)
    citizenId = citizenId + getRandomInt(0, 10) //8
    // console.log(citizenId)
    citizenId = citizenId + getRandomInt(0, 10) //9
    // console.log(citizenId)
    citizenId = citizenId + getRandomInt(0, 10) //10
    // console.log(citizenId)
    citizenId = citizenId + getRandomInt(1, 10) //11
    // console.log(citizenId)
    citizenId = citizenId + getRandomInt(1, 10) //12
    // console.log(citizenId)
    citizenId = citizenId + generateLastNumber(citizenId)
    // console.log(citizenId)
    return citizenId
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let generateLastNumber = (citizenId) => {

    let result = 0
    let multiplied = 13

    Array.from(citizenId.substring(0, 12)).forEach((element) => {
        result += element * multiplied
        multiplied--
    })
// console.log(`1 ${result % 11}`)
    result = 11 - (result % 11)
// console.log(`2 ${result}`)
    result = result >= 10 ? result - 10 : result
// console.log(`3 ${result}`)
    return result
}

module.exports = generate
module.exports.generateLastNumber = generateLastNumber