class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        minNo = prices[0]
        maxNo = 0
        l = len(prices)
        for i in range(1,l):
            minNo = min(minNo,prices[i])
            maxNo = max(prices[i]-minNo,maxNo)
        
        return maxNo