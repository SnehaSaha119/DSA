class Solution {
    public int diagonalSum(int[][] mat) {

        int sum1 = 0;
        int sum2 = 0;
        int n = mat.length;

        for(int i=0;i<n;i++){
            sum1 = sum1 + mat[i][i];
            if(i!=n-i-1)
            sum2 = sum2 + mat[i][n-i-1];
        }

        return sum1+sum2;
            
        }
}