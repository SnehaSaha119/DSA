function search(nums: number[], target: number): number {

    let l=nums.length
    let low=0
    let high=l-1
    

    while(low<=high){

        let mid=Math.floor((low+high)/2)

        if(nums[mid]==target) return mid
        else if(nums[low]<=nums[mid]){
            if(target>=nums[low] && target<=nums[mid])
                high = mid-1
            else 
                low = mid+1

        }else{

            if(target>=nums[mid] && target<=nums[high])
                low = mid+1
            else 
                high = mid-1


        }

    }

    return -1
    
};