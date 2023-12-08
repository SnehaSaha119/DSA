function removeOuterParentheses(s: string): string {

    let left = 0
    let right = 0
    let i = 0
    let j = i
    let str = ''

    while(i<s.length){
        if(s[i]=='(') left++
        else right++

        if(left==right){
            str = str + s.substring(j+1,i)
            j = i+1
            left = 0
            right = 0
        }

        i++
    }

    return str
    
};