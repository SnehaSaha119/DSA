function isValidSudoku(board: string[][]): boolean {
    // let l=board.length
    // let flag = true
    
    // for(let i=0;i<l;i++){
        
    //     let ro;
    //     let col;

    //     //row
    //     let row = new Set()
    //     for(let j=0;j<l;j++){
    //         if (board[i][j] !== ".") {
    //             if(row.has(board[i][j])){
    //                 flag = false
    //                 break
    //             }
    //             row.add(board[i][j])
    //         }
    //     }

    //     //column
    //     let column = new Set()
    //     for(let k=0;k<l;k++){
    //         if (board[k][i] !== ".") {
    //             if(column.has(board[k][i])){ //set,map has O(1)
    //                 flag = false
    //                 break
    //             }
    //             column.add(board[k][i])
    //         }
    //     }

    //     if(flag==false) break
        
    // }

    // //box
    
    // for (let i = 0; i < l; i++) {
    //     const rowStart = Math.floor(i / 3) * 3;
    //     const colStart = (i % 3) * 3;
    //     let box = new Set()
    //     for (let j = 0; j < l; j++) {
    //         const row = rowStart + Math.floor(j / 3);
    //         const col = colStart + (j % 3);
    //         const cell = board[row][col];
    //         if (cell !== ".") {
    //             if (box.has(cell)) {
    //                 flag = false
    //                 break
    //             }
    //             box.add(cell);   
    //         }
    //     }
    // }


    // return flag



    /*
if(!set.add(Character.toString(board[i][j])+"Row Wise"+i) || !set.add(Character.toString(board[i][j])+"Column Wise"+j) || !set.add(Character.toString(board[i][j])+"Sub Grid"+i/3+"And"+j/3)) { 
    */

    let rows = new Array(9).fill(null).map(() => new Set());
    let cols = new Array(9).fill(null).map(() => new Set());
    let boxes = new Array(9).fill(null).map(() => new Set());

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let num = board[i][j];
            if (num !== '.') {
                let boxIndex = 3 * Math.floor(i / 3) + Math.floor(j / 3);

                // Check if the number already exists in the current row, column, or box
                if (rows[i].has(num) || cols[j].has(num) || boxes[boxIndex].has(num)) {
                    return false;
                }

                // Add the number to the respective sets
                rows[i].add(num);
                cols[j].add(num);
                boxes[boxIndex].add(num);
            }
        }
    }

    // If no duplicates are found, the board is valid
    return true;

    
};