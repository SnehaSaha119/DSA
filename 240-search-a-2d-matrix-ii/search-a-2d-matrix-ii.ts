function searchMatrix(matrix: number[][], target: number): boolean {

    let found = false;
    let n = matrix.length;
    let m = matrix[0].length;

    let i = 0;
    let j = m-1;

    while(i>=0 && i<n && j>=0 && j<m){
        if(matrix[i][j]==target){
            found = true;
            break;
        }
        else if(matrix[i][j]>target)
            j--;
        else
            i++;
    }

    return found;
};