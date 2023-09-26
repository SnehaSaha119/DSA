/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    //------Brute force
    // let i=0;
    // let j=0;
    // let arr=[]
    // while(i<m && j<n){
    //     if(nums1[i]<nums2[j]){
    //         arr.push(nums1[i])
    //         i++
    //     }
    //     else if(nums1[i]>nums2[j]){
    //         arr.push(nums2[j])
    //         j++
    //     } 
    //     else {
    //         arr.push(nums1[i])
    //         arr.push(nums2[j])
    //         i++
    //         j++
    //     }
    // }
    // while(i<m){
    //     arr.push(nums1[i])
    //     i++
    // }
    // while(j<n){
    //     arr.push(nums2[j])
    //     j++
    // }
    // i=0
    // while(i<(m+n)){
    //     nums1[i]=arr[i]
    //     i++
    // }

    //---Optimized
    let k = m+n-1
    let i=m-1
    let j=n-1
    while(i>=0 && j>=0){
        if(nums1[i]>nums2[j]){
            nums1[k]=nums1[i]
            k--
            i--
        }else if(nums1[i]<nums2[j]){
            nums1[k]=nums2[j]
            k--
            j--
        }else{
            nums1[k]=nums1[i]
            k--
            i--
            nums1[k]=nums2[j]
            k--
            j--
        }
    }

    while(i>=0){
        nums1[k]=nums1[i]
        k--
        i--
    }
    while(j>=0){
        nums1[k]=nums2[j]
        k--
        j--
    }

    
};