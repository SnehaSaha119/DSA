class Solution {
    public int[][] generateMatrix(int n) {

        int colStart = 0;
        int colEnd = n-1;
        int rowStart = 0;
        int rowEnd = n-1;
        int count = 1;
        int matrix[][] = new int[n][n];

    while(count<=n*n){

        //right
        for(int i=colStart;i<=colEnd;i++){
            matrix[rowStart][i] = count;
            count++;
        }
        rowStart++;

        //down
        for(int i=rowStart;i<=rowEnd;i++){
            matrix[i][colEnd] = count;
            count++;
        }
        colEnd--;

        //left
        for(int i=colEnd;i>=colStart;i--){
            matrix[rowEnd][i] = count;
            count++;
        }
        rowEnd--;

        //up
        for(int i=rowEnd;i>=rowStart;i--){
            matrix[i][colStart] = count;
            count++;
        }
        colStart++;
    }

    return matrix;
        
    }
}