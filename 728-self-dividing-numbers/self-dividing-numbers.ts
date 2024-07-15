function selfDividingNumbers(left: number, right: number): number[] {
    let ans = [];
    for(let i=left;i<=right;i++){
        let n = i;
        let flag = true;

        while(n!=0){
            let a = n%10;
            if(i%a!=0){
                flag = false;
                break;
            }
            n = Math.floor(n / 10);
        }

        if(flag) ans.push(i);

    }

    return ans;
    
    
};