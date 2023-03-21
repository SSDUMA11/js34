function uniqueWords(str) {
  let words = str.split(';');
  let wordsdMap = new Map();
  
  words.forEach(word => {
    wordsdMap.has(word.trim()) ? null : wordsdMap.set(word.trim(), true);
  });

  return wordsdMap.keys();
}
console.log(uniqueWords('cherry; orange; cherry; banana'));