'use strict'

let generate = () => {
    let citizenId = ''
    citizenId = citizenId + getRandomInt(1, 9) //1
    citizenId = citizenId + getRandomInt(1, 10) //2
    citizenId = citizenId + getRandomInt(1, 10) //3
    citizenId = citizenId + getRandomInt(1, 10) //4
    citizenId = citizenId + getRandomInt(1, 10) //5
    citizenId = citizenId + getRandomInt(0, 10) //6
    citizenId = citizenId + getRandomInt(0, 10) //7
    citizenId = citizenId + getRandomInt(0, 10) //8
    citizenId = citizenId + getRandomInt(0, 10) //9
    citizenId = citizenId + getRandomInt(0, 10) //10
    citizenId = citizenId + getRandomInt(1, 10) //11
    citizenId = citizenId + getRandomInt(1, 10) //12
    citizenId = citizenId + generateLastNumber(citizenId)

    return citizenId
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

let generateLastNumber = (citizenId) => {
    let result = 0
    let multiplied = 13

    Array.from(citizenId.substring(0, 12)).forEach((element) => {
        result += element * multiplied
        multiplied--
    })

    result = 11 - (result % 11)
    result = result >= 10 ? result - 10 : result

    return result
}

module.exports = generate
module.exports.generateLastNumber = generateLastNumber
