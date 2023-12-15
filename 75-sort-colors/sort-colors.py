class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """

        count0 = 0
        count1 = 0
        count2 = 0

        for i in nums:
            if i==0:
                count0 = count0+1
            elif i==1:
                count1 = count1+1
            elif i==2:
                count2 = count2+1

        index = 0
        for i in range(0,count0):
            nums[index]=0
            index = index+1

        for i in range(0,count1):
            nums[index]=1
            index = index+1
        
        for i in  range(0,count2):
            nums[index]=2
            index = index+1