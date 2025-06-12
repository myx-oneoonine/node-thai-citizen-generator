'use strict';

/**
 * Compatibility test based on issue requirements
 * This test ensures the example code from the issue works correctly
 */

let thaiCitizenId = require('../main.js');

function validateCitizenIDPattern(citizenId) {
    // Basic pattern validation - 13 digits
    return /^\d{13}$/.test(citizenId);
}

let validate = (citizenId) => {
    if (validateCitizenIDPattern(citizenId)) {
        return (
            thaiCitizenId.generateLastNumber(citizenId.substring(0, 12)) ==
            citizenId.substring(12)
        );
    } else return false;
};

const runCompatibilityTests = () => {
    console.log('Running compatibility tests...\n');

    // Test 1: Generated ID should be valid according to the validation function
    const testGeneratedIdCompatibility = () => {
        const citizenId = thaiCitizenId();
        const isValid = validate(citizenId);

        if (!isValid) {
            throw new Error(
                `Generated ID ${citizenId} failed compatibility validation`
            );
        }

        console.log(
            `✓ Generated ID ${citizenId} passes compatibility validation`
        );
    };

    // Test 2: Known valid IDs should pass validation
    const testKnownValidIds = () => {
        const validIds = [
            '1239900124231',
            '1234567890121',
            '1559900050472',
            '8199292747830',
            '3197955418160'
        ];

        validIds.forEach((id) => {
            const isValid = validate(id);
            if (!isValid) {
                throw new Error(`Known valid ID ${id} failed validation`);
            }
            console.log(`✓ Known valid ID ${id} passes validation`);
        });
    };

    // Test 3: Invalid IDs should fail validation
    const testInvalidIds = () => {
        const invalidIds = [
            '1234567890123', // Wrong check digit
            '12345678901', // Too short
            '12345678901234', // Too long
            'abcd567890123', // Contains letters
            '0000000000000' // All zeros (invalid format)
        ];

        invalidIds.forEach((id) => {
            const isValid = validate(id);
            if (isValid) {
                throw new Error(
                    `Invalid ID ${id} incorrectly passed validation`
                );
            }
            console.log(`✓ Invalid ID ${id} correctly failed validation`);
        });
    };

    // Run all compatibility tests
    try {
        testGeneratedIdCompatibility();
        testKnownValidIds();
        testInvalidIds();

        console.log('\n🎉 All compatibility tests passed successfully!');
    } catch (error) {
        console.error('\n❌ Compatibility test failed:', error.message);
        process.exit(1);
    }
};

// Only run tests if not being checked by external process
if (!global.is_checking) {
    runCompatibilityTests();
}

module.exports = { validate, validateCitizenIDPattern };
