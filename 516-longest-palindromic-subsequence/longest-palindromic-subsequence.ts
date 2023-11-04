function longestPalindromeSubseq(s: string): number {
    //----Brute force
    let i = s.length - 1
    let j = s.length - 1
    let arr = Array.from({length: s.length},()=> new Array(s.length).fill(-1))

    let count = sub(arr,i,j,s,s.split('').reverse().join(''))

    return count
};

function sub(arr,i,j,text1,text2){

    if(i<0 || j<0) return 0

    else if(arr[i][j]!=-1) return arr[i][j]

    else if(text1[i]==text2[j]) return arr[i][j] = 1 + sub(arr,i-1,j-1,text1,text2)

    else if(text1[i]!=text2[j]) return arr[i][j] = 0 + Math.max(sub(arr,i-1,j,text1,text2),sub(arr,i,j-1,text1,text2))

}