function levenshteinDistance(s1, s2) {
    // Get the lengths of the two strings
    const m = s1.length;
    const n = s2.length;

    // Create a 2D array to store the dynamic programming values
    const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));

    // Fill in the DP array
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            // If one string is empty, the cost is the length of the other string
            if (i === 0) {
                dp[i][j] = j;
            } else if (j === 0) {
                dp[i][j] = i;
            } else if (s1[i - 1] === s2[j - 1]) {
                // If the characters are the same, no additional cost
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                // If characters are different, add 1 to the minimum of the adjacent cells
                dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
            }
        }
    }

    // Return the bottom-right cell of the DP array, which contains the Levenshtein distance
    // Normalize the distance to a value between 0 and 1
    return 1 - (dp[m][n] / Math.max(m, n));
}

module.exports = levenshteinDistance;
