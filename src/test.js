const profanity = require('../main');

profanity.loadProfanities('tr_TR');
let score = profanity.findProfanities("merhaba nasılsınız?")
console.log(score)


/*
score = levenshteinDistance("badword1","bdwrd")
console.log(score)

score = jaroWinklerDistance("badword1","bdwrd")
console.log(score)

score = smithWaterman("badword1","bdwrd")
console.log(score)
*/