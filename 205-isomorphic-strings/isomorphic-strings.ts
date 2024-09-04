function isIsomorphic(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }

    const mmap = new Map<string, string>();

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        if (mmap.has(charS)) {
            if (mmap.get(charS) !== charT) {
                return false;
            }
        } else {
            // Check if any key is already mapped to charT
            if ([...mmap.values()].includes(charT)) {
                return false;
            }
            mmap.set(charS, charT);
        }
    }

    return true;
}

