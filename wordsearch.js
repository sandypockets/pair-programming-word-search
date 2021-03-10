const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return undefined;
  }
  const newArray = [];
  for (let i = 0; i < letters.length; i++) {
    newArray.push([]);
    for (let j = 0; j <= letters[i].length; j++) {
      newArray[i].push(letters[j][i]);
    }
  }

  const verticalJoin = newArray.map(ls => ls.join(''));
  for (let l of verticalJoin) {
    if (l.includes(word));
    return true;
  }

  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  return false;
};

wordSearch(letters);
module.exports = wordSearch;