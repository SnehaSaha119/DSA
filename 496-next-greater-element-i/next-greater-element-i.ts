function nextGreaterElement(nums1: number[], nums2: number[]): number[] {

    let nums1c = {}
    for(let i=0;i<nums1.length;i++){
        nums1c[nums1[i]]=i
    }
    console.log("***nums1c***",nums1c)
    let s = []
    let result = new Array(nums1.length).fill(-1)
    for(let i=0;i<nums2.length;i++){
        console.log("***s***",s)
        while(s.length>0 && s[s.length-1]<nums2[i]){
            let temp = s.pop()
            console.log("***temp***",temp)
            let index = nums1c[temp]
            console.log("*****",index)
            if(index!== undefined){
                result[index] = nums2[i]
                console.log("***result***",result)
            }
        }
        s.push(nums2[i])
    }

    return result

};