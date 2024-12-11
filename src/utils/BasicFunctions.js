export function formatToSocialMediaNumber(num) {
    if (num < 1000) return num.toString(); // Numbers less than 1000 are unchanged

    const suffixes = ['', 'K', 'M', 'B', 'T']; // Thousand, Million, Billion, Trillion
    let suffixIndex = 0;

    while (num >= 1000 && suffixIndex < suffixes.length - 1) {
        num /= 1000;
        suffixIndex++;
    }


    const formattedNum = num % 1 === 0 ? num : num.toFixed(1);

    return `${formattedNum}${suffixes[suffixIndex]}`;
}