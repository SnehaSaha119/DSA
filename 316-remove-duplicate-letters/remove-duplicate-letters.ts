function removeDuplicateLetters(s: string): string {
    let n = s.length;
    let stack = [];
    let exist = new Array(26).fill(false);
    let count = new Array(26).fill(0);

    for (let c of s) count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;

    for (let c of s) {
        count[c.charCodeAt(0) - 'a'.charCodeAt(0)]--;
        if (exist[c.charCodeAt(0) - 'a'.charCodeAt(0)]) continue;

        while (stack.length > 0 && c < stack[stack.length - 1] && count[stack[stack.length - 1].charCodeAt(0) - 'a'.charCodeAt(0)] > 0) {
            let rem = stack.pop();
            exist[rem.charCodeAt(0) - 'a'.charCodeAt(0)] = false;
        }
        exist[c.charCodeAt(0) - 'a'.charCodeAt(0)] = true;
        stack.push(c);
    }

    return stack.join('');    
};