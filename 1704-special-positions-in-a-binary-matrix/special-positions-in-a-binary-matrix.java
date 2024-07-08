class Solution {
    public int numSpecial(int[][] mat) {

    int n = mat.length;
    int m = mat[0].length;

    int row[] = new int[n];
    Arrays.fill(row,0);
    int col[] = new int[m];
    Arrays.fill(col,0);
    for(int i=0;i<mat.length;i++){
        for(int j=0;j<mat[0].length;j++){
            if(mat[i][j]==1){
                row[i] = row[i]+1;
                col[j] = col[j]+1;
            }
        }
    }

    int count = 0;
    for(int i=0;i<mat.length;i++){
        for(int j=0;j<mat[0].length;j++){
            if(mat[i][j]==1){
                if(row[i]-1==0 && col[j]-1==0)
                    count++;
            }
        }
    }

    return count;
        
    }
}