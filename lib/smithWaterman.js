// lib/smith-waterman.js
function smithWaterman(s1, s2) {
    const matchScore = 2;
    const mismatchPenalty = -1;
    const gapPenalty = -1;

    const m = s1.length;
    const n = s2.length;
    const score = Array.from(Array(m + 1), () => Array(n + 1).fill(0));

    let maxScore = 0;

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            const match = score[i - 1][j - 1] + (s1[i - 1] === s2[j - 1] ? matchScore : mismatchPenalty);
            const deleteGap = score[i - 1][j] + gapPenalty;
            const insertGap = score[i][j - 1] + gapPenalty;
            score[i][j] = Math.max(0, match, deleteGap, insertGap);
            maxScore = Math.max(maxScore, score[i][j]);
        }
    }

    // Normalize the maxScore to be between 0 and 1
    const normalizedScore = maxScore / (Math.max(m, n) * Math.max(matchScore, -mismatchPenalty, -gapPenalty));

    return normalizedScore;
}

module.exports = smithWaterman;
