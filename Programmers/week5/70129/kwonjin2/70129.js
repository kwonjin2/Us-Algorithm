function solution(s) {
    let twoCnt = 0;
    let zeroCnt = 0;
    
    while (s !== '1') {
        let deleteZero = ''
        
        for (let i of s) {
            if (i === '0') zeroCnt++;
            else deleteZero += i;
        }
        
        s = (deleteZero.length).toString(2);
        twoCnt++;
    }
    
    return [twoCnt, zeroCnt]
}