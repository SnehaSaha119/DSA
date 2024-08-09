                            
// function divide(dividend, divisor) {
//     if(dividend === divisor) {
//         return 1;
//     }

//     let sign = true;

//     if(dividend >= 0 && divisor < 0) {
//         sign = false;
//     }else if(dividend <= 0 && divisor > 0) {
//         sign = false;
//     }

//     let n = Math.abs(dividend);
//     let d = Math.abs(divisor);
//     divisor = Math.abs(divisor);
//     let quotient = 0;
//     while(n >= d) {
//         let cnt = 0;
//         while(n >= (d << (cnt+1))) {
//             cnt += 1;
//         }
//         quotient += 1 << cnt;
//         n -= (d << cnt);
//     }

//     if(quotient === (1 << 31) && sign) {
//         return Math.pow(2, 31) - 1; // INT_MAX
//     }
//     if(quotient === (1 << 31) && !sign) {
//         return Math.pow(-2, 31); // INT_MIN
//     }
    
//     return sign ? quotient : -quotient;
// }


function divide(dividend: number, divisor: number): number {
    if (dividend === -2147483648 && divisor === -1) {
        return 2147483647;
    }
    
    let negative = 2;
    if (dividend > 0) {
        negative--;
        dividend = -dividend;
    }
    if (divisor > 0) {
        negative--;
        divisor = -divisor;
    }

    let result = dividePositive(dividend, divisor);
    return negative === 1 ? -result : result;
};

function dividePositive(dividend: number, divisor: number): number {
    if (dividend > divisor) {
        return 0;
    }

    let count = 1;
    let tb = divisor;
    while (tb >= dividend - tb) {
        tb += tb;
        count += count;
    }

    return count + dividePositive(dividend - tb, divisor);
};
