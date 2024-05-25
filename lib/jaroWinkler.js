function jaroWinklerDistance(s1, s2) {
    const prefixLength = 4; // Adjust prefix length if needed
    const threshold = 0.7; // Adjust threshold if needed

    const m = s1.length;
    const n = s2.length;
    let commonChars = 0;
    let transpositions = 0;

    for (let i = 0; i < m; i++) {
        const start = Math.max(0, i - prefixLength);
        const end = Math.min(i + prefixLength + 1, n);

        for (let j = start; j < end; j++) {
            if (s1[i] === s2[j]) {
                commonChars++;
                if (i !== j) transpositions++;
                break;
            }
        }
    }

    if (commonChars === 0) return 0;

    const jaro = (commonChars / m + commonChars / n + (commonChars - transpositions / 2) / commonChars) / 3;

    // Jaro-Winkler modification
    let prefixMatch = 0;
    while (prefixMatch < Math.min(4, Math.min(s1.length, s2.length)) && s1[prefixMatch] === s2[prefixMatch]) {
        prefixMatch++;
    }
    const jaroWinkler = jaro + prefixMatch * 0.1 * (1 - jaro);
    
    // Ensure the result is between 0 and 1
    return Math.min(1, jaroWinkler);
}

module.exports = jaroWinklerDistance;
