function countNegatives(grid: number[][]): number {

    let n = grid.length;
    let m = grid[0].length;

    let i = 0;
    let j = m-1;

    let count = 0;

    while(i>=0 && i<n && j>=0 && j<m){
        if(grid[i][j]<0){
            count = count + (n-i);
            j--;
        }else{
            i++;
        }
    }

    return count;
    
};