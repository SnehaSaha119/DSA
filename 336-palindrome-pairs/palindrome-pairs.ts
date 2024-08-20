function palindromePairs(words: string[]): number[][] {
    const result: number[][] = [];
    const reverseMap = new Map<string, number>();

    // Build reverseMap with reverse of each word as the key
    for (let i = 0; i < words.length; i++) {
        reverseMap.set(words[i].split('').reverse().join(''), i);
    }

    // Check each word for possible palindrome pairs
    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        for (let j = 0; j <= word.length; j++) {
            const left = word.substring(0, j);
            const right = word.substring(j);

            // Check if left is palindrome and if there is a reverse of right in reverseMap
            if (isPalindrome(left) && reverseMap.has(right) && reverseMap.get(right)! !== i) {
                result.push([reverseMap.get(right)!, i]);
            }

            // Check if right is palindrome and if there is a reverse of left in reverseMap
            // Exclude the case where j == 0 to avoid duplicates
            if (j !== word.length && isPalindrome(right) && reverseMap.has(left) && reverseMap.get(left)! !== i) {
                result.push([i, reverseMap.get(left)!]);
            }
        }
    }

    return result;
}

function isPalindrome(s: string): boolean {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}
