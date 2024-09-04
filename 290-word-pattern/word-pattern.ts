function wordPattern(pattern: string, s: string): boolean {
    let charToWord = new Map();
    let wordToChar = new Map();
    let words = s.split(" ");

    if (words.length !== pattern.length) {
        return false;
    }

    for (let i = 0; i < pattern.length; i++) {
        let char = pattern[i];
        let word = words[i];

        if (!charToWord.has(char)) {
            charToWord.set(char, word);
        }

        if (!wordToChar.has(word)) {
            wordToChar.set(word, char);
        }

        if (charToWord.get(char) !== word || wordToChar.get(word) !== char) {
            return false;
        }
    }

    return true;
}
