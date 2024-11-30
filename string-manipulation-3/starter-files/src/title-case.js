/* exported titleCase */
function titleCase(title) {
  const smallWords = [
    'and',
    'or',
    'nor',
    'but',
    'a',
    'an',
    'the',
    'as',
    'at',
    'by',
    'for',
    'in',
    'of',
    'on',
    'per',
    'to',
  ];
  const titleArray = title.toLowerCase().split(' ');
  const newTitleArray = [];
  for (let i = 0; i < titleArray.length; i++) {
    let tempWord = titleArray[i].replace(/\W/g, '');
    if (tempWord === 'javascript') {
      newTitleArray.push('JavaScript' + titleArray[i].slice(10));
    } else if (tempWord === 'api') {
      newTitleArray.push('API');
    } else {
      let isSmallWord = false;
      for (let j = 0; j < smallWords.length; j++) {
        if (smallWords[j] === tempWord) {
          isSmallWord = true;
        }
      }
      let hyphenated = false;
      for (const char of titleArray[i]) {
        if (char === '-') {
          hyphenated = true;
        }
      }
      if (
        isSmallWord === true &&
        i !== 0 &&
        titleArray[i - 1][titleArray[i - 1].length - 1] !== ':'
      ) {
        newTitleArray.push(titleArray[i].toLowerCase());
      } else if (hyphenated === true) {
        const tempArray = titleArray[i].split('-');
        newTitleArray.push(
          tempArray[0][0].toUpperCase() +
            tempArray[0].slice(1).toLowerCase() +
            '-' +
            tempArray[1][0].toUpperCase() +
            tempArray[1].slice(1).toLowerCase()
        );
      } else {
        newTitleArray.push(
          titleArray[i][0].toUpperCase() + titleArray[i].slice(1).toLowerCase()
        );
      }
    }
  }
  return newTitleArray.join(' ');
}
