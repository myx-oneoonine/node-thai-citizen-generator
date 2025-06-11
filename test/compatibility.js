"use strict"

let thaiCitizenId = require('../core.js')

// Implementation of validateCitizenIDPattern function for compatibility test
function validateCitizenIDPattern(citizenId) {
    // Check if it's a 13-digit string
    if (typeof citizenId !== 'string' || citizenId.length !== 13) {
        return false;
    }
    
    // Check if all characters are digits
    return /^\d{13}$/.test(citizenId);
}

let validate = (citizenId) => {
    if (validateCitizenIDPattern(citizenId)) {
        return thaiCitizenId.generateLastNumber(citizenId.substring(0, 12)) == citizenId.substring(12)
    }
    else
        return false
}

// Test the compatibility code
console.log('Running compatibility test...')

// Generate a valid citizen ID using the library
let generatedId = thaiCitizenId()
console.log('Generated ID:', generatedId)

// Test the validate function with the generated ID
let isValid = validate(generatedId)
console.log('Validation result:', isValid)

if (!isValid) {
    console.error('FAIL: Generated ID should be valid')
    process.exit(1)
}

// Test with known valid IDs from the test file
let testIds = [
    '1239900124231',
    '1234567890121', 
    '1559900050472',
    '8199292747830',
    '3197955418160'
]

for (let testId of testIds) {
    let result = validate(testId)
    console.log(`Testing ${testId}: ${result}`)
    if (!result) {
        console.error(`FAIL: ${testId} should be valid`)
        process.exit(1)
    }
}

// Test with invalid IDs
let invalidIds = [
    '123',  // too short
    'abcd567890123', // contains letters
    '12345678901234', // too long
    '1234567890120' // wrong checksum
]

for (let invalidId of invalidIds) {
    let result = validate(invalidId)
    console.log(`Testing invalid ${invalidId}: ${result}`)
    if (result) {
        console.error(`FAIL: ${invalidId} should be invalid`)
        process.exit(1)
    }
}

console.log('Compatibility test PASSED!')