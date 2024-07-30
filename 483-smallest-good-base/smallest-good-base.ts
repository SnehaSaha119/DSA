function smallestGoodBase(n: string): string {

    let num = BigInt(n);

    for (let i = 63; i > 0; i--) {
        let l = 2n;
        let h = num - 1n;

        while (l <= h) {
            let m = (l + h) / 2n;
            let sum = 0n;
            let x = 1n;
            let f = 0;

            for (let j = 0; j <= i; j++) {
                sum += x;
                if (sum >= num) break;

                if (j < i && (num - sum) / m < x) {
                    f = 1;
                    break;
                } else if (j < i) {
                    x *= m;
                }
            }

            console.log(i + " " + m + " " + sum);

            if (sum > num || f === 1) {
                h = m - 1n;
            } else if (sum < num) {
                l = m + 1n;
            } else {
                return m.toString();
            }
        }
    }

    return "";
    
};