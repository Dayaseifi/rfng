/**
 * Generates a unique file name with a timestamp prefix.
 * @param fileName The base file name.
 * @param shortYear If true, the function will use a two-digit representation for the year.
 * @returns A string representing the generated file name.
 * @throws {TypeError} If the provided file name is empty or contains only whitespace.
 */
function fileNameGenerator(fileName: string, shortYear: boolean = true): string {
    // Check if fileName is empty or contains only whitespace
    if (!fileName.trim()) {
        throw new TypeError('Filename must not be empty or contain only whitespace.');
    }

    // Generate current timestamp
    const currentDate = new Date();
    const year = shortYear ? String(currentDate.getFullYear()).slice(-2) : currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hour = String(currentDate.getHours()).padStart(2, '0');
    const minute = String(currentDate.getMinutes()).padStart(2, '0');
    const second = String(currentDate.getSeconds()).padStart(2, '0');

    // Generate random number between 0 and 999
    const randomNum = Math.floor(Math.random() * 1000);

    // Format date and time components
    const formattedDate = `${year}_${month}_${day}_${hour}_${minute}_${second}_${randomNum}`;

    // Concatenate formatted date and file name
    return `${formattedDate}_${fileName}`;
}
