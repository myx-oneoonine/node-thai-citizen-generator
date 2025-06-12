/**
 * Thai Citizen ID Generator
 * Generates valid Thai citizen identification numbers
 */

/**
 * Generates a random integer between min (inclusive) and max (exclusive)
 * @param min - Minimum value (inclusive)
 * @param max - Maximum value (exclusive)
 * @returns Random integer
 */
function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Generates the check digit (last digit) for a 12-digit Thai citizen ID
 * @param citizenId - 12-digit citizen ID string
 * @returns Check digit (0-9)
 */
function generateLastNumber(citizenId: string): number {
    let result = 0;
    let multiplied = 13;

    Array.from(citizenId.substring(0, 12)).forEach((element) => {
        result += parseInt(element, 10) * multiplied;
        multiplied--;
    });

    result = 11 - (result % 11);
    result = result >= 10 ? result - 10 : result;

    return result;
}

/**
 * Generates a complete 13-digit Thai citizen ID
 * @returns 13-digit citizen ID string
 */
function generate(): string {
    let citizenId = '';
    citizenId = citizenId + getRandomInt(1, 9); // 1st digit: 1-8
    citizenId = citizenId + getRandomInt(1, 10); // 2nd digit: 1-9
    citizenId = citizenId + getRandomInt(1, 10); // 3rd digit: 1-9
    citizenId = citizenId + getRandomInt(1, 10); // 4th digit: 1-9
    citizenId = citizenId + getRandomInt(1, 10); // 5th digit: 1-9
    citizenId = citizenId + getRandomInt(0, 10); // 6th digit: 0-9
    citizenId = citizenId + getRandomInt(0, 10); // 7th digit: 0-9
    citizenId = citizenId + getRandomInt(0, 10); // 8th digit: 0-9
    citizenId = citizenId + getRandomInt(0, 10); // 9th digit: 0-9
    citizenId = citizenId + getRandomInt(0, 10); // 10th digit: 0-9
    citizenId = citizenId + getRandomInt(1, 10); // 11th digit: 1-9
    citizenId = citizenId + getRandomInt(1, 10); // 12th digit: 1-9
    citizenId = citizenId + generateLastNumber(citizenId); // 13th digit: check digit

    return citizenId;
}

// Export using CommonJS pattern for backward compatibility
module.exports = generate;
module.exports.generateLastNumber = generateLastNumber;

// TypeScript support
// eslint-disable-next-line no-redeclare
declare namespace generate {
    export { generateLastNumber };
}

export = generate;