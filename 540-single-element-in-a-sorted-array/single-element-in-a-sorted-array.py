class Solution:
    def singleNonDuplicate(self, nums: List[int]) -> int:

        l=0
        h=len(nums)-1
        while(l<h):
            mid=floor((l+h)/2)

            if (nums[mid]!=nums[mid-1] and nums[mid]!=nums[mid+1]) :
                return nums[mid]
            elif(nums[mid]==nums[mid-1]):
                if (mid%2!=0):
                    l=mid+1
                else:
                    h=mid
            elif(nums[mid]==nums[mid+1]):
                if(mid%2==0):
                    l=mid+1
                else:
                    h=mid


        return nums[l]

                

        