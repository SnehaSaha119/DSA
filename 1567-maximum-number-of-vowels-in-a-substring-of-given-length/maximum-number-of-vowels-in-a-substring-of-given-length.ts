function maxVowels(s: string, k: number): number {
    let i = 0;
    let j = 0;
    let count = 0;
    let maxLength = 0;
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    while (j < s.length) {
        if (vowels.has(s[j])) {
            count++;
        }

        if (j - i + 1 > k) {
            if (vowels.has(s[i])) {
                count--;
            }
            i++;
        }

        maxLength = Math.max(maxLength, count);
        j++;
    }

    return maxLength;
}
