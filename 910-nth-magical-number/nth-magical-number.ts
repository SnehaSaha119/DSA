function nthMagicalNumber(n: number, a: number, b: number): number {
    //----brute
    // let i=Math.min(a,b);
    // let max = n * i;
    // let pos = -1;

    // for(i;i<=max;i++){
    //     if(i%a==0 || i%b==0) n--;

    //     if(n==0) {
    //         pos = i;
    //         break;
    //     }
    // }

    // return pos;

    //---optimized

    let MOD = Math.pow(10,9) + 7

    let gcdValue = gcd(Math.max(a,b),Math.min(a,b));
    let lcm = (a*b)/gcdValue;

    let l=1;
    let h=n*Math.min(a,b);

    while(l<h){
        let mid = Math.floor((l+h)/2);

        let count = Math.floor(mid/a) + Math.floor(mid/b) - Math.floor(mid/lcm);

        if(count<n) l=mid+1
        else h=mid
    }

    return l%MOD;
    
};

function gcd(a,b){
    if(a==0) return b;
    if(b==0) return a;
    return gcd(b,a%b);
}