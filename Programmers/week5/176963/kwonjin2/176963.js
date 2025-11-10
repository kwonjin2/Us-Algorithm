function solution(name, yearning, photo) {
    const result = [];
    const pair = {};
    
    for (let i = 0; i < name.length; i++) {
        pair[name[i]] = yearning[i]
    }
    
    
    for (let i = 0; i < photo.length; i++) {
        let sum = 0;
        for (let j = 0; j < photo[i].length; j++) {
            sum += pair[photo[i][j]] ?? 0;
        }
        result.push(sum);
    }
    
    return result;
}