
function totalHammingDistance(nums: number[]): number {
    let totalDistance = 0;
    const n = nums.length;

    for (let bit = 0; bit < 32; bit++) {
        let countOnes = 0;

        for (let i = 0; i < n; i++) {
            countOnes += (nums[i] >> bit) & 1;
        }

        const countZeros = n - countOnes;
        totalDistance += countOnes * countZeros;
    }

    return totalDistance;
}


// function totalHammingDistance(nums: number[]): number {
//     let count = 0;
//     for(let i=0;i<nums.length-1;i++){
//         for(let j=i+1;j<nums.length;j++){
//             count = count + hammingDistance(nums[i],nums[j])
//         }
//     }

//     return count;
// };

// function hammingDistance(i,j){
//     let c = 0;
//     while(i!==0 || j!==0){
//         if((i&1) !== (j&1))
//             c++
        
//         i=i>>1;
//         j=j>>1;
//     }

//     return c;
// }