RFNG - Random File Name Generator

RFNG (Random File Name Generator) is a lightweight utility function for generating unique file names with timestamps for Node.js and browser environments. This package is particularly useful when you need to generate unique file names for saving files or organizing data.


Installation
You can install the rfng package via npm:
npm install rfng

Usage
const { fileNameGenerator } = require('rfng');

try {
    const fileName = fileNameGenerator('example.txt');
    console.log('Generated file name:', fileName);
} catch (error) {
    console.error('Error:', error.message);
}
Example Output:
Generated file name: 2024_03_15_12_30_45_123_example.txt

API
fileNameGenerator(fileName: string): string
Generates a unique file name by concatenating the current date and time with a random number and the provided file name. Throws a TypeError if the provided file name is empty or contains only whitespace.

fileName (string): The base file name to use.
Returns a string representing the generated file name.

