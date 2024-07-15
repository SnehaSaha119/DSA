class Solution {
    public int findGCD(int[] nums) {
        int min = Integer.MAX_VALUE;
        int max = Integer.MIN_VALUE;
        int n = nums.length;

        for(int i=0;i<n;i++){
            min = Math.min(min,nums[i]);
            max = Math.max(max,nums[i]);
        }

        return gcd(max,min); 
    }

    int gcd(int a,int b){
        if(a==0) return b;
        if(b==0) return a;

        return gcd(b,a%b);
    }
}