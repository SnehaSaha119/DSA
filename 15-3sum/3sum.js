/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // let st = new Set();
    // let ans = [];
    // let n = nums.length
    // for (let i = 0; i < n; i++) {
    //     let hashset = new Set();
    //     for (let j = i + 1; j < n; j++) {
    //         //Calculate the 3rd element:
    //         let third = -(nums[i] + nums[j]);

    //         //Find the element in the set:
    //         if (hashset.has(third)) {
    //             let temp = [nums[i], nums[j], third];
    //             temp.sort((a, b) => a - b);
    //             ans.push(temp);
    //         }
    //         hashset.add(nums[j]);
    //     }
    // }

    // //store the set in the answer:
    // let set  = new Set(ans.map(JSON.stringify));
    // ans = Array.from(set).map(JSON.parse);
    // return ans;

    let ans = [];
    let n = nums.length
    nums.sort((a, b) => a - b);
    for (let i = 0; i < n; i++) {
        // remove duplicates:
        if (i !== 0 && nums[i] === nums[i - 1]) continue;

        // moving 2 pointers:
        let j = i + 1;
        let k = n - 1;
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum < 0) {
                j++;
            } else if (sum > 0) {
                k--;
            } else {
                let temp = [nums[i], nums[j], nums[k]];
                ans.push(temp);
                j++;
                k--;
                // skip the duplicates:
                while (j < k && nums[j] === nums[j - 1]) j++;
                while (j < k && nums[k] === nums[k + 1]) k--;
            }
        }
    }
    return ans;
};