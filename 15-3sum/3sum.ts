function threeSum(nums: number[]): number[][] {
    // let arr = []
    // for(let i=0;i<nums.length;i++){
    //     let sum = 0
    //     let map = []
    //     for(let j=i+1;j<nums.length;j++){
    //         sum = -(nums[i]+nums[j])

    //         if(map[sum]){
    //             let temp = [nums[i],nums[j],sum]
    //             temp.sort((a,b)=> a-b)
    //             arr.push(temp)
    //         }
    //         map.push(j)
    //     }
    // }

    // let set  = new Set(arr.map(value => JSON.stringify(value)));
    // arr = Array.from(set).map(value => JSON.parse(value));

    // return  arr

    nums.sort((a,b)=>a-b)
    let i;
    let j;
    let n=nums.length
    let arr = []
    for(let k=0;k<n;k++){
        if(k!=0 && nums[k]==nums[k-1]) continue
        i=k+1
        j=n-1
        while(i<j){
            let sum = nums[k]+nums[i]+nums[j]

            if(sum<0) i++
            else if(sum>0) j--
            else{
                let temp = [nums[k],nums[i],nums[j]]
                arr.push(temp)
                i++
                j--
                while(i<j && nums[i]==nums[i-1]){
                    i++
                }

                while(i<j && nums[j]==nums[j+1]){
                    j--
                }
            }
        }
    }
    return arr
};