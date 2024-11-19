function climbStairs(n: number): number {

    // if(n<=2) return n 
    // let first = climbStairs(n-1)
    // let second = climbStairs(n-2)

    // return first + second
    let first=0
    let second=1
    let third;
    for(let i=1;i<=n;i++){
        third=first+second
        first=second
        second=third
    }
    return third
};