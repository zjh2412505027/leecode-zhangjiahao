/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    // 检查数字 num 是否可以放在 (row, col) 位置
    const isValid = (row, col, num) => {
        // 检查同一行
        for (let i = 0; i < 9; i++) {
            if (board[row][i] === num) return false;
        }
        // 检查同一列
        for (let i = 0; i < 9; i++) {
            if (board[i][col] === num) return false;
        }
        // 检查 3x3 宫格
        const boxRow = Math.floor(row / 3) * 3;
        const boxCol = Math.floor(col / 3) * 3;
        for (let i = boxRow; i < boxRow + 3; i++) {
            for (let j = boxCol; j < boxCol + 3; j++) {
                if (board[i][j] === num) return false;
            }
        }
        return true;
    };

    // 回溯函数
    const backtrack = () => {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (board[row][col] === '.') {
                    // 尝试填入 1-9
                    for (let num = 1; num <= 9; num++) {
                        const charNum = String(num);
                        if (isValid(row, col, charNum)) {
                            board[row][col] = charNum;
                            // 递归尝试下一个位置
                            if (backtrack()) return true;
                            // 回溯：失败则恢复为 '.'
                            board[row][col] = '.';
                        }
                    }
                    // 所有数字都试过都不行，说明无解
                    return false;
                }
            }
        }
        // 所有位置都填满了，说明找到了解
        return true;
    };

    backtrack();
};