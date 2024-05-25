const fs = require('fs');

const levenshteinDistance = require('../lib/levenshteinDistance');
const jaroWinklerDistance = require('../lib/jaroWinkler');
const smithWaterman = require('../lib/smithWaterman');

let PROFANITIES;

function loadProfanities(filePath) {
    try {
        const dataPath = path.join(__dirname, 'node_modules', 'unswearify', 'data', `${filePath}.json`);
        const profanitiesData = fs.readFileSync(dataPath, 'utf8');
        PROFANITIES = new Set(JSON.parse(profanitiesData));
    } catch (error) {
        console.error('Error loading profanities from file:', error);
    }
}

function loadProfanitiesFromFile(filePath) {
    try {
        const profanitiesData = fs.readFileSync("./data/" + filePath + ".json");
        PROFANITIES = new Set(JSON.parse(profanitiesData));
    } catch (error) {
        console.error('Error loading profanities from file:', error);
        PROFANITIES = new Set(); // Fallback to an empty set if there's an error
    }
}


function addProfanity(word) {
    PROFANITIES.add(word);
}

function isProfanity(word, threshold = 0.7) {
    return getScore(word) >= threshold;
}

function getScore(word) {
    let minDistance = 0;

    for (const profanity of PROFANITIES) {
        let lowercased = profanity.toLowerCase()

        const levdistance = levenshteinDistance(word, lowercased);
        const jarodistance = jaroWinklerDistance(word, lowercased);
        const smithodistance = smithWaterman(word, lowercased);

        let total = smithodistance + levdistance + jarodistance


        minDistance = Math.max(minDistance, total);
    }

    return minDistance / 3;
}

function findProfanities(sentence, threshold = 0.75) {
    const words = sentence.split(/\s+/);
    const profaneWords = [];
    for (const word of words) {
        const score = getScore(word);
        if (score >= threshold) {
            profaneWords.push({ word, score });
        }
    }
    return profaneWords;
}

module.exports = {
    addProfanity,
    isProfanity,
    getScore,
    findProfanities,
    loadProfanities,
    loadProfanitiesFromFile
};
