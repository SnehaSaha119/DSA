class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        m = len(matrix)
        n = len( matrix[0])
        row = 0
        for i in range(0, m):
            for j in range(0, n):
                if (j==0 and matrix[i][j]==0):
                    row = 1
                    matrix[i][j] = 0
                elif (matrix[i][j]==0):
                    matrix[0][j] = 0
                    matrix[i][0] = 0

        for i in range(1, m):
            for j in range(1, n):
                if(matrix[i][0]==0 or matrix[0][j]==0):
                    matrix[i][j]=0

        if(matrix[0][0]==0):
            for j in range(0, n):
                matrix[0][j]=0
        
        if(row==1):
            for i in range(0, m):
                matrix[i][0]=0
                
            
        
                
        