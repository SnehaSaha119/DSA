/**
 Do not return anything, modify board in-place instead.
 */
function solveSudoku(board: string[][]): void {

    solveSudokuBoard(board)

};

function isValid(board, row, col, c) {
    for (let i = 0; i < 9; i++) {
        if (board[i][col] === c) return false; // Check column
        if (board[row][i] === c) return false; // Check row
        if (board[3 * Math.floor(row / 3) + Math.floor(i / 3)][3 * Math.floor(col / 3) + i % 3] === c) return false; // Check 3x3 sub-grid
    }
    return true;
}

function solveSudokuBoard(board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === '.') {
                for (let c of '123456789') {
                    if (isValid(board, i, j, c)) {
                        board[i][j] = c;
                        if (solveSudokuBoard(board)) return true;
                        board[i][j] = '.';
                    }
                }
                return false;
            }
        }
    }
    return true;
}