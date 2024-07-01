class Solution {
    public void setZeroes(int[][] matrix) {

        //optimized
        // int col = 1;

        // for(int i=0;i<matrix.length;i++){
        //     for(int j=0;j<matrix[0].length;j++){
        //         if(matrix[i][j]==0 && j==0){
        //             col=0;
        //             matrix[i][0]=0;
        //         }else if(matrix[i][j]==0){
        //             matrix[0][j]=0;
        //             matrix[i][0]=0;
        //         }
        //     }
        // }

        // for(int i=1;i<matrix.length;i++){
        //     for(int j=1;j<matrix[0].length;j++){
        //         if(matrix[0][j]==0 || matrix[i][0]==0){
        //             matrix[i][j]=0;
        //         }
        //     }
        // }

        // //For row 0 and column 0
        // if (matrix[0][0] == 0) {
        //     for (int j = 0; j < matrix[0].length; j++) {
        //         matrix[0][j] = 0;
        //     }
        // }
        // if (col == 0) {
        //     for (int i = 0; i < matrix.length; i++) {
        //         matrix[i][0] = 0;
        //     }
        // }


        //better
        int n = matrix.length;
        int m = matrix[0].length;
        int row[] = new int[n];
        int col[] = new int[m];

        //fill with 1
        Arrays.fill(row,1);
        Arrays.fill(col,1);
        
        for(int i=0;i<matrix.length;i++){
            for(int j=0;j<matrix[0].length;j++){
                if(matrix[i][j]==0){
                    row[i]=0;
                    col[j]=0;
                }
            }
        }

        for(int i=0;i<matrix.length;i++){
            for(int j=0;j<matrix[0].length;j++){
                if(row[i]==0 || col[j]==0){
                    matrix[i][j]=0;
                }
            }
        }

            
        }
    }