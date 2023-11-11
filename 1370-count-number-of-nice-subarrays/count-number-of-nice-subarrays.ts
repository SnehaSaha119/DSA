function numberOfSubarrays(nums: number[], k: number): number {
    // let niceCount = 0
    // let final = []
    // for(let i=0;i<nums.length;i++){
    //     let temp = []
    //     let count = 0

    //     for(let j=i;j<nums.length;j++){
    //         if(nums[j]==1 || nums[j]%2!=0){
    //             count++
    //             console.log("**if 2**",count)
    //         }

    //         if(count==k){
    //             niceCount++
    //             final.push(temp)
    //             console.log("**if 1**",count,final)
    //         }
            
    //         temp.push(nums[j])
    //         console.log("****",temp)
    //     }
    // }

    // return niceCount

    let start=0
    let end=0
    let finalCount=0
    let oddCount=0
    let l = nums.length
    let tempCount=0

    while(end<l){
        
        if(nums[end]%2!=0){
            oddCount++
            tempCount=0
        } 
        
        while(oddCount==k){


            console.log("*1*",start,end)
            tempCount++

            if(nums[start]%2!=0) {
                oddCount--
                start++
                break
            }
            
            start++

        }

        // if(oddCount==(k-1)){
        //     end++
        //     if(nums[end]%2==0) start++
        // }else 
        
        end++
        finalCount+=tempCount

        console.log("*2*",start,end)

    }

    return finalCount

};