function findLongestWord(string = "") {
    // Write code under this line
    const wordsList = string.split(' ');
    console.log(wordsList);
    let longestWord = wordsList[0];
    console.log(longestWord);
    for (let i = 1; i < wordsList.length; i += 1) {
        let item = wordsList[i];
        console.log(item);

        if (longestWord.length < item.length) {
            longestWord = item;
        }
    }
    return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));