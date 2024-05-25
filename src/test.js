const profanity = require('../main');

profanity.loadProfanities('tr_TR');
let score = profanity.findProfanities('This is a f*ck !',0.7);
console.log(score)


/*
score = levenshteinDistance("badword1","bdwrd")
console.log(score)

score = jaroWinklerDistance("badword1","bdwrd")
console.log(score)

score = smithWaterman("badword1","bdwrd")
console.log(score)
*/