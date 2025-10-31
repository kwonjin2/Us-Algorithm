function solution(board, moves) {
    const stack = [];
    let result = 0;
    
    for (let move of moves) {
        const col = move - 1;
        
        for (let row = 0; row < board.length; row++) {
            const doll = board[row][col];
            
            if (doll !== 0) {
                board[row][col] = 0;
                
                if (stack[stack.length - 1] === doll) {
                    stack.pop();
                    result += 2;
                } else {
                    stack.push(doll);
                }
                
                break;
            }
        }
    }
    
    return result;
}