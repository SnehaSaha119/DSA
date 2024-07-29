function minDays(bloomDay: number[], m: number, k: number): number {
        let l = 0;
        let r = 0;
        for (let i=0;i<bloomDay.length;i++) {
            r = Math.max(r,bloomDay[i]);
        }

        let minDays = -1;
        while (l <= r) {
            let mid = Math.floor((l + r) / 2);

            if (getNumOfBouquets(bloomDay, mid, k) >= m) {
                minDays = mid;
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }

        return minDays;
};

function getNumOfBouquets(bloomDay,mid,k) {
        let numOfBouquets = 0;
        let count = 0;

        for (let i = 0; i < bloomDay.length; i++) {
            if (bloomDay[i] <= mid) {
                count++;
            } else {
                count = 0;
            }

            if (count == k) {
                numOfBouquets++;
                count = 0;
            }
        }

        return numOfBouquets;
    }