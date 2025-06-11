'use strict'

// Try to require the package as installed dependency, fallback to local file
let thaiCitizenId
try {
    thaiCitizenId = require('thai-citizen-generator')
} catch (e) {
    thaiCitizenId = require('../core.js')
}
let assert = require('assert')

// console.log(thGen())
// console.log(thGen.generateLastNumber('319795541816'))

if (!global.is_checking) {
    assert.equal(thaiCitizenId().length, 13, 'generate all number')
    assert.equal(thaiCitizenId.generateLastNumber('123990012423'), '1', 'generateLastNumber of 123990012423 is 1')
    assert.equal(thaiCitizenId.generateLastNumber('123456789012'), '1', 'generateLastNumber of 123456789012 is 1')
    assert.equal(thaiCitizenId.generateLastNumber('155990005047'), '2', 'generateLastNumber of 155990005047 is 2')
    assert.equal(thaiCitizenId.generateLastNumber('819929274783'), '0', 'generateLastNumber of 819929274783 is 0')
    assert.equal(thaiCitizenId.generateLastNumber('319795541816'), '0', 'generateLastNumber of 319795541816 is 0')

    // assert.equal(thaiCitizenId.generateLastNumber('123990012423'), '1', "test 2")
    // assert.equal(thaiCitizenValidator('1239900124231'), true, "1. best case 01")

    console.log('Passed')
}
