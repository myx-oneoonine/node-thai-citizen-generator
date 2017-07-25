"use strict"

var thGen = require('../generator/core.js')
let assert = require('assert')

// console.log(thGen())
// console.log(thGen.generateLastNumber('319795541816'))


if (!global.is_checking) {

    assert.equal(thGen().length, 13, "generate all number")
    assert.equal(thGen.generateLastNumber('123990012423'), '1', "generateLastNumber of 123990012423 is 1")
    assert.equal(thGen.generateLastNumber('123456789012'), '1', "generateLastNumber of 123456789012 is 1")
    assert.equal(thGen.generateLastNumber('155990005047'), '2', "generateLastNumber of 155990005047 is 2")
    assert.equal(thGen.generateLastNumber('819929274783'), '0', "generateLastNumber of 819929274783 is 0")
    assert.equal(thGen.generateLastNumber('319795541816'), '0', "generateLastNumber of 319795541816 is 0")

    // assert.equal(thGen.generateLastNumber('123990012423'), '1', "test 2")
    // assert.equal(thaiCitizenValidator('1239900124231'), true, "1. best case 01")

    console.log('Passed')
}