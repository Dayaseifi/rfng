export function fileNameGenerator(fileName: string) {
    if (!fileName.trim()) {
        throw new TypeError('Filename must not be empty or contain only whitespace.');
    }
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hour = String(currentDate.getHours()).padStart(2, '0');
    const minute = String(currentDate.getMinutes()).padStart(2, '0');
    const second = String(currentDate.getSeconds()).padStart(2, '0');
    const randomNum = Math.floor(Math.random() * 1000); // Generate random number between 0 and 999
    const formattedDate = `${year}_${month}_${day}_${hour}_${minute}_${second}_${randomNum}`;
    
    return `${formattedDate}_${fileName}`;
}
