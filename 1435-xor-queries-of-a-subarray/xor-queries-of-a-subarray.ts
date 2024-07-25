function xorQueries(arr: number[], queries: number[][]): number[] {
    let n = arr.length;
    let preXOR = new Array(n + 1).fill(0);
    let ans = [];

    for (let i = 0; i < n; i++) {
        preXOR[i + 1] = preXOR[i] ^ arr[i];
    }

    for (let i = 0; i < queries.length; i++) {
        ans.push(preXOR[queries[i][1] + 1] ^ preXOR[queries[i][0]]);
    }

    return ans;
}
