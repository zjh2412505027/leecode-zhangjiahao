var setZeroes = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    // 标记第一行、第一列原本是否存在0
    let row0HasZero = false;
    let col0HasZero = false;

    // 1. 检查第一列有没有0
    for(let i = 0; i < m; i++){
        if(matrix[i][0] === 0){
            col0HasZero = true;
            break;
        }
    }
    // 2. 检查第一行有没有0
    for(let j = 0; j < n; j++){
        if(matrix[0][j] === 0){
            row0HasZero = true;
            break;
        }
    }

    // 3. 遍历剩余格子，用首行首列标记行列是否要清零
    for(let i = 1; i < m; i++){
        for(let j = 1; j < n; j++){
            if(matrix[i][j] === 0){
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    // 4. 根据首列标记，清空对应行（跳过第0行）
    for(let i = 1; i < m; i++){
        if(matrix[i][0] === 0){
            for(let j = 1; j < n; j++){
                matrix[i][j] = 0;
            }
        }
    }
    // 5. 根据首行标记，清空对应列（跳过第0列）
    for(let j = 1; j < n; j++){
        if(matrix[0][j] === 0){
            for(let i = 1; i < m; i++){
                matrix[i][j] = 0;
            }
        }
    }

    // 6. 单独处理第一行、第一列
    if(row0HasZero){
        for(let j = 0; j < n; j++) matrix[0][j] = 0;
    }
    if(col0HasZero){
        for(let i = 0; i < m; i++) matrix[i][0] = 0;
    }
};