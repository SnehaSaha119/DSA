function numIslands(grid: string[][]): number {
    let rows = grid.length 
    let columns = grid[0].length
    let visited = Array.from({length: rows },()=> new Array(columns).fill(0))
    let islandCount = 0

    for(let i=0;i<rows;i++){
        for(let j=0;j<columns;j++){
            if(visited[i][j]==0 && grid[i][j]=='1'){
                islandCount++
                bfs(i,j,visited,grid,rows,columns)
            }
        }
    }

    return islandCount
    
};

function bfs(i,j,visited,grid,rows,columns){
    visited[i][j]=1
    let queue = []
    queue.push([i,j])

    console.log("1",queue)

    while(queue.length>0){

        let ele = queue.shift()
        console.log(ele)
        console.log("2",queue)
        let eleRow = ele[0]
        let eleCol = ele[1]

        // //Adding all 8 possible nodes
        // for(let i=-1;i<=1;i++){
        //     for(let j=-1;j<=1;j++){
        //         let curRow = eleRow + i
        //         let curCol = eleCol + j

        //         if(curRow>-1 && curRow<rows && curCol>-1 && curCol<columns && 
        //         visited[curRow][curCol]==0 && grid[curRow][curCol]=='1'){
        //             visited[curRow][curCol] = 1
        //             queue.push([curRow,curCol])
        //             console.log("3",queue)
        //         }
        //     }
        // }

        //Adding all 4 possible nodes
        let curRow
        let curCol

        curRow = eleRow 
        curCol = eleCol + 1

        if(curRow>-1 && curRow<rows && curCol>-1 && curCol<columns && 
                visited[curRow][curCol]==0 && grid[curRow][curCol]=='1'){
                    visited[curRow][curCol] = 1
                    queue.push([curRow,curCol])
                    //console.log("3",queue)
        }

        curRow = eleRow 
        curCol = eleCol - 1

        if(curRow>-1 && curRow<rows && curCol>-1 && curCol<columns && 
                visited[curRow][curCol]==0 && grid[curRow][curCol]=='1'){
                    visited[curRow][curCol] = 1
                    queue.push([curRow,curCol])
                    //console.log("3",queue)
        }

        curRow = eleRow + 1
        curCol = eleCol

        if(curRow>-1 && curRow<rows && curCol>-1 && curCol<columns && 
                visited[curRow][curCol]==0 && grid[curRow][curCol]=='1'){
                    visited[curRow][curCol] = 1
                    queue.push([curRow,curCol])
                    //console.log("3",queue)
        }

        curRow = eleRow - 1
        curCol = eleCol

        if(curRow>-1 && curRow<rows && curCol>-1 && curCol<columns && 
                visited[curRow][curCol]==0 && grid[curRow][curCol]=='1'){
                    visited[curRow][curCol] = 1
                    queue.push([curRow,curCol])
                    //console.log("3",queue)
        }

    }
}