'use strict';

const thGen = require('../main.js');
const assert = require('assert');

/**
 * Test cases for Thai Citizen ID Generator
 */
const runTests = () => {
    console.log('Running Thai Citizen ID Generator Tests...\n');

    // Test 1: Generated ID should have correct length
    const testGeneratedIdLength = () => {
        const citizenId = thGen();
        assert.strictEqual(
            citizenId.length,
            13,
            'Generated citizen ID should have 13 digits'
        );
        console.log('✓ Generated ID length test passed');
    };

    // Test 2: Check digit calculation tests
    const testCheckDigitCalculation = () => {
        const testCases = [
            {
                input: '123990012423',
                expected: '1',
                description: 'Check digit for 123990012423'
            },
            {
                input: '123456789012',
                expected: '1',
                description: 'Check digit for 123456789012'
            },
            {
                input: '155990005047',
                expected: '2',
                description: 'Check digit for 155990005047'
            },
            {
                input: '819929274783',
                expected: '0',
                description: 'Check digit for 819929274783'
            },
            {
                input: '319795541816',
                expected: '0',
                description: 'Check digit for 319795541816'
            }
        ];

        testCases.forEach(({ input, expected, description }) => {
            const result = thGen.generateLastNumber(input);
            assert.strictEqual(result.toString(), expected, description);
            console.log(`✓ ${description}: ${result}`);
        });
    };

    // Test 3: Generated ID should be valid (check digit calculation)
    const testGeneratedIdValidity = () => {
        const citizenId = thGen();
        const first12Digits = citizenId.substring(0, 12);
        const calculatedCheckDigit = thGen.generateLastNumber(first12Digits);
        const actualCheckDigit = citizenId.substring(12, 13);

        assert.strictEqual(
            actualCheckDigit,
            calculatedCheckDigit.toString(),
            'Generated ID should have correct check digit'
        );
        console.log('✓ Generated ID validity test passed');
    };

    // Run all tests
    try {
        testGeneratedIdLength();
        testCheckDigitCalculation();
        testGeneratedIdValidity();

        console.log('\n🎉 All tests passed successfully!');
    } catch (error) {
        console.error('\n❌ Test failed:', error.message);
        process.exit(1);
    }
};

// Only run tests if not being checked by external process
if (!global.is_checking) {
    runTests();
}
